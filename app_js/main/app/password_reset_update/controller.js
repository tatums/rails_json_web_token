export default class controller {
  constructor(reset_password_token, AuthService) {
    this.reset_password_token = reset_password_token
    this.AuthService = AuthService
  }

  updatePassword(form, validity) {
    const data = {
      user: {
        reset_password_token: this.reset_password_token,
        password: form.password,
        password_confirmation: form.password_confirmation
      }
    }

    this.AuthService.resetPasswordByToken(data)
    .then(resp =>{
      console.log(form)
    })
    .catch(err => console.log(err) )
  }

}
controller.$inject = ['reset_password_token', 'AuthService']
