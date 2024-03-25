import createIntlMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {locales, defaultLocale, localePrefix} from './navigation';

function getSubdomain(host: string | null | undefined) {
  if (typeof host !== 'string' || host.trim() === '') return '';
  return host.replace('.localhost:3000', '');
}

const handleI18nRouting = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix
});

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const subdomain = getSubdomain(request.headers.get('host'));
  const path = url.pathname;
  console.log({subdomain, path});
  if (subdomain === 'localhost:3000') {
    // return NextResponse.next();
  }

  // TODO: Extract correctly
  const tenant = 'test';

  request.nextUrl.pathname = `/${tenant}${path}`;

  const response = handleI18nRouting(request);
  return response;
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
