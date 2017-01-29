const host = 'http://localhost:3000'

class AuthService {

  constructor($http, $cookies) {
    this._http = $http
    this._cookies = $cookies
  }

  getUser() {
    let authToken = this._cookies.get('auth_token')
    return this._http({
      method: 'GET',
      url: `${host}/user.json`,
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    })
  }

  logout() {
    return new Promise((resolve, reject) => {
      this._cookies.remove('auth_token')
      return resolve(true)
    })
  }

  confirm(token) {
    return this._http({
      method: 'POST',
      url: `${host}/confirm.json`,
      data: {
        user: {
          confirmation_token: token
        }
      },
    })
  }

  changePassword(attr) {
    let authToken = this._cookies.get('auth_token')
    return this._http({
      method: 'PUT',
      url: `${host}/change_password.json`,
      data: {
        user: {
          current_password: attr.current_password,
          password: attr.password,
          password_confirmation: attr.password_confirmation
        }
      },
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    })
  }

  resetPasswordByToken(attr) {
    return this._http({
      method: 'PUT',
      url: `${host}/password_reset.json`,
      data: attr
    })
  }

  passwordReset(email) {
    return this._http({
      method: 'POST',
      url: `${host}/password_reset.json`,
      data: {
        user: {
          email: email
        }
      }
    })
  }

  signup(attr) {
    return this._http({
      method: 'POST',
      url: `${host}/signup.json`,
      data: {
        user: {
          email: attr.email,
          password: attr.password,
          password_confirmation: attr.password_confirmation
        }
      },
    })
  }


  login(email, password) {
    return this._http({
      method: 'POST',
      url: `${host}/auth_user.json`,
      data: {
        email: email,
        password: password
      }
    })
  }

}

AuthService.$inject = ['$http', '$cookies']

export default AuthService
