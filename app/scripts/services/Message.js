(function () {
    function Message($firebaseArray, $cookies, $filter) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        var getMessages = function (roomId) {        
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));            
        };
        
        var sendMessages = function (newMessage, roomId) {
            var date = new Date();
            console.log(newMessage + ' ' + roomId + ' ' + date);
            var message = {
                username: $cookies.get('blocChatCurrentUser'),
                content: newMessage,
                sentAt: $filter('date')(date, 'medium'),
                roomId: roomId
            };
            console.log(message);
            messages.$add(message);
        };
        
        return {
            getMessages: getMessages,
            sendMessages: sendMessages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
}());