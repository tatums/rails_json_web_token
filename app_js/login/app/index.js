import angular from 'angular'
import ngRoute from 'angular-route'
import ngCookies from 'angular-cookies'
import 'skeleton-css/css/normalize.css'
import 'skeleton-css/css/skeleton.css'

import routes from './routes'

export const app = angular.module('app', [ngRoute, ngCookies])
.config(routes)
