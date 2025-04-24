export const getFertilizers = async () => {
  const env = process.env.API_URL;

  const response = await fetch(`http://api:3000/fertilizer/`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOTlhZjc0Zi0yODE4LTQ0NzYtODQ1My0zNDQ1MmI0MDg3MDUiLCJpYXQiOjE3NDU0ODAwMTAsImV4cCI6MTc0NTU2NjQxMH0.gzKw78Y81fiK2zkfU4temR5-b85JSePQN35F_y2c-PY",
    },
  });

  const result: SuccessResponseType<Fruit[]> | FailedResponseType<string> =
    await response.json();

  return result;
};
