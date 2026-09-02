import { useState, type ReactNode } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Icon,
  IconButton,
  Input,
  Overlay,
  SectionToggle,
  Select,
  Steps,
  Tag,
  Tooltip,
  scale,
  semantic,
  typography,
} from '../ui';
import { CreationFlow } from '../templates/CreationFlow';
import { PROCESSING_ACTIVITIES, SEGMENT_TYPES, type ProcessingActivity } from '../data/processingActivities';

/*
  Parcours de création d'un segment (template §12) : choix du type, puis tunnel de
  trois étapes, puis retour à la liste. Chaque écran et chaque comportement suivent
  la section « Test — Parcours création de segment » du fichier Figma (805:36419),
  écrans 2 à 9 — l'écran 1 est la liste de départ, le 10 la confirmation.
*/

const STEP_TITLES = ['General Information', 'Processing Activities', 'User Query'];

/*
  Les tooltips du tunnel se rendent dans leur conteneur, pas dans un portail sur le
  body : le tunnel (z 1150) passerait au-dessus du z-index global des popups (1060)
  et les infobulles seraient invisibles.
*/
const popupInParent = (trigger: HTMLElement) => trigger.parentElement ?? document.body;

/**
 * Pastille d'étape validée : coche blanche dans un cercle plein primary, comme la
 * maquette. AntD ne remplit pas la pastille « finish » (cercle blanc bordé, coche
 * bleue) : on lui passe l'icône complète. Le ✓ est un glyphe texte, comme dans le
 * composant Figma.
 */
function StepDot({ state, children }: { state: 'finished' | 'current' | 'waiting'; children: ReactNode }) {
  const filled = state !== 'waiting';
  return (
    <span
      aria-hidden
      style={{
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: filled ? semantic.primary : semantic.bgContainer,
        border: filled ? undefined : `1px solid ${semantic.borderInput}`,
        color: filled ? semantic.textOnDark : semantic.textLighter,
        fontSize: 12,
        lineHeight: 1,
      }}
    >
      {children}
    </span>
  );
}

/** En-tête d'étape : titre, tag Optional le cas échéant, phrase d'explication. */
function StepHead({ title, optional, description }: { title: string; optional?: boolean; description: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: scale.space12 }}>
        <h2 style={{ margin: 0, ...typography.headline3, color: semantic.textDarker }}>{title}</h2>
        {optional && <Tag color="blue">Optional</Tag>}
      </div>
      <p style={{ margin: 0, ...typography.body, color: semantic.textLighter }}>{description}</p>
    </div>
  );
}

/**
 * Rangée de formulaire avec son icône « i » : le champ prend la largeur, le
 * tooltip explique à quoi sert la donnée (relevé sur les écrans prod).
 */
function FieldRow({ info, children }: { info: string; children: ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: scale.space16 }}>
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      <Tooltip title={info} getPopupContainer={popupInParent}>
        <span tabIndex={0} aria-label={info} style={{ display: 'inline-flex', paddingTop: 2, outlineOffset: 2 }}>
          <Icon name="info" size={16} color={semantic.info} />
        </span>
      </Tooltip>
    </div>
  );
}

/** En-tête de colonnes au-dessus d'une liste d'activités — drawer comme étape. */
function PaHeaderRow({ trailing }: { trailing?: boolean }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: scale.space8,
        height: scale.sizeHeader,
        paddingLeft: scale.space24,
        borderBottom: `1px solid ${semantic.borderDefault}`,
        color: semantic.textLighter,
        ...typography.bodyMedium,
      }}
    >
      <span style={{ flex: 1 }}>Name</span>
      <span>Legal Basis</span>
      {/* Réserve la colonne de la corbeille pour que le titre s'aligne sur les valeurs. */}
      {trailing && <span style={{ width: 32 }} aria-hidden />}
    </div>
  );
}

