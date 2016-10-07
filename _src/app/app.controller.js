function AppController(randomuserService) {
    const ctrl = this;
    ctrl.seed = null;
    ctrl.users = [];
    ctrl.currentUser = null;

    function updateUsers() {
        randomuserService.getUsers({ seed: ctrl.seed }).$promise
            .then((users) => {
                ctrl.users = users;
                ctrl.currentUser = null;
            });
    }

    updateUsers();

    ctrl.update = function update() {
        ctrl.seed = ctrl.newSeed;
        updateUsers();
    };

    ctrl.setUserDetail = function setUserDetail(index) {
        ctrl.currentUser = ctrl.users[index];
    };
}

export default AppController;
