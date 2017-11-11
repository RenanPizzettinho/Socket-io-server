$(function () {
    
    var socket = io('/chat');
    
    $('form').submit(onSubmit);

    socket.on('message', onChatMessage);

    function onSubmit () {
        
        var message = {
            user: $('#u').val(),
            message: $('#m').val()
        };

        socket.emit('message', message);
    
        $('#m').val('');

        return false;

    }


    function onChatMessage(msg){
            
        $('#messages').append($('<li>').text(msg.user + ' -- ' + msg.message));
            
    }
});