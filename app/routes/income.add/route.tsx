import { PageContainer } from "~/core/components/layout/page_layout/page_container";

export default function AddIncomePage() {
  const loaderData = {
    success: true,
    message: "helo",
    data: {
      data: [],
      length: 0,
    },
  } as SuccessResponseType<any[]>;

  return (
    <PageContainer title="Tambah Pemasukan" loaderData={loaderData}>
      <h1>Hello</h1>
    </PageContainer>
  );
}
