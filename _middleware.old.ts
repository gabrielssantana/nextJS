import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export const middleware = (
  req: NextRequest,
  ev: NextFetchEvent
) => {
  // return new Response("Hello")
  // return NextResponse.next()
  return NextResponse.rewrite('http://localhost:3000/')
}
