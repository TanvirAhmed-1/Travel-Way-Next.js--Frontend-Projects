import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("role")?.value;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/dashboard/admin")) {
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (pathname.startsWith("/dashboard/user")) {
    if (role !== "user") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
