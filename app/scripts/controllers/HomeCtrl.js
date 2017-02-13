(function () {
    function HomeCtrl($uibModal, Room, Message, $cookies) {
        var home = this;
        home.activeRoom = null;
        home.activeMessages = null;
        home.currentUser = null;
        home.chatRooms = Room.all;
        home.openModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: 'sm'
            });
        };
        
        home.setRoom = function (room) {
            home.activeRoom = room;
            home.activeMessages = Message.getMessages(room.$id);
            home.currentUser = $cookies.blocChatCurrentUser;
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', HomeCtrl]);
}());