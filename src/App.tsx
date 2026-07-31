import { useEffect, useState } from 'react';
import { ConfigProvider, App as AntApp } from 'antd';
import { micsTheme, scale, semantic } from './theme/micsTheme';
import { AppShell, Button, Icon, TabBar, type Crumb } from './ui';
import { Boards } from './pages/Boards';
import { CampaignsList } from './pages/CampaignsList';
import { CampaignsActions } from './pages/CampaignsActions';
import { SegmentsList } from './pages/SegmentsList';
import { UsageOverview } from './pages/UsageOverview';
import { AlertsPage, ALERT_SECTIONS } from './pages/AlertsPage';
import { SegmentDetail } from './pages/SegmentDetail';
import { SegmentDetailActions } from './pages/SegmentDetailActions';
import { SEGMENTS, type Segment } from './data/segments';

type Tab = 'segments' | 'usage' | 'alerts';

const TAB_LABEL: Record<Tab, string> = {
  segments: 'Segments',
  usage: 'Usage overview',
  alerts: 'Alerts',
};

/*
  Routage par le fragment d'URL. Pas de routeur : trois segments de chemin suffisent
  à décrire où l'on est, et un rafraîchissement doit y ramener.

    #/boards                #/boards/campaigns
    #/segments              #/segments/usage      #/segments/alerts
    #/segments/s/18280553   (détail d'un segment)
    #/feeds                 (entrées de menu non maquettées)

  Sans fragment, on arrive sur Boards : c'est la home du produit, la route /home du
  navigator, et pas Segments.
*/
const MENU_ENTRIES = [
  'Boards', 'Builders', 'User lookup', 'Segments', 'Feeds', 'Creatives',
  'Automations', 'Targeting lists', 'Experiments', 'Campaigns', 'Funnel', 'Query Tool',
];

const slug = (entry: string) => entry.toLowerCase().replace(/\s+/g, '-');
const entryFromSlug = (s: string) => MENU_ENTRIES.find((e) => slug(e) === s);

interface Route {
  section: string;
  tab: Tab;
  board: string;
  segmentId: string | null;
}

function parseHash(hash: string): Route {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const section = entryFromSlug(parts[0] ?? '') ?? 'Boards';
  if (section === 'Segments') {
    if (parts[1] === 's' && parts[2]) return { section, tab: 'segments', board: 'activities', segmentId: parts[2] };
    const tab = (['usage', 'alerts'].includes(parts[1]) ? parts[1] : 'segments') as Tab;
    return { section, tab, board: 'activities', segmentId: null };
  }
  if (section === 'Boards') {
    return { section, tab: 'segments', board: parts[1] || 'activities', segmentId: null };
  }
  return { section, tab: 'segments', board: 'activities', segmentId: null };
}

function toHash(r: Route) {
  if (r.section === 'Segments') {
    if (r.segmentId) return `#/segments/s/${r.segmentId}`;
    return r.tab === 'segments' ? '#/segments' : `#/segments/${r.tab}`;
  }
  if (r.section === 'Boards') return r.board === 'activities' ? '#/boards' : `#/boards/${r.board}`;
  return `#/${slug(r.section)}`;
}

/** Libellés des tableaux de bord, pour le fil d'ariane. Même liste que la TabBar. */
const BOARD_LABEL: Record<string, string> = {
  activities: 'Activities',
  builders: 'Builders usage',
  campaigns: 'Campaigns',
  client: "Client's usage - WIP",
  dataviz: 'Data Visualization eXperience',
  demo: 'Demo dashboard - Datamart',
  features: 'Features and adoption',
  havas: 'Havas Analytics',
  orgs: 'Organisations',
};

export default function App() {
  const initial = parseHash(window.location.hash);
  const [section, setSection] = useState(initial.section);
  const [tab, setTab] = useState<Tab>(initial.tab);
  const [board, setBoard] = useState(initial.board);
  const [detail, setDetail] = useState<Segment | null>(
    initial.segmentId ? SEGMENTS.find((s) => s.id === initial.segmentId) ?? null : null,
  );
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

  /*
    L'URL suit l'état. On n'écrit que si le fragment CHANGE : réécrire à l'identique
    empilerait une entrée d'historique à chaque rendu, et le bouton Retour ne
    remonterait plus nulle part.
  */
  useEffect(() => {
    const next = toHash({ section, tab, board, segmentId: detail?.id ?? null });
    if (window.location.hash !== next) window.history.replaceState(null, '', next);
  }, [section, tab, board, detail]);

  // Retour / Suivant du navigateur : l'état suit l'URL, dans l'autre sens.
  useEffect(() => {
    const onHash = () => {
      const r = parseHash(window.location.hash);
      setSection(r.section);
      setTab(r.tab);
      setBoard(r.board);
      setDetail(r.segmentId ? SEGMENTS.find((s) => s.id === r.segmentId) ?? null : null);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

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
    section === 'Boards'
      ? // Boards › nom du tableau de bord affiché : l'onglet est bien un niveau de
        // navigation, au même titre que l'onglet d'une page de détail.
        [
          { label: 'Boards', onClick: () => setBoard('activities') },
          { label: BOARD_LABEL[board] ?? board },
        ]
      : section !== 'Segments'
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
          actions={section === 'Segments' ? actions : section === 'Campaigns' ? <CampaignsActions /> : null}
          searchOpen={searchOpen}
          onSearchOpenChange={setSearchOpen}
          menuActive={section}
          onMenuSelect={selectMenu}
        >
          {section === 'Boards' ? (
            <Boards board={board} onBoardChange={setBoard} />
          ) : section === 'Campaigns' ? (
            <CampaignsList />
          ) : section !== 'Segments' ? (
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
