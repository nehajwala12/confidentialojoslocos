// Password gate for the Comvest edition (Vercel Routing Middleware, Basic Auth).
// The browser asks for a username and password: any username, password Ojos2026.
// No matcher: it runs on every request, so the page, robots.txt and any other file all need the password.

const PASSWORD = 'Ojos2026';

export default function middleware(request) {
  const header = request.headers.get('authorization') || '';
  if (header.startsWith('Basic ')) {
    let decoded = '';
    try { decoded = atob(header.slice(6)); } catch (e) { decoded = ''; }
    const i = decoded.indexOf(':');
    if (i >= 0 && decoded.slice(i + 1) === PASSWORD) return; // continue to the page
  }
  return new Response('Password required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Ojos Locos - CreditSwan (Comvest edition)", charset="UTF-8"',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
