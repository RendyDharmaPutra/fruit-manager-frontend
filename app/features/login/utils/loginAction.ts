import { getApiEnv } from "~/core/utils/get_api_env";

export const loginAction = async (
  user: User
): Promise<
  | SuccessResponseType<{ token: string }>
  | FailedResponseType<string | FailedValidationType>
> => {
  const env = getApiEnv();

  try {
    const response = await fetch(`${env}/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = await response.json();

    return res;
  } catch (err) {
    console.error("ERROR saat action:", err);
    return {
      success: false,
      message: "Gagal mengautentikasi Pengguna",
      error: "Terjadi kesalahan tidak diketahui",
    } as FailedResponseType<string>;
  }
};
