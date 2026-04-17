import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/", "/connexion", "/inscription"];

function isPublicRoute(pathname: string) {
  return PUBLIC_ROUTES.includes(pathname);
}

function isStatic(pathname: string) {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔓 Ignore fichiers internes
  if (isStatic(pathname)) {
    return NextResponse.next();
  }

  const session = request.cookies.get("solimouv_session")?.value;
  const isAuthenticated = session === "true";
  const isPublic = isPublicRoute(pathname);

  // 🔒 Bloque accès si pas connecté
  if (!isAuthenticated && !isPublic) {
    return NextResponse.redirect(new URL("/connexion", request.url));
  }

  // 🔁 Redirection si déjà connecté
  if (
    isAuthenticated &&
    (pathname === "/connexion" || pathname === "/inscription")
  ) {
    return NextResponse.redirect(new URL("/accueil", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};