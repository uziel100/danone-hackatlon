/* eslint-disable import/prefer-default-export */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { TOKEN_COOKIE_KEY } from './const';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const token = request.cookies.has(TOKEN_COOKIE_KEY);
  const currentPath = request.nextUrl.pathname || '';

  // Si no hay una cookie "token" y si esta en rutas privadas
  // redirigir al registro
  if (token && currentPath === '/register') {
    return NextResponse.redirect(new URL(`/profile`, request.url));
  }

  if (!token && currentPath === '/profile') {
    return NextResponse.redirect(new URL(`/register`, request.url));
  }

  return response;
}

export const config = {
  matcher: ['/register', '/profile']
};
