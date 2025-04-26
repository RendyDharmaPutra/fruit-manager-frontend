import { fetchApi } from "./fetch_api";

export const dataAction = async <T>(
  request: Request,
  formData: FormData,
  route: string,
  problem: string,
  getData: () => T
) => {
  const id = Number(formData.get("id")) || null;
  const intent = formData.get("intent");

  if (!id && (intent === "update" || intent === "delete")) {
    return {
      success: false,
      message: "Terjadi Kesalahan saat aksi",
      error: "ID tidak ditemukan",
    };
  }

  switch (intent) {
    case "create":
      const createData = getData();

      return await fetchApi(
        request,
        `/${route}/`,
        "POST",
        `menambah data ${problem}`,
        createData
      );

    case "update":
      const updateData = getData();

      return await fetchApi(
        request,
        `/${route}/${id}`,
        "PUT",
        `mengubah data ${problem}`,
        updateData
      );

    case "delete":
      return await fetchApi(
        request,
        `/${route}/${id}`,
        "DELETE",
        `menghapus data ${problem}`
      );

    default:
      return {
        success: false,
        message: "Terjadi Kesalahan saat aksi",
        error: "Terjadi Kesalahan tidak diketahui",
      } as FailedResponseType<string>;
  }
};
