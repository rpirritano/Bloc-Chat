 (function() {
     function HomeCtrl(Room, $uibModal) {
        var home = this;
         home.chatRooms = Room.all;
         home.openModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: 'sm'
            });
            
         }
        
     }
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
 })();


