export const deleteFuel = async (
  id: number
): Promise<SuccessResponseType<null> | FailedResponseType<string>> => {
  const env = process.env.API_URL;
  try {
    const response = await fetch(`http://api:3000/fuel/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTlhZjc0Zi0yODE4LTQ0NzYtODQ1My0zNDQ1MmI0MDg3MDUiLCJpYXQiOjE3NDU0ODAwMTAsImV4cCI6MTc0NTU2NjQxMH0.gzKw78Y81fiK2zkfU4temR5-b85JSePQN35F_y2c-PY",
      },
    });

    const res: SuccessResponseType<null> | FailedResponseType<string> =
      await response.json();

    return res;
  } catch (err) {
    console.error("ERROR saat action:", err);
    return {
      success: false,
      message: "Gagal menambah data Buah",
      error: "Terjadi kesalahan tidak diketahui",
    };
  }
};
