
/*  客户端socket js */

class socketIo {
    constructor() {
        var addr = 'http://127.0.0.1:3300';
        this.socket = io.connect(addr);
    }
    sendClick(str) {
        console.log(str);
        this.socket.emit('sendClick', {"msg": str});
    }
    sendChangeLang(str) {
        console.log(str);
        this.socket.emit('sendChangeLang', {"lang": str});
    }

    sendOneMsg(str) {
        console.log(str);
        this.socket.emit('sendOneMsg', {"msg": str});
    }

    sendRouterMsg(str) {
        console.log(str);
        this.socket.emit('sendRouterMsg', {"router": str});
    }
    sendIframeSrc(str) {
        // console.log(str);
        this.socket.emit('sendIframeSrc', {"Src": str});
        /*this.socket.on('sendIframeSrc',function(data){
            console.log(data,data.Src);
            $('#iframes').attr('src', data.Src);
        })*/
    }

    sendMsg(str){
        this.socket.emit('sendMsg', {"msg": str});
    }

    sendData(str){
        console.log(str);
        this.socket.emit('sendData', {"data": str});
        this.socket.on('sendPutData',function (data) {
            console.log(data);
            window.sessionStorage.setItem("productData",data);
        })
    }
}
