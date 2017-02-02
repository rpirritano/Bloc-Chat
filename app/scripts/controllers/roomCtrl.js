 (function() {
     function RoomCtrl($scope, Room) {
        this.title = 'Bloc Chat';
        this.rooms = Room.all;
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
 })();