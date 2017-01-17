# Rails and JWT

This is a Proof of concept which uses Rails as a backend and returns JWT for
Auth. Client side apps can verify the token using the public RSA key.
The token is held by the client app and will need to pass the token back up to
the server on subsequet requests for resources.

* Rails API
* Devise for user auth
* JWT (JSON Web Tokens)
* SPA's (Single Page Apps) are served from `public` directory but this could
  even be an S3 bucket under the same domain

## Development

#### Server

Start rails

```bash
$ rails db:setup
$ rails server
```

#### Cient Side App

```bash
$ cd app_js
$ npm install
$ npm run webpack -- --watch
```

* SPA's soruce lives in `app_js`

## TODO

- [ ] check token for expiration
  - [] client side (JS)
  - [] Server side (ruby)
- [ ] my account page
- [ ] change password
- [ ] password reset
- [ ] push logic into warden - maybe?  https://medium.com/@goncalvesjoao/rails-devise-jwt-and-the-forgotten-warden-67cfcf8a0b73#.frv45o2rl

## Notes

https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage

https://github.com/OADA/rsa-pem-to-jwk
