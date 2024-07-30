import { cookies } from "next/headers";

export function getToken(): string | undefined {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  return token;
}