interface Props {
  /** Sortie sans création (croix confirmée, ou abandon). */
  onClose: () => void;
  /** Création confirmée : au parent d'afficher l'Alert de succès sur la liste. */
  onCreated: (name: string) => void;
}

export function SegmentCreation({ onClose, onCreated }: Props) {
  // 'type' = écran de choix hors tunnel, puis index d'étape 0..2.
  const [phase, setPhase] = useState<'type' | 0 | 1 | 2>('type');
  const [segmentType, setSegmentType] = useState<string | null>(null);

  // Étape 1 — General Information.
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [description, setDescription] = useState('');
  const [technicalName, setTechnicalName] = useState('');
  const [evaluationPeriod, setEvaluationPeriod] = useState('1');
  const [evaluationUnit, setEvaluationUnit] = useState('Days');
  const [persisted, setPersisted] = useState(true);
  const [paused, setPaused] = useState(false);

  // Étape 2 — Processing Activities.
  const [selected, setSelected] = useState<ProcessingActivity[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerChecked, setDrawerChecked] = useState<string[]>([]);
  const [drawerSearch, setDrawerSearch] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<ProcessingActivity | null>(null);

  // Étape 3 — User Query.
  const [editQueryOpen, setEditQueryOpen] = useState(false);

  const [abandonOpen, setAbandonOpen] = useState(false);

  const overlayOpen = drawerOpen || deleteTarget !== null || editQueryOpen || abandonOpen;
  const hasData =
    name.trim() !== '' ||
    description.trim() !== '' ||
    technicalName.trim() !== '' ||
    selected.length > 0 ||
    // Les champs avancés partent avec un défaut : c'est l'écart au défaut qui
    // fait la saisie, pas la valeur elle-même.
    evaluationPeriod !== '1' ||
    evaluationUnit !== 'Days' ||
    !persisted ||
    paused;

  /*
    La croix (et Échap) ne détruit jamais une saisie sans prévenir : dès qu'une
    donnée existe, elle ouvre la modale d'abandon. Sur le choix du type, rien
    n'est saisi : elle ferme directement — confirmer pour rien apprend à
    confirmer sans lire (§12).
  */
  const requestClose = () => {
    if (hasData) setAbandonOpen(true);
    else onClose();
  };

  const nameValid = name.trim() !== '';
  const goNextFromStep1 = () => {
    if (!nameValid) {
      setNameError(true);
      // Le focus va au premier champ en erreur — l'id du champ est interne au
      // Field, on le retrouve par l'attribut que Field vient de poser.
      requestAnimationFrame(() => {
        document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }
    setPhase(1);
  };

  const openDrawer = () => {
    setDrawerChecked(selected.map((p) => p.name));
    setDrawerSearch('');
    setDrawerOpen(true);
  };
  const confirmDrawer = () => {
    setSelected(PROCESSING_ACTIVITIES.filter((p) => drawerChecked.includes(p.name)));
    setDrawerOpen(false);
  };
  const drawerRows = PROCESSING_ACTIVITIES.filter((p) =>
    p.name.toLowerCase().includes(drawerSearch.trim().toLowerCase()),
  );

  /* ------------------------------------------------------------------ écrans */

  const typeChoice = (
    <Card style={{ padding: scale.space24, gap: scale.space16 }}>
      {/* Bandeau d'illustration de la maquette : un aplat bg/selected, décoratif. */}
      <div aria-hidden style={{ height: 72, background: semantic.bgSelected, borderRadius: scale.radiusBase }} />
      <h2 style={{ margin: 0, ...typography.headline4, color: semantic.textDarker }}>Audience Segment</h2>
      <p style={{ margin: 0, ...typography.body, color: semantic.textNormal }}>
        Un segment d'audience regroupe des user points selon des critères que vous définissez : requête, liste
        importée, pixel, ou périmètre Edge.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
        {SEGMENT_TYPES.map((t) => (
          <button
            key={t.name}
            type="button"
            disabled={!t.available}
            onClick={() => {
              setSegmentType(t.name);
              setPhase(0);
            }}
            className={t.available ? 'mics-type-row' : undefined}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: scale.space8,
              height: 56,
              paddingInline: scale.space16,
              background: semantic.bgSubtle,
              border: 0,
              borderRadius: scale.radiusBase,
              font: 'inherit',
              textAlign: 'left',
              color: t.available ? semantic.textNormal : semantic.textLightest,
              cursor: t.available ? 'pointer' : 'not-allowed',
            }}
          >
            <span style={{ ...typography.body }}>{t.name}</span>
            <Tooltip title={t.available ? t.tooltip : `${t.tooltip} Non maquetté dans ce prototype.`}>
              <span tabIndex={0} aria-label={t.tooltip} style={{ display: 'inline-flex' }}>
                <Icon name="info" size={14} color={t.available ? semantic.info : semantic.textLightest} />
              </span>
            </Tooltip>
            <span style={{ flex: 1 }} />
            {t.available && <Icon name="chevron-right" size={14} color={semantic.textNormal} />}
          </button>
        ))}
      </div>
    </Card>
  );

  const step1 = (
    <>
      <StepHead title="General Information" description="Give your Audience Segment a name." />
      <Card style={{ padding: scale.space24, gap: scale.space24 }}>
        <FieldRow info="Displayed name of the segment.">
          <Input
            label="Name"
            required
            value={name}
            onChange={(v) => {
              setName(v);
              // L'erreur se lève dès que le champ redevient valide, pas pendant
              // la frappe dans l'autre sens (§12).
              if (nameError && v.trim() !== '') setNameError(false);
            }}
            placeholder="Audience Segment Name"
            state={nameError ? 'error' : 'default'}
            message={nameError ? 'This field is required.' : undefined}
          />
        </FieldRow>
        <FieldRow info="Optional description, shown on the segment detail.">
          <Input label="Description" value={description} onChange={setDescription} placeholder="Audience Segment Description" />
        </FieldRow>
        <div>
          {/* SectionToggle du DS : champs OPTIONNELS repliés par défaut. La maquette
              (écran 3) les montre dépliés ; l'état par défaut reste replié. */}
          <SectionToggle label="Advanced">
            <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space24 }}>
              <FieldRow info="Unique identifier used by the APIs.">
                <Input label="Technical Name" value={technicalName} onChange={setTechnicalName} placeholder="georgia-pizza-winner-ack" />
              </FieldRow>
              <FieldRow info="How often the segment is recomputed.">
                <div style={{ display: 'flex', gap: scale.space8, alignItems: 'flex-end' }}>
                  <div style={{ flex: 1 }}>
                    <Input
                      label="Evaluation Period"
                      value={evaluationPeriod}
                      // Un nombre de jours, de semaines ou de mois : la saisie ne
                      // laisse passer que des chiffres.
                      onChange={(v) => setEvaluationPeriod(v.replace(/\D/g, ''))}
                    />
                  </div>
                  <div style={{ width: 96 }}>
                    <Select
                      aria-label="Evaluation period unit"
                      options={[
                        { value: 'Days', label: 'Days' },
                        { value: 'Weeks', label: 'Weeks' },
                        { value: 'Months', label: 'Months' },
                      ]}
                      value={evaluationUnit}
                      onChange={(v) => setEvaluationUnit(v as string)}
                    />
                  </div>
                </div>
              </FieldRow>
              <FieldRow info="Keep the user list stored, ready for activation.">
                <Checkbox checked={persisted} onChange={(e) => setPersisted(e.target.checked)}>
                  Persisted
                </Checkbox>
              </FieldRow>
              <FieldRow info="Suspend the segment computation.">
                <Checkbox checked={paused} onChange={(e) => setPaused(e.target.checked)}>
                  Paused
                </Checkbox>
              </FieldRow>
            </div>
          </SectionToggle>
        </div>
      </Card>
    </>
  );

  const addButton = (
    <Button type="primary" icon={<Icon name="plus" size={14} />} onClick={openDrawer}>
      Add Processing Activity
    </Button>
  );

  const step2 = (
    <>
      <StepHead
        title="Processing Activities"
        optional
        description="Select the Processing Activities on behalf of which you are creating this audience segment. mediarithmics platform will automatically take the related User Choices into account to include or exclude them from the segment."
      />
      {selected.length === 0 ? (
        <Card style={{ padding: scale.space24, gap: scale.space24, minHeight: 420 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: scale.space12, padding: scale.space35, textAlign: 'center' }}>
            <Icon name="users" size={44} color={semantic.textLightest} />
            <p style={{ margin: 0, ...typography.headline4, color: semantic.textLighter }}>
              There is no Processing Activity selected yet!
            </p>
            {addButton}
          </div>
        </Card>
      ) : (
        <Card actions={addButton} style={{ padding: scale.space24, gap: scale.space24, minHeight: 420 }}>
          <div>
            <PaHeaderRow trailing />
            {selected.map((p) => (
              <div
                key={p.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: scale.space8,
                  height: scale.sizeRow,
                  borderBottom: `1px solid ${semantic.borderDefault}`,
                }}
              >
                <Icon name="safety-certificate" size={16} color={semantic.textLighter} />
                <span style={{ flex: 1, ...typography.body, color: semantic.textNormal }}>{p.name}</span>
                <span style={{ ...typography.caption, color: semantic.textLighter }}>{p.legalBasis}</span>
                <IconButton icon="trash" label={`Delete ${p.name}`} theme="onLight" onClick={() => setDeleteTarget(p)} />
              </div>
            ))}
          </div>
        </Card>
      )}
    </>
  );

  const step3 = (
    <>
      <StepHead title="User Query" description="Select the user you want to add to your segment." />
      <Card style={{ padding: scale.space24, gap: scale.space24, minHeight: 420 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={() => setEditQueryOpen(true)}>Edit Query</Button>
        </div>
      </Card>
    </>
  );

  /* ------------------------------------------------------------------- pied */

  /*
    « Next » est PRÉSENTÉ désactivé tant que le nom manque, mais reste focusable
    et cliquable : au clic, le champ passe en erreur et reçoit le focus. Un vrai
    `disabled` ne pourrait rien expliquer (RGAA 7.1, 11.10 — §12).
  */
  const nextPresentedDisabled = phase === 0 && !nameValid;

  const footer =
    phase === 'type' ? undefined : (
      <>
        {phase === 1 && <Button onClick={() => setPhase(2)}>Skip this step</Button>}
        <Button onClick={() => setPhase(phase === 0 ? 'type' : ((phase - 1) as 0 | 1))}>Back</Button>
        {phase === 2 ? (
          <Button type="primary" onClick={() => onCreated(name.trim())}>
            Create segment
          </Button>
        ) : (
          <Button
            type="primary"
            aria-disabled={nextPresentedDisabled}
            style={nextPresentedDisabled ? { opacity: 0.5 } : undefined}
            onClick={phase === 0 ? goNextFromStep1 : () => setPhase(2)}
          >
            Next
          </Button>
        )}
      </>
    );

  return (
    <CreationFlow
      title="New Audience Segment"
      subtitle={segmentType ? `Segment type : ${segmentType}` : undefined}
      onCloseRequest={requestClose}
      overlayOpen={overlayOpen}
      footer={footer}
    >
      {phase !== 'type' && (
        <Steps
          direction="horizontal"
          current={phase}
          items={STEP_TITLES.map((title, i) => ({
            title,
            // Les TROIS états passent par la même pastille : mélanger le rendu
            // AntD (courante) et le custom (les autres) donnait deux géométries,
            // un titre désaligné et un stepper qui bougeait à chaque étape.
            // Validée = coche blanche sur cercle plein ; courante = numéro blanc
            // sur cercle plein ; à venir = numéro gris sur cercle vide bordé.
            icon:
              i < phase ? (
                <StepDot state="finished">✓</StepDot>
              ) : i === phase ? (
                <StepDot state="current">{i + 1}</StepDot>
              ) : (
                <StepDot state="waiting">{i + 1}</StepDot>
              ),
          }))}
        />
      )}
      {phase === 'type' && typeChoice}
      {phase === 0 && step1}
      {phase === 1 && step2}
      {phase === 2 && step3}

      {/* Drawer de sélection des Processing Activities (écran 5). */}
      <Overlay
        open={drawerOpen}
        mode="drawer"
        title="Select Processing Activities"
        headerTheme="light"
        onClose={() => setDrawerOpen(false)}
        footer={
          <Button type="primary" onClick={confirmDrawer}>
            Add
          </Button>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: scale.space12 }}>
          <Input
            aria-label="Search Processing Activities"
            leftIcon="magnifier"
            placeholder="Search Processing Activities"
            value={drawerSearch}
            onChange={setDrawerSearch}
          />
          <div>
            <PaHeaderRow />
            {drawerRows.map((p) => (
              <label
                key={p.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: scale.space8,
                  height: scale.sizeRow,
                  cursor: 'pointer',
                }}
              >
                <Checkbox
                  checked={drawerChecked.includes(p.name)}
                  onChange={(e) =>
                    setDrawerChecked((prev) =>
                      e.target.checked ? [...prev, p.name] : prev.filter((n) => n !== p.name),
                    )
                  }
                >
                  {p.name}
                </Checkbox>
                <span style={{ flex: 1 }} />
                <span style={{ ...typography.caption, color: semantic.textLighter }}>{p.legalBasis}</span>
              </label>
            ))}
          </div>
        </div>
      </Overlay>

      {/* Modale de confirmation de suppression (écran 7) : jamais de popconfirm. */}
      <Overlay
        open={deleteTarget !== null}
        title="Delete Processing Activity"
        onClose={() => setDeleteTarget(null)}
        footer={
          <>
            <Button onClick={() => setDeleteTarget(null)}>Cancel</Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                setSelected((prev) => prev.filter((p) => p.name !== deleteTarget?.name));
                setDeleteTarget(null);
              }}
            >
              Delete
            </Button>
          </>
        }
      >
        <p style={{ margin: 0, ...typography.body, color: semantic.textNormal }}>
          Are you sure you want to delete {deleteTarget?.name} from this segment? The Processing Activity itself will
          not be deleted.
        </p>
      </Overlay>

      {/* Modale « fonctionnalité non maquettée » du bouton Edit Query (écran 9). */}
      <Overlay
        open={editQueryOpen}
        title="Edit Query"
        onClose={() => setEditQueryOpen(false)}
        footer={
          <Button type="primary" onClick={() => setEditQueryOpen(false)}>
            I understand
          </Button>
        }
      >
        <p style={{ margin: 0, ...typography.body, color: semantic.textNormal }}>
          The query editor has not been designed yet. This screen will be specified in a later iteration of the design
          system.
        </p>
      </Overlay>

      {/* Modale d'abandon : les libellés NOMMENT l'issue, jamais « Cancel » (§12). */}
      <Overlay
        open={abandonOpen}
        title="Leave segment creation"
        onClose={() => setAbandonOpen(false)}
        footer={
          <>
            <Button onClick={() => setAbandonOpen(false)}>Continue editing</Button>
            <Button type="primary" danger onClick={onClose}>
              Leave without saving
            </Button>
          </>
        }
      >
        <p style={{ margin: 0, ...typography.body, color: semantic.textNormal }}>
          The information you entered will be lost. The segment will not be created and no draft will be kept.
        </p>
      </Overlay>
    </CreationFlow>
  );
}
