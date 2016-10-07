import angular from 'angular';
import 'angular-resource';

import randomuserService from './randomuser.service';
import appTemplate from './app.html';
import appComponent from './app.component';

const AppModule = angular.module('app', [
    'ngResource'
]);

AppModule.factory('randomuserService', randomuserService);
AppModule.component('app', appComponent);

export default AppModule;
