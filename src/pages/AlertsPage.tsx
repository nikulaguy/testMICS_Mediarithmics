import { useState } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Button, CountBadge, EmptyState, Icon, Link, Table, Tag } from '../ui';
import { primitives, scale, semantic } from '../theme/micsTheme';

interface AlertRow {
  key: string;
  name: string;
  count: string;
  trigger: string;
  feeds: string;
  userPoints: number;
}

export interface AlertSection {
  key: string;
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  rows: AlertRow[];
  link?: string;
}

/** Données de départ. L'état vit dans App : la pastille de l'onglet en dépend aussi. */
export const ALERT_SECTIONS: AlertSection[] = [
  {
    key: 'definition',
    title: 'Segment definition errors',
    icon: 'cluster',
    iconColor: primitives.redMain,
    description:
      "We couldn't compute some of your segments. This is usually due to an issue in your segment definition (obsolete OTQL for instance). You can edit them to check the query.",
    rows: [
      { key: '1', name: 'Dormant Users - 8 months LAL', count: '99+', trigger: '13 days ago', feeds: '0 feeds', userPoints: 0 },
    ],
  },
  {
    key: 'volume',
    title: 'Volume drops',
    icon: 'chart-line',
    iconColor: semantic.textNormal,
    description:
      "Those query segments' volumes dropped by more than 10% in a day. Please check this is normal and not due to integration issues or a schema change.",
    rows: [],
  },
  {
    key: 'loading',
    title: 'Initial loading errors',
    icon: 'feeds',
    iconColor: semantic.warning,
    description:
      "The following segments have some initial loading errors. Head to the segment's details and click on the feeds to troubleshoot issues.",
    rows: [],
  },
  {
    key: 'computation',
    title: 'Segment computation errors',
    icon: 'cloud',
    iconColor: primitives.redMain,
    description:
      "We couldn't compute some of your segments. This could be due to infrastructure issue. We will automatically recompute those segments in the next 24 hours.",
    rows: [],
    link: 'Get more information',
  },
];

interface Props {
  sections: AlertSection[];
  /** Ferme les alertes désignées. L'état vit dans App, la pastille de l'onglet en dépend. */
  onClose: (sectionKey: string, rowKeys: string[]) => void;
}

/**
 * Onglet « Alerts ».
 * Tout est replié à l'arrivée ; la barre d'en-tête entière est cliquable pour déplier.
 * Dans une carte dépliée : d'abord la rangée [texte … bouton à droite], puis le
 * tableau (ou l'état vide centré) sur toute la largeur en dessous.
 *
 * Le compteur d'une carte se déduit du nombre de lignes, jamais d'un champ à part :
 * deux sources pour le même nombre, c'est la garantie qu'elles finiront par diverger.
 */
export function AlertsPage({ sections, onClose }: Props) {
  const [open, setOpen] = useState<string[]>([]);
  /** Sélection par section : fermer dans l'une ne touche pas aux autres. */
  const [selection, setSelection] = useState<Record<string, string[]>>({});

  const toggle = (key: string) => setOpen((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  const closeSelected = (sectionKey: string) => {
    const keys = selection[sectionKey] ?? [];
    if (!keys.length) return;
    onClose(sectionKey, keys);
    // Vider la sélection : sans ça, elle désignerait des lignes disparues et le
    // bouton resterait actif sur du vide.
    setSelection((prev) => ({ ...prev, [sectionKey]: [] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      {sections.map((s) => {
        const isOpen = open.includes(s.key);
        const selected = selection[s.key] ?? [];
        const count = s.rows.length;
        return (
          <section
            key={s.key}
            style={{ background: semantic.bgContainer, borderRadius: scale.radiusCard, padding: scale.space20 }}
          >
            <div
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => toggle(s.key)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle(s.key);
                }
              }}
              style={{ display: 'flex', alignItems: 'center', gap: scale.space12, cursor: 'pointer' }}
            >
              <Icon name={s.icon} size={16} color={s.iconColor} />
              <span style={{ fontWeight: 500, color: semantic.textDarker }}>{s.title}</span>
              <CountBadge count={count} tone={count ? 'warning' : 'success'} />
              <span style={{ flex: 1 }} />
              {isOpen ? <UpOutlined style={{ color: semantic.textLighter }} /> : <DownOutlined style={{ color: semantic.textLighter }} />}
            </div>

            {isOpen && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16, marginTop: scale.space16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: scale.space24 }}>
                  <div style={{ flex: 1, color: semantic.textNormal }}>
                    {s.description}
                    {s.link && (
                      <div style={{ marginTop: scale.space16 }}>
                        <Link size="M">{s.link}</Link>
                      </div>
                    )}
                  </div>
                  {/*
                    Désactivé tant que rien n'est coché : l'action porte sur la
                    sélection, un bouton actif sans sélection ne saurait pas sur quoi
                    agir. Le nombre est dans le nom accessible, pas dans le libellé
                    visible qui reste celui de la maquette.
                  */}
                  <Button
                    disabled={selected.length === 0}
                    onClick={() => closeSelected(s.key)}
                    aria-label={
                      selected.length
                        ? `Close selected alerts (${selected.length})`
                        : 'Close selected alerts'
                    }
                    style={{ flex: '0 0 auto' }}
                  >
                    Close selected alerts
                  </Button>
                </div>

                {s.rows.length ? (
                  <Table<AlertRow>
                    size="small"
                    rowKey="key"
                    pagination={false}
                    rowSelection={{
                      type: 'checkbox',
                      selectedRowKeys: selected,
                      onChange: (keys) =>
                        setSelection((prev) => ({ ...prev, [s.key]: keys as string[] })),
                    }}
                    dataSource={s.rows}
                    columns={[
                      {
                        title: 'Name',
                        dataIndex: 'name',
                        render: (v: string, r: AlertRow) => (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: scale.space8 }}>
                            <Link size="M">{v}</Link>
                            <Tag color="blue">{r.count}</Tag>
                          </span>
                        ),
                      },
                      {
                        title: 'Type',
                        key: 'type',
                        width: 90,
                        render: () => <Icon name="query" size={16} color={semantic.textLighter} />,
                      },
                      { title: 'First alert trigger', dataIndex: 'trigger', width: 160 },
                      { title: 'Feeds', dataIndex: 'feeds', width: 120 },
                      { title: '# User points', dataIndex: 'userPoints', width: 120 },
                      {
                        title: '',
                        key: 'actions',
                        width: 56,
                        render: () => <Icon name="dots" size={14} color={semantic.textLighter} />,
                      },
                    ]}
                  />
                ) : (
                  <EmptyState title="No alert triggered" description="There are no alerts at the moment." />
                )}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
