---
name: md-templates
description: Les 12 templates d’écran MICS — coque commune puis delta par template (Liste, Détail, Board, Édition, Choix du type, Settings, Overlay, Analytics, Lookup, Parcours de création). Charger après md-ds-rules, une fois le template choisi.
---

# md-templates — Les templates d'écran

Appliquer /md-ds-rules. Composants : /md-components (+ /md-charts pour Board, Détail, Analytics).
Références visuelles : page 🎼 Layout (un bloc numéroté par template) ; écrans clean cités par section.
L'aiguillage (quel template pour quelle spec) est dans la matrice de /md-ds-rules ; le choix de la
surface (page, modale, drawer) dans /md-produce-screen.

## La coque commune — écrite ici une seule fois

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE — jamais HUG : shell-row et content
                    sont en FILL vertical et doivent remplir ; bg/window)
  TopBar [17:26] — FILL, toujours premier enfant
  shell-row (HORIZONTAL, FILL/FILL, gap 0)
    SideMenu [19:32] — l 200 FIXE, hauteur FILL, item de section Active
    main (VERTICAL, FILL/FILL, gap 0)
      Actionbar [245:4156] — FILL (Type selon template)
      content (VERTICAL, FILL/FILL, padding space/35, bg/window,
               gap space/16 pour les données · space/35 pour réglages et tunnels)
```

Chaque template ci-dessous ne décrit que **son delta** par rapport à cette coque. La hauteur
d'écran s'aligne sur les écrans voisins de la section, pas au pixel du contenu — l'espace gris
sous un panel est normal.

## 1 · Liste

Toute page qui liste des ressources dans un tableau paginé (segments, feeds, campagnes…). Le
template le plus fréquent. Écrans clean : Segments — Liste (5 variantes), Segments — Alerts,
Boards — Campaigns, ✅ Campaigns.

Delta : Actionbar `Type=Light with actions` (Breadcrumb Level=1 — les groupes du SideMenu ne
comptent pas comme niveau). Dans content :

```
Tab Bar [249:107] — FILL (si la section a des onglets)
panel (VERTICAL, FILL, bg/container, radius/card, padding space/20, gap space/20)
  Table / Toolbar [21:65] — FILL
  table (VERTICAL, FILL, gap 0) : Table / Header Row [158:185] puis Table / Row [21:64] × n
  pagination-row (HORIZONTAL, FILL, alignée à droite) : Pagination [16:34]
