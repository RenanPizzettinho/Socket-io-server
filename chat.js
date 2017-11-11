module.exports = chat;

function chat(io){
    
    var chat = io.of('/chat');
    
    chat.on('connection', chatOnConnection);
    
    function chatOnConnection(socket) {
        
        console.log('Novo usuário conectado ao chat: (' + socket.id + '-' + socket.handshake.address + ')');

        socket.broadcast.emit('hi');
        
        socket.on('disconnect',chatOnDisconnect);
        socket.on('message', chatOnMessage);
        
    
        function chatOnDisconnect() {
            
            console.log('Um usuário desconectou do chat');
    
        }
    
        function chatOnMessage(msg) {
            
            chat.emit('message', msg);
            console.log(
                '##NOVA MENSAGEM###' +
                '\nUsuário: ' + msg.user + '('+socket.id+') ' + 
                '\nMensagem: ' + msg.message + 
                '\nEndereço: ' + socket.handshake.address + 
                '\nData/hora: ' + socket.handshake.time
            );

        }
        
    }

}