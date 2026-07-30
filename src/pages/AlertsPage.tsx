import { useState } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Button, CountBadge, EmptyBlock, Icon, Link, Table, Tag } from '../ui';
import { primitives, scale, semantic } from '../theme/micsTheme';

interface AlertRow {
  key: string;
  name: string;
  count: string;
  trigger: string;
  feeds: string;
  userPoints: number;
}

interface Section {
  key: string;
  title: string;
  icon: string;
  iconColor: string;
  count: number;
  description: string;
  rows: AlertRow[];
  link?: string;
}

const SECTIONS: Section[] = [
  {
    key: 'definition',
    title: 'Segment definition errors',
    icon: 'cluster',
    iconColor: primitives.redMain,
    count: 1,
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
    count: 0,
    description:
      "Those query segments' volumes dropped by more than 10% in a day. Please check this is normal and not due to integration issues or a schema change.",
    rows: [],
  },
  {
    key: 'loading',
    title: 'Initial loading errors',
    icon: 'feeds',
    iconColor: semantic.warning,
    count: 0,
    description:
      "The following segments have some initial loading errors. Head to the segment's details and click on the feeds to troubleshoot issues.",
    rows: [],
  },
  {
    key: 'computation',
    title: 'Segment computation errors',
    icon: 'cloud',
    iconColor: primitives.redMain,
    count: 0,
    description:
      "We couldn't compute some of your segments. This could be due to infrastructure issue. We will automatically recompute those segments in the next 24 hours.",
    rows: [],
    link: 'Get more information',
  },
];

/**
 * Onglet « Alerts ».
 * Tout est replié à l'arrivée ; la barre d'en-tête entière est cliquable pour déplier.
 * Dans une carte dépliée : d'abord la rangée [texte … bouton à droite], puis le
 * tableau (ou l'état vide centré) sur toute la largeur en dessous.
 */
export function AlertsPage() {
  const [open, setOpen] = useState<string[]>([]);

  const toggle = (key: string) => setOpen((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space16 }}>
      {SECTIONS.map((s) => {
        const isOpen = open.includes(s.key);
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
              <CountBadge count={s.count} tone={s.count ? 'warning' : 'success'} />
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
                  <Button disabled style={{ flex: '0 0 auto' }}>
                    Close selected alerts
                  </Button>
                </div>

                {s.rows.length ? (
                  <Table<AlertRow>
                    size="small"
                    rowKey="key"
                    pagination={false}
                    rowSelection={{ type: 'checkbox' }}
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
                  <EmptyBlock title="No alert triggered" description="There are no alerts at the moment." />
                )}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
