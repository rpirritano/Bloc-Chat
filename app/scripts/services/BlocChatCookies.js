(function () {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/cookies.html',
                controller: 'CookiesCtrl',
                controllerAs: 'cookies',
                size: 'sm',
                keyboard: false,
                backdrop: 'static'
            }).result.then(function (data) {
                console.log(data);
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
}());