export default class controller {

  constructor(articles, $cookies, $state) {
    this.articles = articles
    this._cookies = $cookies
    this._state = $state
  }

  logout() {
    this._cookies.remove('auth_token')
    this._state.go('main.login')
  }

}
controller.$inject = ['articles', '$cookies', '$state']
