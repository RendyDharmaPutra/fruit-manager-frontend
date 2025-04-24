export const getFertilizers = async () => {
  const env = process.env.API_URL;

  const response = await fetch(`http://api:3000/fertilizer/`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTlhZjc0Zi0yODE4LTQ0NzYtODQ1My0zNDQ1MmI0MDg3MDUiLCJpYXQiOjE3NDUzODkzMzksImV4cCI6MTc0NTQ3NTczOX0.-16qlFXajewy_dA18Cz44lZ9ogAoYGv7mkVcRdxYH6E",
    },
  });

  const result: SuccessResponseType<Fruit[]> | FailedResponseType<string> =
    await response.json();

  return result;
};
