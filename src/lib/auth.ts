"use server";

import { cookies } from "next/headers";

export async function setSession(token: string) {
  const expiresInOneHour = new Date(Date.now() + 60 * 60 * 1000);
  const cookiesStorage = await cookies();
  cookiesStorage.set(
    "session",
    token,
    {
      expires: expiresInOneHour,
      secure: true,
      sameSite: 'lax',
    });
}