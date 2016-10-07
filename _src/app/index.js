import angular from 'angular';
import 'angular-resource';

function randomuserService ($resource) {
    const api = $resource('https://randomuser.me/api/', {}, {
        getUsers: {
            method: 'GET',
            isArray: true,
            params: { results:25 },
            transformResponse(data) {
                return angular.fromJson(data).results;
            }
        }
    });

    return api;
}

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
