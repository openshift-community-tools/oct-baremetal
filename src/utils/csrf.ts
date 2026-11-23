/**
 * Headers for state-changing requests through the console proxy. With
 * `authorization: UserToken` on the ConsolePlugin proxy the console checks the CSRF token
 * (cookie `csrf-token`, header `X-CSRFToken`) like it does for its own API calls; a plain
 * fetch without it gets 403 "invalid CSRFToken".
 */
export function csrfHeaders(): Record<string, string> {
  const m = /(?:^|;\s*)csrf-token=([^;]+)/.exec(typeof document !== 'undefined' ? document.cookie : '');
  return m ? { 'X-CSRFToken': decodeURIComponent(m[1]) } : {};
}
