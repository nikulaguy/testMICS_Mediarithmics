import { useEffect, useState } from 'react';
import { ConfigProvider, App as AntApp } from 'antd';
import { micsTheme, scale, semantic } from './theme/micsTheme';
import { AppShell, Button, Icon, TabBar, type Crumb } from './ui';
import { SegmentsList } from './pages/SegmentsList';
import { UsageOverview } from './pages/UsageOverview';
import { AlertsPage, ALERT_SECTIONS } from './pages/AlertsPage';
import { SegmentDetail } from './pages/SegmentDetail';
import { SegmentDetailActions } from './pages/SegmentDetailActions';
import type { Segment } from './data/segments';

type Tab = 'segments' | 'usage' | 'alerts';

const TAB_LABEL: Record<Tab, string> = {
  segments: 'Segments',
  usage: 'Usage overview',
  alerts: 'Alerts',
};

export default function App() {
  const [section, setSection] = useState('Segments');
  const [tab, setTab] = useState<Tab>('segments');
  const [detail, setDetail] = useState<Segment | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  /*
    Les alertes vivent ici et non dans AlertsPage : la pastille de l'onglet compte les
    mêmes lignes que les cartes. En la laissant en dur, fermer la dernière alerte
    affichait « Alerts 1 » au-dessus de quatre cartes à zéro.
  */
  const [alertSections, setAlertSections] = useState(ALERT_SECTIONS);
  const alertCount = alertSections.reduce((n, s) => n + s.rows.length, 0);

  const closeAlerts = (sectionKey: string, rowKeys: string[]) =>
    setAlertSections((prev) =>
      prev.map((s) =>
        s.key === sectionKey ? { ...s, rows: s.rows.filter((r) => !rowKeys.includes(r.key)) } : s,
      ),
    );

  // Cmd/Ctrl + K ouvre la palette de recherche globale, quel que soit l'écran.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  /** Revient à l'entrée Segments du menu, onglet Segments. */
  const goSegments = () => {
    setSection('Segments');
    setTab('segments');
    setDetail(null);
  };

  const selectMenu = (entry: string) => {
    setSection(entry);
    setDetail(null);
    if (entry === 'Segments') setTab('segments');
  };

  /**
   * Fil d'ariane : niveau 1 = item du SideMenu, niveau 2 = onglet actif,
   * niveau 3 = ressource ouverte. Tous les niveaux parents sont des liens.
   */
  const crumbs: Crumb[] =
    section !== 'Segments'
      ? [{ label: section }]
      : detail
        ? [
            { label: 'Segments', onClick: goSegments },
            { label: TAB_LABEL.segments, onClick: () => setDetail(null) },
            { label: detail.name },
          ]
        : [{ label: 'Segments', onClick: goSegments }, { label: TAB_LABEL[tab] }];

  const actions = detail ? (
    // Supprimer le segment ouvert renvoie à la liste : l'écran qu'on regardait
    // n'existe plus, y rester afficherait une ressource fantôme.
    <SegmentDetailActions segmentName={detail.name} onDelete={() => setDetail(null)} />
  ) : (
    <>
      {/*
        Pas de « ⋮ » ici : la liste n'a que ces deux actions. Un menu de dépassement
        vide apprend à ne plus l'ouvrir, et fait douter des autres écrans où il en
        contient vraiment.
      */}
      <Button icon={<Icon name="download" size={14} />}>Export</Button>
      <Button type="primary" icon={<Icon name="plus" size={14} />}>
        New segment
      </Button>
    </>
  );

  return (
    <ConfigProvider theme={micsTheme}>
      <AntApp>
        <AppShell
          crumbs={crumbs}
          actions={section === 'Segments' ? actions : null}
          searchOpen={searchOpen}
          onSearchOpenChange={setSearchOpen}
          menuActive={section}
          onMenuSelect={selectMenu}
        >
          {section !== 'Segments' ? (
            <section
              style={{
                background: semantic.bgContainer,
                borderRadius: scale.radiusCard,
                padding: scale.space35,
                color: semantic.textLighter,
              }}
            >
              L'entrée « {section} » n'est pas maquettée : hors périmètre de ce test.
            </section>
          ) : detail ? (
            <SegmentDetail segment={detail} />
          ) : (
            <>
              <div style={{ marginBottom: scale.space16 }}>
                <TabBar
                  active={tab}
                  onChange={(k) => setTab(k as Tab)}
                  items={[
                    { key: 'segments', label: 'Segments' },
                    { key: 'usage', label: 'Usage overview' },
                    { key: 'alerts', label: 'Alerts', badge: alertCount },
                  ]}
                />
              </div>
              {tab === 'segments' && <SegmentsList onOpenDetail={setDetail} />}
              {tab === 'usage' && <UsageOverview />}
              {tab === 'alerts' && <AlertsPage sections={alertSections} onClose={closeAlerts} />}
            </>
          )}
        </AppShell>
      </AntApp>
    </ConfigProvider>
  );
}
