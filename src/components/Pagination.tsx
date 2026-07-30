import { Pagination as AntPagination } from 'antd';
import { scale } from '../theme/micsTheme';

interface Props {
  current: number;
  total: number;
  pageSize: number;
  onChange: (page: number, pageSize: number) => void;
  /** Sélecteur de taille de page. À activer sur les gros volumes. */
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
}

/**
 * Pagination (Figma 16:34) — catégorie ENVELOPPE.
 * Ant Design gère déjà l'ellipsis, le clavier et les extrémités désactivées : on
 * garde son rendu et on impose la position et les réglages du DS.
 * Boutons 32×32, radius/base, page courante en primary, sélecteur « n / page ».
 *
 * Toujours en bas à DROITE de la liste : c'est là que finit la lecture du tableau.
 */
export function Pagination({
  current,
  total,
  pageSize,
  onChange,
  showSizeChanger = true,
  pageSizeOptions = [10, 20, 50, 100],
}: Props) {
  return (
    <nav aria-label="Pagination" style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: scale.space16 }}>
      <AntPagination
        current={current}
        total={total}
        pageSize={pageSize}
        onChange={onChange}
        showSizeChanger={showSizeChanger}
        pageSizeOptions={pageSizeOptions}
        showLessItems={false}
      />
    </nav>
  );
}
