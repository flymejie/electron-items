


// var socketIoClient = io.connect('http://192.168.0.124:3300');
// var socketIoService = new socketIo('http://127.0.0.1:3300');


class ClientSocketIo {
    constructor(){
        let ServiceAddr = 'http://192.168.0.124:3300';
        this.socket = io.connect(ServiceAddr);

        
    }


    acceptClick(){
        let acceptData;
        this.socket.on('sendChangeLang',function (data) {
            console.log('sendChangeLang'+ JSON.stringify(data));
            acceptData = data;
        });
        return acceptData;
    }
    

}








/*socketIoClient.on('sendChangeLang',function (data) {
    console.log('sendChangeLang'+ JSON.stringify(data));
    
});



socketIoClient.on('sendConnectMsg',function (data) {
    console.log('sendConnectMsg'+ JSON.stringify(data));
    
})


socketIoClient.on('sendOneMsg',function (data) {
    console.log('8sendOneMsg'+ JSON.stringify(data));
    window.location.href = data.msg.toString();
})

socketIoClient.on('sendRouterMsg',function (data) {
    console.log('sendRouterMsg'+ JSON.stringify(data));
    window.location.href = data.msg.toString();
})



socketIoClient.on('disconnect',function(){
    console.log('disconnect');
})*/
