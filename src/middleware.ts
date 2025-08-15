import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/admin/:path*"],
};

export function middleware(request: NextRequest) {
  const username = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASS;

  if (!username || !password) {
    return;
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return new Response("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
    });
  }

  const base64Credentials = authHeader.split(" ")[1] ?? "";
  const decoded = Buffer.from(base64Credentials, "base64").toString();
  const [user, pass] = decoded.split(":");

  if (user !== username || pass !== password) {
    return new Response("Unauthorized", { status: 401 });
  }
}


