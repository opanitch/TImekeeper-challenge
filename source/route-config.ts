import { FunctionComponent } from 'react';

import * as PAGE_NAMES from 'CONSTANTS/page-names';
import * as ROUTES from 'CONSTANTS/routes';

import * as PAGES from 'Pages';
import { Page } from 'Pages/types';

export type PageKey = UnionOf<typeof PAGE_NAMES>;

type RouteType = {
  component: FunctionComponent<Page>;
  pageName: PageKey;
  path: string | string[];
};

export interface RouteConfigType extends RouteType {
  routes?: RouteType[];
}

// IMPORTANT: order matters for fallback
const routeConfig: RouteConfigType[] = [
  {
    component: PAGES.SCREEN_A,
    pageName: PAGE_NAMES.SCREEN_A,
    path: [ROUTES.HOME, ROUTES.SCREEN_A],
  },
  {
    component: PAGES.SCREEN_B,
    pageName: PAGE_NAMES.SCREEN_B,
    path: ROUTES.SCREEN_B,
  },
  {
    component: PAGES.SCREEN_C,
    pageName: PAGE_NAMES.SCREEN_C,
    path: ROUTES.SCREEN_C,
  },
  {
    component: PAGES.NOT_FOUND,
    pageName: PAGE_NAMES.NOT_FOUND,
    path: ROUTES.NOT_FOUND,
  },
];

export default routeConfig;
