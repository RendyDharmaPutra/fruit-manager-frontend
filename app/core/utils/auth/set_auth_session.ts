import { Session, SessionData } from "@remix-run/node";
import { JWTPayload } from "jose";

export const setAuthSession = (
  session: Session<SessionData, SessionData>,
  payload: JWTPayload
) => {
  session.set("userId", payload.userId);
  session.set("role", payload.role);
};
