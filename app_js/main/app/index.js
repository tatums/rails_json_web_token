import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngCookies from 'angular-cookies'

import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

import AuthService from './services/auth'
import routes from './routes'
import run from './run'

export const app = angular.module('app',
  [uiRouter, ngCookies]
)
.service('AuthService', AuthService)
.config(routes)
.run(run)
