export const updateFuelAction = async (
  id: number,
  fuel: Fuel
): Promise<
  SuccessResponseType<null> | FailedResponseType<string | { message: string }[]>
> => {
  const env = process.env.API_URL;
  try {
    const response = await fetch(`http://api:3000/fuel/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTlhZjc0Zi0yODE4LTQ0NzYtODQ1My0zNDQ1MmI0MDg3MDUiLCJpYXQiOjE3NDUzODkzMzksImV4cCI6MTc0NTQ3NTczOX0.-16qlFXajewy_dA18Cz44lZ9ogAoYGv7mkVcRdxYH6E",
      },
      body: JSON.stringify(fuel),
    });

    const res:
      | SuccessResponseType<null>
      | FailedResponseType<string | { message: string }[]> =
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
