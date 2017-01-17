export default class controller {

  constructor($http, $cookies, $state, AuthService) {
    this._http = $http
    this._cookies = $cookies
    this._state = $state
    this.auth_token = this._cookies.get('auth_token')
    this.AuthService = AuthService
  }

  login(form, validity) {

    this.AuthService.login(form.username, form.password)
    .then(resp => {
      this._cookies.put('auth_token', resp.data.auth_token)
      this._state.go('main.articles')
    })
    .catch(err => {
      console.log(err)
    })

  }
}
controller.$inject = ['$http', '$cookies', '$state', 'AuthService']
