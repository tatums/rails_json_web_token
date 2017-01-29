import loginController from './login/controller'
import articlesController from './articles/controller'
import signupController from './signup/controller'
import confirmController from './confirm/controller'
import myAccountController from './my_account/controller'
import paswordResetUpdateController from './password_reset_update/controller'
import AuthService from './services/auth'

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      template: require('./base.html'),
    })
    .state('main.login', {
      url: '/login',
      template: require('./login/template.html'),
      controller: loginController,
      controllerAs: 'ctl',
      loginRequired: false
    })
    .state('main.signup', {
      url: '/signup',
      template: require('./signup/template.html'),
      controller: signupController,
      controllerAs: 'ctl',
      loginRequired: false
    })
    .state('main.myAccount', {
      url: '/my-account',
      template: require('./my_account/template.html'),
      controller: myAccountController,
      controllerAs: 'ctl',
      loginRequired: true,
      resolve: {
        user: function (AuthService, $stateParams) {
          return AuthService.getUser()
          .then(resp => {
            return resp.data
          })
          .catch(err => console.log(err) )
        }
      }
    })
    .state('main.claimPasswordReset', {
      url: '/password_reset_update/:reset_password_token',
      template: require('./password_reset_update/template.html'),
      controller: paswordResetUpdateController,
      controllerAs: 'ctl',
      loginRequired: false,
      resolve: {
        reset_password_token: function ($stateParams) {
          console.log($stateParams);
          return $stateParams.reset_password_token
        }
      }
    })
    .state('main.confirm', {
      url: '/confirm/:token',
      template: require('./confirm/template.html'),
      controller: confirmController,
      controllerAs: 'ctl',
      loginRequired: false,
      resolve: {
        token: function (AuthService, $stateParams) {
          return AuthService.confirm($stateparams.token)
          .then(resp => {
            console.log(resp);
            return resp
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
    })
    .state('main.articles', {
      url: '/articles',
      template: require('./articles/template.html'),
      controller: articlesController,
      controllerAs: 'ctl',
      loginRequired: true,
      resolve: {
        articles: ($http, $cookies) => {
          let authToken = $cookies.get('auth_token')
          return $http({
            method: 'GET',
            url: `http://localhost:3000/articles`,
            headers: {
              "Authorization": `Bearer ${authToken}`
            }
          }).then(resp => {
            return resp.data
          }).catch(err => {
            console.log(err)
          })
        }
      }
    })

  $urlRouterProvider.otherwise('/login');
}

routes.$inject = ['$stateProvider', '$urlRouterProvider'];
