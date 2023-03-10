import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import {jwtVerify} from 'jose'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const current_cookie = request.cookies.get("session")
  
  if(current_cookie === undefined){
    return NextResponse.redirect(new URL('/login', request.url))
  }
  const secret = new TextEncoder().encode(
    'secret',
    )
  try{
    
    await jwtVerify(current_cookie.value,secret)
    
  }catch(err){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*'],
}