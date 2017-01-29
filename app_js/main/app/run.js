//import jwt from 'jsonwebtoken'
//
//const JWK = {
//  kty: 'RSA',
//  n: 'AMHVmy0WeQLiFIFeME-AZdTMO0XOakMisPXABCuZwq0BcQWTwL3jqdO10l2vYepSiGVpOUjnlqSeMyX-hFMTPiDPuGJ7soMka1uh4dNiXNdrz-d8RgxYQBIM1OF-j3Rg-sfnQ8vVshJfxaAMdRmIPx-I2PLP9GNKWXm5DBMDA5A2p0Ok3B2131zNsD0b17Y18Dj-1rGEWGyErKkSzevLNHUUqkEU-1qgJhTXeHpSeJzYnRslu4K01SXzycyFzo8-6lSK-oAq5dpZT67di1yqsZPBB3y_vzG83WKgl1kK4NLv28L3eh0cYpvAlFxoyAw3jxds4RUE-NeC3g8gKu6exd8',
//  e: 'AQAB'
//}

    //let cert = fs.readFileSync('../../public_key.pem');
    //jwt.verify(token, cert, function(err, decoded) {
    //  console.log(decoded)
    //});

export default function run($rootScope, $state, $cookies) {
  $rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
    let token = $cookies.get('auth_token')
    if (token == undefined && toState.loginRequired && toState.name != "main.login") {
      console.log('NOT AUTH TOKEN => REDIRECT to LOGIN');
      $state.transitionTo('main.login')
      event.preventDefault()
    }
  });
}

run.$inject = ['$rootScope', '$state', '$cookies'];
