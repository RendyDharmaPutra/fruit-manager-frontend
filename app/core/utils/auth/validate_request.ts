import { getSession } from "./session";
import { setAuthSession } from "./set_auth_session";
import { jwtParse } from "./jwt_parse";
import { authCookies } from "./cookie";

export async function validateRequest(
  request: Request
): Promise<UserPayload | null> {
  // 1. Cek session pertama (cepat)
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return {
      userId: session.get("userId"),
      role: session.get("role"),
    };
  }

  // 2. Fallback ke JWT validation (jika session hilang)
  const cookieString = request.headers.get("Cookie");
  let token = await authCookies.parse(cookieString);

  if (!token) return null;

  try {
    const payload = await jwtParse(token);

    // 3. Rebuild session dari JWT
    setAuthSession(session, payload);

    return {
      userId: payload.userId as string,
      role: payload.role as string,
    };
  } catch {
    return null;
  }
}
