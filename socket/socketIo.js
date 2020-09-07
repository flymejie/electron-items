///////创建socket.io 实例 封装 socket 服务端
var sendData;
var productJson = require('../public/Json/language');

var socketio = function (io) {
    io.on('connection', function (socket) {
        console.log('socketiojs', '连接成功:' + socket.id);

        socket.on('sendClick', function (data) {
            console.log('sendClick' + data, data.msg);
            socket.broadcast.emit('sendClick', data);
        });

        socket.on('sendIframeClick', function (data) {
            console.log('sendIframeClick' + data, data.msg);
            socket.broadcast.emit('sendIframeClick', data);
        });

        socket.on('sendChangeLang', function (data) {
            socket.broadcast.emit('sendChangeLang', data);
            console.log('sendChangeLang' + data, data.lang,);
            global.langNum = data.lang;
        });

        socket.on('sendIframeSrc', function (data) {
            socket.broadcast.emit('sendIframeSrc', data);
        });

        socket.on('sendCateRouter', function (data) {
            console.log('sendCateRouter' + data, data.router);
            socket.broadcast.emit('sendCateRouter', data);
        });

        socket.on('sendRouterMsg', function (data) {
            console.log('sendRouterMsg' + data, data.router);
            socket.broadcast.emit('sendRouterMsg', data);
        });

        socket.on('sendOneMsg', function (data) {
            console.log('sendOneMsg' + data, data.msg);
            socket.broadcast.emit('sendOneMsg', data);
        });

        socket.on('sendHeadMsg', function (data) {
            console.log('sendHeadMsg' + data, data.msg);
            socket.broadcast.emit('sendHeadMsg', data);
        });


        socket.on('sendModelIn', function (data) {
            console.log('sendModelIn' + data, data.msg);
            socket.broadcast.emit('sendModelIn', data);
        });

        socket.on('sendVideoIn', function (data) {
            console.log('sendVideoIn' + data, data.msg);
            socket.broadcast.emit('sendVideoIn', data);
        });

        socket.on('sendListHide', function (data) {
            console.log('sendListHide' + data, data.msg);
            socket.broadcast.emit('sendListHide', data);
        });

        socket.on('sendPlanClick', function (data) {
            console.log('sendPlanClick' + data, data.msg);
            socket.broadcast.emit('sendPlanClick', data);
        });

        socket.on('sendBtnDir', function (data) {
            console.log('sendBtnDir' + data, data.msg);
            socket.broadcast.emit('sendBtnDir', data);
        });

        socket.on('sendMouseDown', function (data) {
            // console.log('sendMouseDown' + data, data.msg);
            socket.broadcast.emit('sendMouseDown', data);
        });

        socket.on('sendMouseUp', function (data) {
            // console.log('sendMouseUp' + data, data.msg);
            socket.broadcast.emit('sendMouseUp', data);
        });

        socket.on('sendImgChange', function (data) {
            // console.log('sendMouseUp' + data, data.msg);
            socket.broadcast.emit('sendImgChange', data);
        });

        /////  滚动条事件高度调整同步
        socket.on('sendScroll', function (data) {
            // console.log('sendScroll' + data, data.msg);
            socket.broadcast.emit('sendScroll', data);
        });

        socket.on('sendScrollModel', function (data) {
            // console.log('sendMouseUp' + data, data.msg);
            socket.broadcast.emit('sendScrollModel', data);
        });

        socket.on('sendVideoShow', function (data) {
            // console.log('sendVideoShow' + data, data.msg);
            socket.broadcast.emit('sendVideoShow', data);
        });




        /////////////////////////////////


        socket.on('showConnect', function (data) {
            console.log('showConnect' + sendData, data.msg);
            socket.emit('sendConnectMsg', sendData);
        });

        socket.on('sendMsg', function (data) {
            console.log('sendMsg' + data.msg);
            global.cateClick = data.msg;
            socket.emit('sendMsg', data.msg);
        });

        socket.on('sendData', function (data) {
            socket.emit('sendPutData', JSON.stringify(productJson[global.langNum][data.data.split("&&")[0]][data.data.split("&&")[1]]));
        });


    });
};

module.exports = socketio;

