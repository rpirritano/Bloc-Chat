(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
    var rooms = $firebaseArray(ref.child('rooms'));
    
    var addRoom = function(roomName) {
        rooms.$add({name: roomName})
    };  
  
      
    return {
        all: rooms,
        add: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
    
})();