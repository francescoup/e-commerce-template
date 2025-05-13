import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log(`richiesta ${request.nextUrl.pathname}`)
  // if (request.nextUrl.pathname.startsWith('/products')) {
  //   return NextResponse.rewrite(new URL('/contact', request.url))
  // }
}

export const config = {
  matcher: [
    
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}