<template>
    <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from "cesium";
import { onMounted } from "vue";
let viewer,imageryLayers;

onMounted(async()=>{
    initCesium();
    addImageryProvider();
}

);

function initCesium(){
    viewer = new Cesium.Viewer("cesiumContainer", {
        animation: true, //动画小部件
        baseLayerPicker: true, //地图图层组件
        fullscreenButton: true, //全屏组件
        geocoder: true, //地理编码搜索组件
        homeButton: true, //首页组件
        infoBox: true, //信息框
        sceneModePicker: true, //场景模式
        selectionIndicator: true, //选取指示器组件
        timeline: true, //时间轴
        navigationHelpButton: true, //帮助按钮
        navigationInstructionsInitiallyVisible: false, //导航指令初始化可见
    });
    // 隐藏版权信息
    viewer._cesiumWidget._creditContainer.style.display = "none";
    // -----------------------地形数据
    // const terrainProvider = new Cesium.CesiumTerrainProvider({
    //     url:Cesium.IonResource.fromAssetId(3956),
    //     requestWaterMask:true,//请求水体效果所需要的海岸线数据
    //     requestVertexNormals:true,//请求地形照明数据
    // })
    // viewer.terrainProvider=terrainProvider
}
function addImageryProvider(){
    // 去除默认layers
    // imageryLayers.remove(imageryLayers.get(0))
    imageryLayers = viewer.imageryLayers
    var gaoDeImageryProvider = new Cesium.UrlTemplateImageryProvider({
        url: "http://webst02.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8",
        minimumLevel: 3,
        maximumLevel: 18
    })
    var imageryLayer = new Cesium.ImageryLayer(gaoDeImageryProvider);
    imageryLayers.add(imageryLayer)
    // -----------------------------添加图层法一，利用addImageryProvider   
    // imageryLayers.addImageryProvider(gaoDeImageryProvider)
}
function addEntities(){
    viewer.entities.removeAll() //加载之前先清楚所有entity
}
</script>

<style></style>
