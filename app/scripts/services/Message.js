(function() {
    function Message($firebaseArray) {
        var messageRef = firebase.database().ref().child("messages");
        var messageReference = firebase.database().ref().child("messages").orderByChild('roomId');
        
        var messages = $firebaseArray(messageRef);
        
            Message.getByRoomId = function(roomId) {              
                return $firebaseArray(messageReference.equalTo(roomId));
            }
        
        return Message;
            }
        
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message])
})();