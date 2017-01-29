export default class controller {
  constructor(user, AuthService, $state) {
    this.user = user
    this._AuthService = AuthService
    this._state = $state
  }

  changePassword (form, validity) {
    this._AuthService.changePassword(form)
    .then(resp => {
      console.log(resp);
    })
    .catch(err => console.log(err) )
  }

  logout() {
    this._AuthService.logout()
    .then(resp => {
      this._state.go('main.login')
    })
    .catch(err => {
      console.log(err);
    })
  }
}
controller.$inject = ['user', 'AuthService', '$state']
