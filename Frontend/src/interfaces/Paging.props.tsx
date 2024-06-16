export interface PagingProps {
  perPage: number | string;
  total: number;
  currentPage: number;
  onChange: Function;
}
