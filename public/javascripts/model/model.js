window.onload = init;
window.onresize = render;

let models = JSON.parse(window.sessionStorage.getItem('model'))[0];
console.log(models);

var [w, h] = [window.innerWidth, window.innerHeight];
var [x, y, z, s] = [0, -40, -10, 0.5];
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000); /// 参数 fov：现场 aspect：长宽比  near：近面距离  far：远面距离

var renderer = new THREE.WebGLRenderer({alpha: true}); ///  渲染
// renderer.setSize(w,h);

var light = new THREE.PointLight("rgb(150,150,150)"); //添加光源

function init() {
    rend();
    mtlobjLoad(models.map, models.material, models.models);
    addCanvas();
    addControls();
    addCamera();
    addLight();
    animate();
    render();
}

function rend() {
    renderer.setSize(w, h); //设置渲染器尺寸
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
}

function mtlobjLoad(imgSrc, mtlSrc, objSrc) {
    var mtlloader = new THREE.MTLLoader();
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load(imgSrc);
    mtlloader.load(mtlSrc, function (materials) {
        materials.preload();
        materials.wrapS = true;
        var loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load(objSrc, function (obj) {
            obj.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                    child.material.map = texture; //贴图
                }
            });
            obj.scale.set(s, s, s);
            obj.position.x = x;
            obj.position.y = y;
            obj.position.z = z;
            obj.updateMatrix();
            scene.add(obj);
        })
    })
}

function addCamera() {
    camera.position.set(100, 100, 200); //设置相机位置
    camera.lookAt(new THREE.Vector3(0, 0, 0)); //将相机加入场景中心
}

function render() {
    // console.log(camera)
    renderer.setSize(w, h);
    renderer.render(scene, camera);
}

function addLight() {
    light.position.set(0, 500, 300); //设置光源位置
    light.castShadow = true;
    scene.add(light); //将光源加入场景
    scene.add(new THREE.AmbientLight("rgb(180,180,180)")); //加入环境光
}

function addControls() {
    var controls = new THREE.OrbitControls(camera); //相机控制器
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.addEventListener('change', render); //控制相机，变换角度不断渲染模型
}

function addCanvas() {
    document.getElementById('container').appendChild(renderer.domElement); //将渲染器加入文档中
    renderer.render(scene, camera); //渲染
    render();
}


function animate() {
    requestAnimationFrame(animate); //将动画每一帧渲染一次
    render();
}

let ios = io.connect('http://127.0.0.1:3300');

$('#container').on('mousedown',function(e){
    // console.log(x, y, z,s);
    $('#container').on('mousemove',function () {
        ios.emit('sendMouseDown',{"msg":camera.position});
    })
});

$('#container').on('mouseup',function(e){
    // console.log(x, y, z,s);
    ios.emit('sendMouseUp',{"msg":camera.position});
});
/// 鼠标滚轮事件
$(document).on('mousewheel DOMMouseScroll', onMouseScroll);
function onMouseScroll(e){
    console.log(camera,camera.scale);
    e.preventDefault();
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel) );

    ios.emit('sendScrollModel',{"msg":camera.position});

    if(delta<0){//向下滚动
        console.log('向下滚动');
    }else{//向上滚动
        console.log('向上滚动');
    }
}


