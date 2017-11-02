module.exports = chat;

function chat(io){
    
    var chat = io.of('/chat');
    
    chat.on('connection', chatOnConnection);
    
    function chatOnConnection(socket) {
        
        console.log('Um usuário conectado ao chat');
    
        socket.broadcast.emit('hi');
        
        socket.on('disconnect',chatOnDisconnect);
        socket.on('message', chatOnMessage);
        
    
        function chatOnDisconnect() {
            
            console.log('Um usuário desconectou do chat');
    
        }
    
        function chatOnMessage(msg) {
            
            chat.emit('message', msg);
            console.log('user: ' + msg.user + ' - message: ' + msg.message);
    
        }
        
    }
    
}