(function() {
  function RoomCtrl($scope, $uibModal, Room, Message, $cookies) {

    $scope.allRooms = Room.all;
    $scope.activeRoom = null;
    $scope.open = function() {
      var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: '/templates/newRoom.html',
          controller: 'ModalCtrl'
      });

      modalInstance.result.then(function (newName) {
          Room.createRoom(newName);
      })
    }
    $scope.setRoom = function(room) {
      $scope.activeRoom = room;
      $scope.roomName = room.name;
      $scope.messages = Message.getByRoomId(room.$id);
    }

  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', 'Message', RoomCtrl]);
})();