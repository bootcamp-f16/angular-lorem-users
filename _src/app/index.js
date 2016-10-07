import angular from 'angular';
import 'angular-resource';

function randomuserService ($resource) {
    const api = $resource('https://randomuser.me/api/');

    return api;
}

function AppController(randomuserService) {
    const ctrl = this;
    ctrl.seed = null;
    ctrl.users = [];
    ctrl.currentUser = null;

    function updateUsers () {
        randomuserService.get({results: 25, seed: ctrl.seed}).$promise
            .then(function (data) {
                ctrl.users = data.results;
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
