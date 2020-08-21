///////创建socket.io 实例 封装 socket 服务端
var sendData;
var productJson  = require('../public/Json/language');

var socketio = function (io) {
    io.on('connection', function (socket) {
        console.log('socketiojs', '连接成功:' + socket.id);

        socket.on('sendClick', function (data) {
            console.log('sendClick' + data, data.msg);
            socket.broadcast.emit('sendClick', data);

        });

        socket.on('sendChangeLang', function (data) {
            socket.broadcast.emit('sendChangeLang', data);
            console.log('sendChangeLang' + data, data.lang,);
            global.langNum =  data.lang;
        });

        socket.on('sendIframeSrc', function (data) {
            socket.broadcast.emit('sendIframeSrc',data);
        });

        socket.on('sendRouterMsg', function (data) {
            console.log('sendRouterMsg' + data, data.msg);
            socket.broadcast.emit('sendRouterMsg', data);
            sendData = data;
        });

        /////////////////////////////////

        socket.on('sendOneMsg', function (data) {
            console.log('8sendOneMsg' + data, data.msg);
            socket.broadcast.emit('sendOneMsg', data);
            sendData = data;
        });






        socket.on('showConnect', function (data) {
            console.log('showConnect' + sendData, data.msg);
            socket.emit('sendConnectMsg', sendData);
        });

        socket.on('sendMsg', function (data) {
            console.log('sendMsg' +  data.msg);
            global.cateClick = data.msg;
            socket.emit('sendMsg', data.msg);
        });

        socket.on('sendData', function (data) {
            socket.emit('sendPutData', JSON.stringify(productJson[global.langNum][data.data.split("&&")[0]][data.data.split("&&")[1]]));
        });



    });
};

module.exports = socketio;

