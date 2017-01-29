export default class controller {

  constructor(AuthService, articles, $state) {
    this._AuthService = AuthService
    this.articles = articles
    this._state = $state
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
controller.$inject = ['AuthService', 'articles', '$state']
