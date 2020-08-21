


var socketIoClient = io.connect('http://192.168.0.125:3300');

socketIoClient.on('connect',function(){
    console.log('connect');
    socketIoClient.emit('showConnect',{msg:'showConnect'})
})

socketIoClient.on('sendConnectMsg',function (data) {
    console.log('sendConnectMsg'+ JSON.stringify(data));
    window.location.href = data.msg.toString();
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
})