```

- **Actions de page vs actions de tableau (non négociable)** : New …, Export, Edit, ⋮ →
  **Actionbar**. La Toolbar ne porte que ce qui agit sur le tableau (recherche, filtres, Edit
  view, actions de masse) → `Show export` et `Show primary` à false. Test : si l'action garde du
  sens quand le tableau est vide, elle est de page. Avant/après : page 📋 Audit, « ActionBar vs
  Toolbar ».
- Le tableau vit **toujours dans le panel blanc**, jamais à même le fond gris.
- Header Row et Rows : **booléens de colonnes strictement identiques** (voir /md-components
  §Table) — un désalignement signale un booléen ou un override de largeur.
- **Filtres — exposé ou panneau (revue client du 01/09/2026)** : jusqu'à TROIS dimensions, un
  déclencheur par filtre dans une `toolbar` composée à même le panel (rangée : Input de recherche
  à gauche, SPACE_BETWEEN, groupe droit de déclencheurs + Button « Edit view » ; l'action primaire
  remonte dans l'Actionbar). Au-delà : un seul bouton « Filters » ouvre le panneau en cascade
  (modèle Segments). Jamais les deux. Écrans : Campaigns 797:25218 / 614:97211 / 612:344.
- **Le déclencheur d'une multi-sélection porte le NOM de la dimension, jamais sa valeur**
  (« Status », « Label »). Status : dropdown à `Dropdown / Checkbox Item` + pied `Dropdown /
  Clear`. Label : déclencheur à **loupe** dès l'état fermé (il annonce la recherche qu'il ouvre),
  déployé au clic en champ « Search a label » ; la liste se filtre à la frappe, chaque choix part
  en chip, le champ reste ouvert pour cumuler.
- **Pas de filtre de colonne** (revue du 01/09/2026) : il doublait une dimension du panneau pour
  un usage marginal. Une dimension a UNE porte d'entrée. Le mécanisme a été retiré de
  `Table / HeaderCell`.
- **Rappel des filtres appliqués** : `Active Filter Bar` (712:132327) SOUS la toolbar, AVANT le
  tableau. Seules les valeurs **non lisibles ailleurs** y vont — donc toutes les multi-sélections ;
  un filtre à valeur unique lisible dans son sélecteur (période) n'y est JAMAIS dupliqué, la
  redondance apprend à ignorer la barre. Aucun filtre actif → pas de barre, pas de hauteur
  réservée.
- **Selects de filtre** : `State=Default` (valeur + caret). `Filled` ajoute une croix de reset — à
  réserver aux filtres réellement effaçables.
- **Colonne de sélection** : première colonne 56 FIXE, `Checkbox` dans `cell/select` (padding 12)
  côté lignes, `header/select` côté en-tête (pilote la sélection globale, Indeterminate si
  partielle).
- Liste vide → `Empty State` centré à la place du panel, coque conservée. Ligne dépliable à
  alertes → `Alert Row`. Dropdown ouvert → en absolu au-dessus du contenu, jamais dans
  l'autolayout.

## 2 · Détail de ressource

La fiche d'une ressource unique (segment, feed, campagne) : métriques + facettes par onglets. Pas
de tableau paginé ni de Toolbar en tête — sinon c'est une Liste. Écrans clean : Segment — Détail
(Stats), Dashboard (compare), Usage overview.

Delta : Actionbar `Type=Light with actions`, Breadcrumb Level=2 (« Section > Ressource »). Dans
content (gap 16) :

```
Resource Title Header [250:88] — FILL, TOUJOURS PREMIER (c'est lui qui identifie la ressource)
Segment Header [237:92] — FILL (si segment : bandeau des 6 métriques)
last-computed — « Last computed on … » Caption/Main text/lighter
Tab Bar [249:107] — FILL, SOUS l'en-tête, jamais au-dessus (optionnelle : l'omettre plutôt
                    que d'inventer des onglets)
[blocs de contenu, gap 16]
```

- Blocs validés : `Chart / Stats Line` pleine largeur · comparaison = `compare-controls`
  (HORIZONTAL, gap 12 : spacer FILL + Button + Select + Button) puis `compare-columns`
  (HORIZONTAL, gap 16, deux colonnes FILL identiques) · KPIs = rangée de `Counter` (gap 24).
- Les cartes de graphique portent leur padding (24) : ni padding de conteneur, ni panel autour.
  Couleurs de série : chart/1 → chart/7 (/md-charts).
- **Variante feed** (validée sur « Feeds — Détail ») : sous le Resource Title Header (Type
  « Server-side feed », date relative, **texte de la couleur de son icône**), une rangée
  `feed-meta` (HORIZONTAL, gap 35, centrée) : Badge de statut (Success pour Live, texte overridé)
  + destination (text/lighter) + sourceSegment (libellé text/lighter, nom du segment en primary).
  Puis Tab Bar (Stats / Troubleshooting), rangée de Counter, Stats Line. Statuts et métriques :
  /md-business (cycle de vie feeds) — ne rien inventer.

## 3 · Board

Tableaux de bord en sections de cartes-graphiques. **Le seul template sans Actionbar.** Écrans
clean : Boards — Activities, Client's Usage WIP, Builders usage (erreurs).

Delta : pas d'Actionbar ; `main` prend padding 35, et content padding 0/24/24/24, gap 35 — les
paddings **se cumulent volontairement** (35 + 24 = 59 à gauche/droite ; 0 en haut pour que la Tab
Bar affleure). SideMenu : item « Boards » toujours actif.

```
Tab Bar — FILL (sélection du board, ~13 onglets + débordement)
Board Action Bar [317:23796] — FILL (boutons + selects, Apply toujours en dernier)
section (VERTICAL, FILL, gap 16) × n : titre (Subtitle 2, capitales, text/lighter) + chartCards
```

- Sections séparées par le gap 35 de content, jamais par un divider. Une carte de graphique porte
  son padding (16), ne pas la réenvelopper.
- Contenus observés : Activities = Metrics Column + Scatter, Stacked Bar pleine largeur ·
  Client's Usage = 3 Counter, graphiques par canal, 3 Bar, section RETRIEVED EVENTS · Campaigns
  tabulaire = template **Liste**, pas Board · Builders usage = erreurs en Alert Row.

## 4 · Formulaire d'édition (wizard)

Création/édition en étapes. **Le SideMenu disparaît** : seule navigation, celle des étapes.
Écrans clean : Segment — Édition (2 variantes), Navigator - New Template Clean Room.

Delta : TopBar `showAppstore=false` ; pas de shell-row — l'Actionbar `Type=Edition` (Breadcrumb On
dark Level=2 + Save + croix) est pleine largeur sous la TopBar, puis :

```
body-row (HORIZONTAL, FILL/FILL)
  step-nav (VERTICAL, l 200 FIXE, FILL, bg/container, gap 0)
    Step Nav / Item [111:26] × 3–5 — FILL (un seul Current, passées = Validated)
  form-area (VERTICAL, FILL/FILL, padding 35, GAP 0, bg/window)
    section/nom (VERTICAL, FILL, padding 16/0/35/0, gap 24) : titre Headline 3 + description
      Body/Book text/lighter + champs (Input / Select / Switch / Radio, Show label activé)
    divider (FILL × 1 px, border/default) — enfant direct de form-area, JAMAIS après la dernière
    section/suivante (padding 24/0/35/0, gap 16) …
```

- **form-area a un gap 0** : les sections gèrent leur espacement (padding bas 35), sinon l'écart
  double.
- Save / Annuler dans l'Actionbar en haut à droite, pas en bas. La croix ferme et revient à la
  page précédente.
- Sections optionnelles dépliables → `Section Toggle` (111:39). Champ porteur d'aide → « i »
  (`showLabelIcon` du Select, icône info de l'Input) + Tooltip au survol.

## 5 · Choix du type

Première étape d'un tunnel de création : choisir le type de ressource. Toujours suivi du
Formulaire d'édition. Écrans clean : Segment — Choix du type, Offer — Choix du type.

Delta : pas de SideMenu ; Actionbar `Type=Light` pleine largeur ; content padding **35 en haut
seulement**, gap 35, **enfants centrés horizontalement** (seul template centré — les cartes
portent leur propre respiration) :

```
head (VERTICAL, gap 4, centré) : titre Headline 3 text/darker + sous-titre Body/Book text/lighter
primary-types (HORIZONTAL, gap 24, centré) :
  Selection Card Layout=Card [185:294] 240×200 · « Or » (Body/Book text/lighter) · Selection Card
other-types (VERTICAL, l 700 FIXE, gap 12) : libellé Body/Medium + Selection Card Layout=Row h56 × n
```

- **Deux choix principaux maximum** en Layout=Card ; le reste en Layout=Row. « Or » est un texte
  de liaison, pas un composant, uniquement entre deux cartes principales.
- Pas de bouton de validation : le clic sur une carte est l'action.

## 6 · Settings

Configuration du compte et de l'organisation. Reconnaissable à sa Settings Bar : on est sorti du
produit. Écrans clean : Settings — Profile & Preferences, Navigator - Account subscribed offers.

Delta : ni SideMenu ni Actionbar — la Settings Bar les remplace, puis un body à deux colonnes :

```
Settings Bar [309:161] — FILL, h size/row : retour (icon/arrow-left + Title) + slot Tabs
body (HORIZONTAL, FILL/FILL)
  subnav (VERTICAL, l 200 FIXE, FILL, bg/container, padding 8, gap 0)
    Settings Nav / Item [309:160] × n — FILL (l utile 184, un seul Active)
  content (VERTICAL, FILL/FILL, padding 35, GAP 35, bg/window)
    header (HORIZONTAL, FILL) : titre Headline 3 + action optionnelle à droite
    [groupes : formulaire, table, préférences]
```

- Gap de content **35** (pas 16) : les groupes de réglages respirent plus que les données.
- Pattern formulaire : `form` (VERTICAL, FILL, gap 16) de `form-row` (HORIZONTAL, gap 16) de
  `field` (VERTICAL, FILL, gap 4 — Input avec Show label) ; préférences = `row` (SPACE_BETWEEN)
  label Body/Book + Switch, sous un titre Body/Medium text/darker.
- Boutons d'enregistrement en bas à droite du groupe concerné, pas dans la Settings Bar. Édition
  d'un élément de liste → drawer par-dessus (§8), header Light.

## 7 · État vide

Pas un template : le composant `Empty State` (285:151) centré sur les deux axes dans la coque du
template hôte, panel blanc retiré. Message = absence de données, pas une erreur.

## 8 & 9 · Overlay — Drawer et Modale

Poser un drawer ou une modale SUR un écran d'un autre template. Composants : /md-components
§Overlays. Écrans clean : Segment — Create a feed (modale), Segments — Alerts + Drawer, Navigator -
drawer Clean Room. ⚠ Vérifier d'abord que c'est bien un overlay : l'arbre de /md-produce-screen
tranche, la page est le défaut.

- **Drawer** : tâche secondaire qui a besoin du contexte de la page — consulter, filtrer, éditer
  une liste. Contenu long ou scrollable, le fond reste une référence visible.
- **Modale** : décision courte et bloquante — créer en quelques champs, confirmer une destruction.
  Le contenu tient sans scroll ; s'il déborde, c'était un drawer ou une page.

```
Frame « NomEcran » (1496 × hauteur, layout NONE — 3 calques superposés)
  page — l'écran hôte COMPLET et inchangé (son template s'applique)
  scrim — rectangle plein écran, fill bg/scrim
  Overlay [228:3401] : Mode=Drawer (l 520, pleine hauteur, collé à droite)
                       ou Mode=Modal (960 × 692, centrée)
    Overlay / Header — Theme=Light (drawer) / Blue (modale)
    slot Content (padding 24) — on remplit le slot, on ne touche ni header ni footer
    Overlay / Footer — primaire en bas à droite, secondaire à sa gauche ; absent si pas d'action
