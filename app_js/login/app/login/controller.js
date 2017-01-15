const host = 'http://localhost:3000'

export default class controller {
  constructor($http, $cookies) {
    this._http = $http
    this._cookies = $cookies
    this.auth_token = this._cookies.get('auth_token')
  }

  login(form, validity) {
    this._http({
      method: 'POST',
      url: `${host}/auth_user`,
      params: {
        email: form.username,
        password: form.password
      }
    }).then(resp => {
      console.log(resp)
      this._cookies.put('auth_token', resp.data.auth_token)
    }).catch(err => {
      console.log(err)
    })
  }
}
controller.$inject = ['$http', '$cookies']
