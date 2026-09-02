---
name: md-produce-screen
description: Orchestrateur de production MICS. Reçoit une spec + un lien Figma, questionne pour cadrer, tranche la surface (page, modale, drawer — arbre en 7 étapes), choisit le template, produit, vérifie (pre-flight), livre. Point d'entrée pour créer ou modifier un écran.
---

# md-produce-screen — Produire ou modifier un écran

## Entrées obligatoires — ne rien produire sans elles

1. **La spécification** : quoi construire ou modifier. 2. **Le lien Figma cible**. Si l'un manque :
le demander et s'arrêter. **Mode sans utilisateur joignable** (batch, test) : chaque question —
y compris celles de /md-new-component et /md-a11y-specs — devient « question consignée + hypothèse
la plus raisonnable + livraison » ; le rapport final liste les hypothèses.

## Étape 1 — Cadrer

Poser uniquement les questions dont la réponse ne se déduit pas de la spec ; une à la fois quand
elles s'enchaînent.

0. **Vocabulaire compris ?** Sinon le résoudre soi-même via /md-business et le user guide AVANT de
   questionner — la moitié des ambiguïtés apparentes sont du vocabulaire métier.
1. **Création ou modification ?** Si modification : quel écran / section / composant ?
2. **Quelle SURFACE ?** Si le contenu pourrait s'afficher en overlay, dérouler l'arbre ci-dessous.
   Si l'arbre contredit la spec, le signaler avec l'étape qui a tranché.
3. **Quel template ?** Via la matrice de /md-ds-rules. Deux candidats → présenter les deux avec le
   critère qui les départage.
4. **Section active du SideMenu ?** (ou Settings / tunnel sans SideMenu)
5. **Contenu principal ?** (table, KPIs + graphiques, formulaire, cartes de choix)
6. **Overlay ?** (aucun / drawer / modale — et l'écran de fond)
7. **Où poser l'écran, et quel nom ?** (section « ✅ … — Clean » ou nouvelle ; format
   « Section — Nom », ex. « Segments — Liste »)

## L'arbre de surface : page, modale, drawer ou composant non modal

**La page est le défaut** — un overlay se justifie, une page non. Une modale mal placée bloque, ne
se partage pas, disparaît au rechargement ; une page de trop coûte un clic. Répondre dans l'ordre ;
adapté du modèle Carbon « Modal vs. page vs. sheet ».

| # | Question | Tranche |
|---|---|---|
| 1 | Un overlay a-t-il un intérêt ? (capter l'attention · petit choix · petite saisie bloquante · garder le contexte · urgence) | Aucun oui → **PAGE** |
| 2 | Le contenu est-il une destination ? (favori/partage · mobile-first · on quitte le flux · interactions nombreuses · plusieurs étapes · ça va grossir) | Un oui → **PAGE** |
| 3 | Est-ce que ça tient dedans ? (beaucoup d'éléments · hauteur dépassée · scroll interne · plus de 2 actions primaires · plus d'une tâche) | Un oui → **PAGE** |
| 4 | Qu'est-ce qui plaide POUR l'overlay ? (allers-retours avec le fond · peu d'interaction · temporaire · transition · focus revient à la page · argument défendable · consultation courte · niveau le plus profond) — l'étape la plus souvent sautée : les trois premières n'écartaient que des empêchements | Aucun oui → **PAGE** |
| 5 | Faut-il interrompre ? (urgent · plus facile hors page · critique pour poursuivre · réduit le travail · essentiel au flux · processus autonome début/fin) | Aucun oui → **NON MODAL** |
| 6 | Est-ce un simple message ? Une erreur ou un succès s'affichent, ils ne se confirment pas | Oui → **NON MODAL** |
| 7 | Décision, saisie ou irréversible (recueillir une info · confirmer · conséquences sérieuses · formulaire/décision · avertissement critique) — ou consultation ? | Un oui → **MODALE** · aucun → **DRAWER** |

| Issue | Construction |
|---|---|
| Page | La matrice de /md-ds-rules puis /md-templates |
| Modale | `Overlay` Mode=Modal — /md-templates §8-9 |
| Drawer | `Overlay` Mode=Drawer, l 520 à droite — /md-templates §8-9 |
| Non modal | `Alert` (message dans le flux), `Tooltip`, `Dropdown / Container`, `Alert Row` — /md-components |

Erreurs classiques : un drawer n'est pas une petite page (ça déborde ou plusieurs tâches → étape
3, PAGE) · une modale n'est pas un panneau d'information (rien à décider → étapes 6-7) · « sans
perdre le contexte » ne suffit pas (l'étape 4 exige un argument positif) · deux actions primaires
c'est déjà trop. Pas de toast dans le produit : message transitoire = `Alert` posé dans le flux.
Un seul overlay actif ; un enchaînement d'étapes reste dans la même modale. Si l'arbre donne PAGE
contre la spec : le dire — la spec change plus souvent que la règle.

## Étape 2 — Charger les skills

Toujours **/md-ds-rules**. Puis selon besoin : **/md-templates** (template choisi) ·
**/md-components** (catalogue) · **/md-charts** · **/md-icons** · **/md-business** (vocabulaire
métier, module inconnu — lire la page du user guide avant de produire) · **/md-new-component**
(composant manquant, et sa documentation) · **/md-figma-api** (agent pilotant l'API).

## Étape 3 — Vérifier que les composants suffisent

Confronter chaque élément de la spec au catalogue : **ça existe** → instance + variantes +
overrides · **ça existe presque** → proposer d'étendre (prop, variante) plutôt que dévier ·
**ça n'existe pas** → le dire et proposer /md-new-component. Jamais de faux composant en frames.

## Étape 4 — Produire

1. La coque du template (instances TopBar / SideMenu / Actionbar — jamais de rectangles).
2. Le contenu selon l'arborescence exacte du template — paddings et gaps du skill, pas d'à-peu-près.
3. Les 3 règles d'or de /md-ds-rules en continu.
4. L'écran posé dans la section cible, aligné sur la grille (1496 de large, **gap 120 entre
   écrans**, jamais de chevauchement).

## Étape 5 — Pre-flight check (obligatoire)

1. **Screenshot** de l'écran produit, regardé réellement.
2. Vérifier : coque correcte (TopBar premier, navigation du template, 1496) · contenu conforme,
   rien d'oublié · pas de texte tronqué, débordement, chevauchement · composants = instances ·
   couleurs plausibles (pas de noir brut ni gris hors palette) · booléens Header Row = Rows ·
   nomenclature (aucun « Frame 12 ») · **cohérence métier des données de démo** (compteurs
   plausibles, statuts/actions compatibles).
3. **Corriger soi-même**, re-screenshoter, itérer jusqu'à zéro défaut.
4. Comparer avec un écran clean du même template.

## Étape 6 — Livrer

Lien du nœud + résumé + **signaler explicitement** : hypothèses, écarts à la spec, composants
créés ou étendus. Demander un retour.

## Pièges (tous outils confondus)

- Jamais de valeur « de tête » : chaque padding/gap vient du skill du template.
- Un élément répété sur plusieurs écrans → signaler qu'il devrait être composanté.
- Dropdown/tooltip ouvert : en absolu, pas dans l'autolayout.
- L'état vide, le chargement et l'erreur existent pour tout contenu de données.
- Texte sur fond sombre = text/on-dark ; jamais de foncé sur foncé.
