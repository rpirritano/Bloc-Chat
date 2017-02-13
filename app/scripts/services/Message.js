(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        var getMessages = function (roomId) {
            var messages;
            ref.orderByChild('roomId').equalTo(roomId).on('value', function (data) {
                messages = data.val();
            });
            return messages;
            
        };

        
        return {
            getMessages: getMessages
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
}());