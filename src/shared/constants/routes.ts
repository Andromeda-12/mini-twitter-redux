const MAIN_PAGE_PATH = '/';
const NOT_FOUND_PAGE_PATH = '/404';

const SIGN_IN_PATH = '/signin';
const SIGN_UP_PATH = '/signup';

const NEWS_PATH = '/news';
const SUBSCRIBERS_PATH = '/subscribers';
const PROFILE_PATH = '/profile';

export const routes = {
  NEWS_PATH,
  MAIN_PAGE_PATH,
  NOT_FOUND_PAGE_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  SUBSCRIBERS_PATH,
  PROFILE_PATH,
} as const;
