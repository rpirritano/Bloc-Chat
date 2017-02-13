(function () {
    function CookiesCtrl($cookies, $uibModalInstance) {
        this.setUsername = function () {
            $cookies.blocChatCurrentUser = this.newUsername;
            $uibModalInstance.close($cookies.blocChatCurrentUser);
        };
    }
    
    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$cookies', '$uibModalInstance', CookiesCtrl]);
}());