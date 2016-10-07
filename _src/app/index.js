import angular from 'angular';
import 'angular-resource';

import randomuserService from './randomuser.service';

function AppController(randomuserService) {
    const ctrl = this;
    ctrl.seed = null;
    ctrl.users = [];
    ctrl.currentUser = null;

    function updateUsers () {
        randomuserService.getUsers({seed: ctrl.seed}).$promise
            .then(function (users) {
                ctrl.users = users;
                ctrl.currentUser = null;
            });
    }

    updateUsers();

    ctrl.update = function () {
        ctrl.seed = ctrl.newSeed;
        updateUsers();
    }

    ctrl.setUserDetail = function (index) {
        ctrl.currentUser = ctrl.users[index];
    }
}

const AppModule = angular.module('app', [
    'ngResource'
]);

AppModule.factory('randomuserService', randomuserService);
AppModule.controller('AppController', AppController);

export default AppModule;
