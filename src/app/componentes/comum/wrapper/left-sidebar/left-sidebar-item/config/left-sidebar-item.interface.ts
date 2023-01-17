export interface LeftSideBarItem {
  nome?: string;
  icon?: string;
  rota?: string;
  mostrarSubItens?: boolean;
  subItens?: LeftSideBarItem[];
  secao?: string;
}
