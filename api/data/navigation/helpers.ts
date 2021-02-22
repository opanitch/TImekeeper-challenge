import { PATH_SEPARATOR } from './constants';

export const convertParamsToString = (
  params: Record<string, string | number>
): string =>
  Object.keys(params)
    .map((param) => {
      return `${param}=${params[param]}`;
    })
    .join('&');

export const convertPathToArray = (path = ''): string[] => {
  const routeParts = path.split(PATH_SEPARATOR).filter(Boolean);

  return !routeParts.length ? [''] : routeParts;
};

export const getRouteFromUrl = (
  url: string,
  origin = location.origin
): string[] => {
  // If there are queryStrings, remove it to get Route from just URL
  if (url.includes('?')) {
    url = url.substr(0, url.indexOf('?'));
  }
  // Check to see if URL starts with `/`, remove it if so.
  const requestUrl = url.charAt(0) === '/' ? url.substr(1) : url;

  // return array of substrings split by `/`
  return requestUrl.replace(`${origin}/`, '').split('/');
};

export const parseQueryParams = (
  queryParamsString?: string
): Record<string, string> => {
  if (!queryParamsString) return {};

  // Trim leading `?` if it exists
  const string =
    queryParamsString.indexOf('?') !== -1
      ? queryParamsString.slice(queryParamsString.indexOf('?') + 1)
      : queryParamsString;

  return string.split('&').reduce((acc, item) => {
    const [key, value] = item.split('=');

    return { ...acc, [decodeURIComponent(key)]: decodeURIComponent(value) };
  }, {});
};
