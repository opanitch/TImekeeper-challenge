import * as PAGE_NAMES from '../constants/page-names';
import * as ROUTES from '../constants/routes';

interface NavItemType {
  href: string;
  id: string;
  text: string;
}

// IMPORTANT: Order matters here
const mainNavItems: NavItemType[] = [
  {
    href: ROUTES.SCREEN_A,
    id: PAGE_NAMES.SCREEN_A,
    text: `{{@ cms.site.navigation.screen_a @}}`,
  },
  {
    href: ROUTES.SCREEN_B,
    id: PAGE_NAMES.SCREEN_B,
    text: `{{@ cms.site.navigation.screen_b @}}`,
  },
  {
    href: ROUTES.SCREEN_C,
    id: PAGE_NAMES.SCREEN_C,
    text: `{{@ cms.site.navigation.screen_c @}}`,
  },
];

export default mainNavItems;
