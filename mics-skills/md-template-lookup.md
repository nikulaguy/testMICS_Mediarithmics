---
name: md-template-lookup
description: Template 11 — Page Fiche 3 colonnes MICS (User Lookup). Profil / timeline / identifiants visibles simultanément, sans onglets.
---

# md-template-lookup — Page Fiche 3 colonnes (lookup)

Appliquer /md-ds-rules. Composants : /md-data-display (Timeline / *, Lookup / Device Item, Tag).
Référence visuelle : page 🎼 Layout, bloc « 11 · Page — Fiche 3 colonnes (lookup) » ; écran clean : User Lookup — Détail.

## Quand l'utiliser
La consultation d'un objet complexe à facettes multiples affichées **simultanément** : User Lookup (profil / timeline / identifiants). Se distingue du Détail de ressource : pas d'onglets.

## Structure exacte

```
Coque standard (TopBar, SideMenu item « User lookup » Active, Actionbar Type=Light).
content (V, FILL/FILL, padding 35, gap 16, bg/window)
  lookupHeader (H, gap 35) — « Last Seen At … » (Body/Medium) + UUID (Body/Book text/lighter)
  columns (H, gap 16, alignées en haut)
    profileColumn — l 314 FIXE : cartes Profiles, Segments
    timelineColumn — FILL : rangées timelineRow (H, gap 12)
      rail — l 24 FIXE, hauteur FILL, layout libre :
        railLine (2 px, border/default, étirée sur la hauteur, centrée)
        marqueur en tête : icon/flag 16 (rangée jour) | point 10 px border/default (rangée session)
      élément FILL : Tag de jour (Color=Default) OU carte de session
    identifiersColumn — l 314 FIXE : cartes Accounts, Devices, Emails, Choices
```

## La carte (pattern commun aux 3 colonnes)
Frame blanche : bg/container, radius/card, padding 24, gap 12 — titre **Headline 4** + divider 1 px border/default, puis le contenu.

## Contenus par colonne
- **Profiles** : nom du compartment (Body/Medium), « User Account Id: » + Tag, lien « Expand all », lignes clé/valeur (clé = **Tag Color=Default**, valeur en Body/Book ; imbrication par padding gauche 16), lien « View more... ».
- **Segments** : liste de noms (Body/Book) + « View More ».
- **Timeline** : un `Tag` Color=Default en séparateur de jour (Today / Yesterday / date) puis cartes de session = frame blanche avec UN `Timeline / Session Header` (Title, Duration, Origin) + n `Timeline / Event Row` (Time, Event, lien Details).
- **Identifiers** : Accounts (valeurs + Tag) · Devices (`Lookup / Device Item` × n, séparés par un divider) · Emails / Choices (message d'absence en text/lighter).

## Règles
- Colonnes latérales **fixes (314)**, centre FILL.
- Une carte vide affiche son message (« This user has no Emails ») — jamais de carte absente.
- **Le rail vertical est obligatoire** entre la colonne profil et les cartes : chaque rangée de la timeline porte son segment de ligne + son marqueur (drapeau = changement de jour, point = session). Un seul toggle (timeline technique), sur la première rangée jour.
- Les identifiants techniques cliquables (udp:…) en primary.
- Vocabulaire (UserPoint, UserActivity, UserEvent, identifiers) : /md-business.
