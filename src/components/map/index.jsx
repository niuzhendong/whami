import React from 'react';
import * as Cesium from 'cesium/Cesium';
import "cesium/Widgets/widgets.css";
import './map.css'

class Maxbox extends React.Component {
    static defaultProps = {
        key : "pk.eyJ1IjoiaG91YmlhbyIsImEiOiJjajdnNjVicDYxNHAzMndvMmI4NGgzaTZrIn0.ZvpHO1bVunIhgsBq_nVYFQ"
    }

    componentDidMount(){
        Cesium.Ion.defaultAccessToken = this.props.key;
        var viewer = new Cesium.Viewer('cesiumContainer',{
            terrainProvider : new Cesium.CesiumTerrainProvider({
                url : 'https://assets.agi.com/stk-terrain/world/tiles',
                requestVertexNormals : true
            })
        });
        
    }

    render() {
        return (
            <div id="cesiumContainer" className="map"></div>
        );
    }
}

export default Maxbox;