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

export default AppController;