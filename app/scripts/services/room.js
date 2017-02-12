(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var messageReference = firebase.database().ref().child("messages").orderByChild('roomId');
        
        
        var addChatRoom = function(newRoom) {
            rooms.$add({name: newRoom});
        };
        
       
        
        return {
            all: rooms,
            createRoom: addChatRoom,
           
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
})();