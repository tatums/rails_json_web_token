import loginController from './login/controller'
import articlesController from './articles/controller'

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      template: require('./base.html'),
    })
    .state('main.login', {
      url: '/login',
      template: require('./login/template.html'),
      controller: loginController,
      controllerAs: 'ctl'
    })
    .state('main.articles', {
      url: '/articles',
      template: require('./articles/template.html'),
      controller: articlesController,
      controllerAs: 'ctl',
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
