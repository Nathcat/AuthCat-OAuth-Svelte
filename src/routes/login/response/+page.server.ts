import { oauth_response_handler } from "$lib/nathcat.net/oauth.ts";
import type { PageServerLoad } from "./$types.js";

export const load: PageServerLoad = async ({ url, cookies }) => {
  await oauth_response_handler(url, cookies);
};