```

Méthode : construire l'écran hôte en autolayout, passer la racine en layout libre, poser le scrim,
instancier l'Overlay et remplir son slot.

- **Un seul overlay actif** — jamais modale + drawer empilés ; un enchaînement d'étapes reste dans
  la même modale. Le fond n'est ni flouté ni tronqué : seul le scrim le couvre.
- Largeur du drawer constante (520) dans un même parcours. Grille de cartes dans une modale
  (Create a feed) : 3 colonnes de `Feed Card`, gap 24, toolbar de filtres en tête du slot.
- **Palette de recherche (Cmd+K)** : surface spéciale — `Search / Modal` centrée-haute (~140 du
  haut), sans header/footer Overlay, scrim bg/scrim, mêmes 3 calques mais SANS le composant
  Overlay. Sans résultat : slot = `Empty State`, query conservée (écran « Search — Empty State »).

## 10 · Analytics requêtable

L'utilisateur CONSTRUIT une requête (étapes, filtres) puis l'exécute — ce qui le distingue du
Board. Écran clean : Funnel — Analytics.

Delta : l'`Analytics Action Bar` [449:417] remplace l'Actionbar (Breadcrumb exposé · Metric ·
Date range · Export · **Execute Query** primaire · Share). Dans content (gap 16) :

```
dateChip (début de période : icon/calendar + date, fond bg/subtle)
stepRow × n (HORIZONTAL, gap 16) : rail (point primary 14) + Funnel / Step Card [450:456] FILL
addStepRow — bouton pleine largeur « Add a step » (bg/subtle, bordure)
dateChip (fin de période)
resultsPanel (HORIZONTAL, bg/container, radius/card)
  vizColumn (FILL, padding 24) : compteur + barre primary + triangle blue/100
  Funnel / Result Column [450:480] × n — FILL, bordure gauche
