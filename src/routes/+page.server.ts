import { authenticate_or_redirect } from "$lib/nathcat.net/oauth.ts";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ cookies }) => {
  return await authenticate_or_redirect(cookies);
};
