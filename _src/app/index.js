import angular from 'angular';
import 'angular-resource';

import randomuserService from './randomuser.service';
import appComponent from './app.component';

import userDetailsComponent from './user-details.component';

const AppModule = angular.module('app', [
    'ngResource',
]);

AppModule.factory('randomuserService', randomuserService);
AppModule
    .component('app', appComponent)
    .component('userDetails', userDetailsComponent);

export default AppModule;
