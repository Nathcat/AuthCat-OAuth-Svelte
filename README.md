# AuthCat OAuth Svelte

Provides methods to modularise and abstract the AuthCat OAuth flow for applications
which want to use AuthCat OAuth as an authentication method.

## `auth.db`

This library creates a database file at the current working directory, in which it will
store information linking users / auth grants / access tokens. You will probably
want to include this file in your `.gitignore`!

## OAuth flow structure

The following structure must be used under `routes` for login:

```
login
  response
    +page.server.ts
    +page.svelte
  +page.svelte
logout
  +page.server.ts
```

You can find example contents of these files in this project's [git repository](https://github.com/Nathcat/AuthCat-OAuth-Svelte).

You must set your OAuth client's redirect URL to `https://example.com/login/response`.

This setup yields the following authentication flow:

1. User navigates to `/`.
2. If `authenticate_or_redirect` is used at `/`, they are redirected to `/login`.
3. Once the `OauthButton` on this page is clicked, the user is redirected to `https://auth.nathcat.net/auth` to login.
4. AuthCat redirects the user to `/login/response` once complete, either with an error message, or an auth grant.
5. `oauth_response_handler` handles obtaining an access token from the provided auth grant, and storing this to `auth.db`.
6. If successful, the user is redirected to `/`, and `authenticate_or_redirect` will now return
   the user data.

## `.env` config

Your `.env` file must contain the following:

```
PUBLIC_CLIENT_ID=<client_id>
CLIENT_SECRET=<client_secret>
```
