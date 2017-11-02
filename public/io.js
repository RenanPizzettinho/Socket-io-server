$(function () {
    var socket = io();
    $('form').submit(onSubmit);

    socket.on('chat message', onChatMessage);

    function onSubmit () {
        
        var message = {
            user: $('#u').val(),
            message: $('#m').val()
        };

        socket.emit('chat message', message);
        $('#m').val('');

        return false;
        
    }


    function onChatMessage(msg){
            
        $('#messages').append($('<li>').text(msg.user + ' -- ' + msg.message));
            
    }
});