seeFunnelRow — bouton centré « See funnel for others »
```

- L'action primaire est **Execute Query**, dans la barre — jamais dans le contenu.
- Step Card : le délai (« n day maximum after previous step ») n'apparaît qu'à partir de l'étape 2
  (`Show delay`). Valeurs de filtre = **Tags fermables** (instance exposée `valueTag`).
- Une colonne de résultat par étape (Count, Succeeded, Failed, Show conversions…). Vocabulaire :
  /md-business + user guide /campaigns/funnel.

## 11 · Fiche 3 colonnes (lookup)

Consultation d'un objet à facettes multiples affichées **simultanément** (User Lookup : profil /
timeline / identifiants) — pas d'onglets, ce qui le distingue du Détail. Écran clean : User
Lookup — Détail.

Delta : coque standard (item « User lookup » actif, Actionbar Type=Light). Dans content (gap 16) :

```
lookupHeader (HORIZONTAL, gap 35) : « Last Seen At … » Body/Medium + UUID Body/Book text/lighter
columns (HORIZONTAL, gap 16, alignées en haut)
  profileColumn — l 314 FIXE : cartes Profiles, Segments
  timelineColumn — FILL : timelineRow (HORIZONTAL, gap 12) = rail + élément
    rail — l 24 FIXE, hauteur FILL, layout libre : railLine (2 px border/default, étirée,
      centrée) + marqueur en tête (icon/flag 16 = rangée jour · point 10 border/default = session)
  identifiersColumn — l 314 FIXE : cartes Accounts, Devices, Emails, Choices
