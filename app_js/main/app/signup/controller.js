export default class controller {
  constructor(AuthService) {
    this.AuthService = AuthService
  }

  signup(form, signupForm) {
    // TODO - check for validity
    this.AuthService.signup(form)
    .then(resp => {
      console.log("Success", resp);
    })
    .catch(err => {
      console.log("ERRR", err)
    })
  }
}
controller.$inject = ['AuthService']
