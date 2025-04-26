import { getTokenCookie } from "~/core/utils/auth/get_token_cookie";
import { getApiEnv } from "~/core/utils/get_api_env";

export const fetchApi = async <T, Method extends RequestInit["method"]>(
  request: Request,
  route: string,
  method: RequestInit["method"],
  action: string,
  data?: T
): Promise<FetchResponseType<T, Method>> => {
  const env = getApiEnv();

  const token = await getTokenCookie(request);

  try {
    const response = await fetch(`${env}${route}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data && JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.error("ERROR saat action:", err);
    return {
      success: false,
      message: `Gagal ${action}`,
      error: "Terjadi kesalahan tidak diketahui",
    } as FetchResponseType<T, Method>;
  }
};
