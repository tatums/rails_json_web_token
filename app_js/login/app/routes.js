import loginController from './login/controller'
import articlesController from './articles/controller'

export default function routing($routeProvider) {
    $routeProvider
      .when('/', {
        template: require('./login/template.html'),
        controller: loginController,
        controllerAs: 'ctl'
      })
      .when('/articles', {
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
    .otherwise({
      redirectTo: '/'
    })
}

routing.$inject = ['$routeProvider']
