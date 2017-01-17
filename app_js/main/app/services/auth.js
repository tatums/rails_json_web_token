const host = 'http://localhost:3000'

class AuthService {
  constructor($http) {
    this._http = $http
  }

  login(email, password) {
    return this._http({
      method: 'POST',
      url: `${host}/auth_user`,
      params: {
        email: email,
        password: password
      }
    })
  }

  logout(email) {
  }
}

AuthService.$inject = ['$http']

export default AuthService
