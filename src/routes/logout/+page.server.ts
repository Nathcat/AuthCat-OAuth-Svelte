import { logout } from "$lib/nathcat.net/oauth.ts";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ cookies }) => {
  await logout(cookies);
};
