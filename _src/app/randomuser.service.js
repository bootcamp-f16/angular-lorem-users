import angular from 'angular';

function randomuserService($resource) {
    const api = $resource('https://randomuser.me/api/', {}, {
        getUsers: {
            method: 'GET',
            isArray: true,
            params: { results: 25 },
            transformResponse(data) {
                return angular.fromJson(data).results;
            },
        },
    });

    return api;
}

export default randomuserService;
