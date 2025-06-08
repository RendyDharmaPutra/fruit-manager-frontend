import { jwtVerify } from "jose";

export const jwtParse = async (token: string) => {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );

  return payload;
};