```

- La carte commune aux 3 colonnes : bg/container, radius/card, padding 24, gap 12, titre
  **Headline 4** + divider 1 px border/default.
- Contenus : Profiles = compartment (Body/Medium), « User Account Id: » + Tag, « Expand all »,
  lignes clé/valeur (clé = **Tag Color=Default**, imbrication par padding gauche 16), « View
  more... » · Segments = noms + « View More » · Timeline = `Tag` Color=Default en séparateur de
  jour puis cartes de session (UN `Timeline / Session Header` + n `Timeline / Event Row`) ·
  Identifiers = Accounts (valeurs + Tag), Devices (`Lookup / Device Item` × n séparés par
  divider), Emails/Choices (message d'absence en text/lighter).
- Colonnes latérales **fixes (314)**, centre FILL. Une carte vide affiche son message (« This user
  has no Emails ») — jamais de carte absente. **Le rail vertical est obligatoire** : chaque rangée
  porte son segment de ligne + son marqueur ; un seul toggle (timeline technique) sur la première
  rangée jour. Identifiants techniques cliquables (udp:…) en primary. Vocabulaire : /md-business.

## 12 · Parcours de création de ressource (overlay plein écran)

Troisième forme d'overlay : un **plein écran qui recouvre l'application**. Le SideMenu disparaît,
la TopBar ne garde que le **nom** de l'organisation — sans le chevron d'en changer, la ressource
se rattache à celle d'où l'on est parti. Le header du tunnel est l'**Actionbar `Type=Creation`**
(fond `info`, `Title` = nom de la ressource, `Subtitle` = type choisi, croix seule à droite —
pas de fil d'Ariane, le tunnel est hors navigation) et sa croix est la seule sortie.
Gabarit de toute création (segment, dataset, campagne, feed). Référence : page 📋 Audit, section
« Parcours générique — Création de ressource » — 12 écrans, une fiche par écran + cadre général.
Côté code : coque `CreationFlow` (src/templates) + parcours vivant `SegmentCreation`, ouvert par
« New segment » sur la liste des segments.

**Trois temps, toujours dans cet ordre** : choix du type → tunnel d'étapes → confirmation.

### Le choix du type — hors tunnel
- Il **n'est jamais un jalon du stepper** : il est déjà fait quand le tunnel commence — l'erreur
  la plus fréquente des parcours existants.
- **Liste plate** quand les types ne sont pas liés : une carte, une rangée par type, 5 à 7 max.
  **Liste catégorisée** quand ils se groupent : une carte par catégorie côte à côte (3-4 max),
  rangées enfants cliquables, la catégorie non. Deux niveaux, jamais trois.
- Le clic sur une rangée vaut choix : pas de bouton de validation. Un type indisponible se grise,
  il ne disparaît pas.
- **L'icône « i » d'un item ouvre un Tooltip**, au survol comme au focus clavier (écran
  « infobulle au survol ») : explication courte, sans lien ni action ; dans une même carte tous
  les types en ont une ou aucun ; la flèche pointe l'icône, l'infobulle ne recouvre jamais l'item.
- **Au-delà de trois items dans une carte** (listes dynamiques : 48 types de dataset), la carte
  garde SA DIMENSION et la liste défile à l'intérieur — illustration, titre et description fixes.
  L'indice : à l'arrivée, l'item suivant est coupé en deux par le bord bas + ascenseur discret.
  La règle qui garantit la coupe : la hauteur de la zone visible n'est JAMAIS un multiple du pas
  des items (écran « carte défilante » : zone 244, pas 72). Ni pagination interne ni « Show more ».

### Le tunnel — 1 à 4 étapes
- **1 étape** → pas de stepper (un jalon n'informe de rien). **2 à 4** → stepper horizontal en
  tête : validé (pastille pleine + coche), courant (pleine + numéro), à venir (vide bordée) —
  jamais la couleur seule ; jalons validés cliquables, à venir non. **Au-delà de 4** : revoir le
  découpage, ou créer plus tôt et compléter depuis la page de détail.
- **Une action par étape.** Un contenu qui défile sur plusieurs sections est un formulaire long
  déguisé.
- Validation **en bas à droite** dans `Overlay / Footer` : « Back » secondaire (masqué sur la
  première étape), « Next » primaire. Pas de « Cancel » : sortir passe par la croix.
- **Le pied est collé en bas de la fenêtre** et ne défile jamais : seule la zone entre header et
  pied défile — chercher « Next » en bas d'une page longue fait croire l'étape bloquée. Le padding
  bas du contenu est conservé en fin de défilement, le dernier élément ne passe pas sous le pied.
- **Étape facultative** : tag « Optional » à droite du titre **ET** lien « Skip this step » dans
  le pied — le tag décrit, le lien offre la sortie. Sauter = valider vide. Jamais la dernière.
- **Dernière étape** : le primaire **nomme l'action** (« Create resource »), jamais « Next », et
  reprend le verbe de l'en-tête.

### Technical Name — suggéré depuis le nom (règle générique)
- Toute ressource qui expose un « Technical Name » le **suggère depuis le nom saisi** :
  minuscules, accents retirés, tout ce qui n'est pas alphanumérique devient un tiret, jamais
  deux de suite ni en tête/queue (« Été 2026 — Prospects FR » → `ete-2026-prospects-fr`).
- La suggestion suit la frappe dans Name et **s'arrête dès que l'utilisateur édite le champ
  lui-même** (une valeur voulue ne se fait jamais écraser) ; vider le champ rend la main à la
  suggestion. La frappe manuelle applique la même règle (minuscules, tirets).
- Côté code : `toTechnicalName` / `sanitizeTechnicalName` (`src/utils/technicalName.ts`, via
  `ui.ts`).

### Valider une étape — champs obligatoires
- « Next » est **présenté** désactivé tant qu'un obligatoire manque, mais pas réellement :
  `aria-disabled="true"`, jamais `disabled` — un bouton réellement désactivé ne reçoit ni focus ni
  clic, il ne peut rien expliquer (RGAA 7.1, 11.10). **Au clic**, les champs manquants passent en
  `Input State=Error` et le focus va au **premier**.
- L'erreur ne s'affiche **jamais pendant la frappe** : au clic sur « Next », ou à la sortie d'un
  champ rempli puis vidé. Elle se lève dès que le champ redevient valide.
- Obligatoire : astérisque dans le libellé **et** `aria-required` ; en erreur : `aria-invalid` +
  `aria-describedby` vers le message (RGAA 11.10, 8.9). Le message dit **quoi faire** (« This
  field is required. »), pas « Erreur ».
- **Pas d'Alert globale** tant que les erreurs sont visibles sur les champs ; au-delà de cinq, ou
  pour une erreur serveur : `Alert Type=Error` en tête d'étape. Le facultatif reste neutre ;
  « Back » et la croix restent actifs — une étape invalide n'emprisonne jamais.

### Sélectionner des éléments dans une étape — le drawer de sélection
Pattern relevé et retravaillé sur l'étape « Processing Activities » (écrans 4 à 7 de la section de
test 805:36419).
- **Étape vide** : Empty State avec un bouton au libellé explicite — « + Add Processing
  Activity ». Jamais un crayon : le crayon dit « modifier », pas « ajouter » (défaut prod corrigé).
- Le bouton ouvre un **Drawer** (Overlay Mode=Drawer, 520) : recherche en tête (Input, loupe),
  **header-row** de colonnes, rangées `Checkbox` (nom à gauche, métadonnée à droite). Pied : un
  seul primaire « Add » ; la croix du drawer annule.
- **Header-row** — obligatoire au-dessus de toute liste à colonnes, drawer comme étape : libellés
  de colonnes en Body/Medium `text/lighter`, h 40, bordure basse `border/default`, aligné sur les
  colonnes qu'il titre (« Name » / « Legal Basis »).
- **Éléments choisis** : liste dans l'étape avec le même header-row — icône (16, `text/lighter`)
  + nom Body/Book + métadonnée Caption `text/lighter` + **corbeille** en bout de rangée,
  séparateurs `border/default`.
- **Supprimer = modale de confirmation** (Overlay Mode=Modal 600) : titre qui nomme l'action
  (« Delete Processing Activity »), un paragraphe qui dit la portée réelle (l'élément est retiré
  de la sélection, pas détruit), « Cancel » secondaire + « Delete » primaire `Type=Danger`.
  **Jamais un popconfirm ancré** (pattern prod remplacé — écran « Aspiration — Suppression ») :
  une destruction se confirme au même endroit et de la même façon partout.

### Sortir en cours de route — la modale d'abandon
- La croix est disponible à tout moment. Dès qu'une saisie existe, elle ouvre une **modale
  d'abandon** posée **sur le tunnel** (pas sur la liste : le parcours n'est pas terminé). Sur le
  choix du type, rien n'est saisi : la croix ferme directement — confirmer pour rien apprend à
  confirmer sans lire.
- **Échap = la croix**, modale comprise ; depuis la modale, Échap la referme sans rien détruire.
- Libellés qui **nomment l'issue** : « Continue editing » secondaire, « Leave without saving »
  primaire `Type=Danger` — seul rouge justifié du parcours. Proscrire « Cancel »/« OK » (« Cancel »
  désignerait autant la sortie que la création). Un paragraphe : ce qui est perdu, irréversible.
  Confirmer ramène à la liste, sans ressource ni brouillon (un brouillon = choix à trois branches,
  à concevoir à part).

### La confirmation — deux cas exclusifs
- **Avec donnée à emporter** (code, clé, identifiant) → modale posée **sur la liste** (le tunnel
  est terminé). Un seul bouton « I understand » ; une Alert d'info rappelle que la donnée reste
  récupérable depuis la ressource.
- **Sans donnée** → `Alert Type=Success` en tête de liste, entre Actionbar et contenu. Pas de
  Toast dans le produit : un message transitoire se rend avec Alert. Elle disparaît d'elle-même
  au bout de **5 s, en fondu** (200 ms) ; la croix reste disponible pour la fermer avant.
- Jamais les deux. Retour sur la **liste d'origine**, jamais sur le détail de la ressource créée.

⚠ Le stepper horizontal et le bloc de code ne sont **pas componentés** dans le fichier — passer
par /md-new-component avant réutilisation. Côté code, le stepper correspond au `Steps` d'AntD.
