export interface NavigationState {
  hash: string | null;
  history: string[][];
  queryParams: Record<string | never, string | number | never>;
  route: string[];
}
