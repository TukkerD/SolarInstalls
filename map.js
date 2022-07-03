require([
    "esri/views/MapView",
    "esri/Map",
    "esri/Graphic",
    "esri/geometry/Point"
  ], function(MapView, Map, Graphic,Point) {
    const polygon = {
      type: "polygon", // autocasts as new Polygon()
      rings: [
        [-111.04, 42.00],
        [-123.47, 42.22],
        [-123.33, 44.10],
        [-117.19, 44.55],
        [-111.63, 43.99],
        [-111.04, 42.00]
      ]
    };
    // Set up initial graphics
    const gradientLineSymbol = {
      type: "cim",
      data: {
        type: "CIMSymbolReference",
        symbol: {
          "type": "CIMPolygonSymbol",
          "symbolLayers": [{
            "type": "CIMPictureStroke",
            "enable": true,
            "capStyle": "Butt",
            "joinStyle": "Round",
            "width": 20,
            "textureFilter": "Picture",
            "url": "https://nation.maps.arcgis.com/sharing/rest/content/items/864a8e98113c4ea3b5316f8aa8c58149/data",
            "textureFilter": "Text",
            "tintColor": [255, 255, 255, 150]
          }]
        }
      }
    };
    const map = new Map({
      basemap: "streets-navigation-vector",
    });
    const view = new MapView({
      center: [-116,44],
      container: "viewDiv",
      map: map,
      zoom: 5
    });

    // BOise Idaho Marker
    var Boise_marker = {
        type: "simple-marker",
        style: "diamond",
        color: 'orange'
    };
    var Boise_location = {
        type: "point",
        longitude: -116.20,
        latitude: 43.59
    };
    var popup_template = {
        title: "Install",
        content: "<b>Location</b>: Boise, ID"
    }
    const Boise_graphic = new Graphic({
        geometry: Boise_location,
        symbol: Boise_marker,
        popupTemplate: popup_template
    });


    //Eugene Oregon Marker
    var Eugene_marker = {
        type: "simple-marker",
        style: "diamond",
        color: 'orange'
    };
    var Eugene_location = {
        type: "point",
        longitude: -123.09,
        latitude: 44.05
    };
    var popup_template = {
        title: "Install",
        content: "<b>Location</b>: Eugene, OR"
    }
    const Eugene_graphic = new Graphic({
        geometry: Eugene_location,
        symbol: Eugene_marker,
        popupTemplate: popup_template
    });


    //Bend Oregon Marker
    var Bend_Marker = {
        type: "simple-marker",
        style: "diamond",
        color: 'orange'
    };
    var Bend_location = {
        type: "point",
        longitude: -121.30,
        latitude: 44.04
    };
    var popup_template = {
        title: "Install",
        content: "<b>Location</b>: Bend, OR"
    }
    const Bend_graphic = new Graphic({
        geometry: Bend_location,
        symbol: Bend_Marker,
        popupTemplate: popup_template
    });


    //Grants Pass Marker
    var Grants_marker = {
        type: "simple-marker",
        style: "diamond",
        color: 'orange'
    };
    var Grants_location = {
        type: "point",
        longitude: -123.32,
        latitude: 42.43
    };
    var popup_template = {
        title: "Install",
        content: "<b>Location</b>: Grants Pass, OR"
    }
    const Grants_graphic = new Graphic({
        geometry: Grants_location,
        symbol: Grants_marker,
        popupTemplate: popup_template
    });


//Medford Marker
var Medford_marker = {
    type: "simple-marker",
    style: "diamond",
    color: 'orange'
};
var Medford_location = {
    type: "point",
    longitude: -122.87,
    latitude: 42.31
};
var popup_template = {
    title: "Install",
    content: "<b>Location</b>: Medford, OR"
}
const Medford_graphic = new Graphic({
    geometry: Medford_location,
    symbol: Medford_marker,
    popupTemplate: popup_template
});


//Klamath Marker
var Klamath_marker = {
    type: "simple-marker",
    style: "diamond",
    color: 'orange'
};
var Klamath_location = {
    type: "point",
    longitude: -121.77,
    latitude: 42.20
};
var popup_template = {
    title: "Install",
    content: "<b>Location</b>: Klamath Falls, OR"
}
const Klamath_graphic = new Graphic({
    geometry: Klamath_location,
    symbol: Klamath_marker,
    popupTemplate: popup_template
});


//Ontario Marker
var Ontario_marker = {
    type: "simple-marker",
    style: "diamond",
    color: 'orange'
};
var Ontario_location = {
    type: "point",
    longitude: -116.96,
    latitude: 44.02
};
var popup_template = {
    title: "Install",
    content: "<b>Location</b>: Ontario, OR"
}
const Ontario_graphic = new Graphic({
    geometry: Ontario_location,
    symbol: Ontario_marker,
    popupTemplate: popup_template
});


//Rexburg Marker
var Rexburg_marker = {
    type: "simple-marker",
    style: "diamond",
    color: 'orange'
};
var Rexburg_location = {
    type: "point",
    longitude: -111.79,
    latitude: 43.81
};
var popup_template = {
    title: "Install",
    content: "<b>Location</b>: Rexburg, ID"
}
const Rexburg_graphic = new Graphic({
    geometry: Rexburg_location,
    symbol: Rexburg_marker,
    popupTemplate: popup_template
});


//Idaho Falls Marker
var IF_marker = {
    type: "simple-marker",
    style: "diamond",
    color: 'orange'
};
var IF_location = {
    type: "point",
    longitude: -112.04,
    latitude: 43.47
};
var popup_template = {
    title: "Install",
    content: "<b>Location</b>: Idaho Falls, ID"
}
const IF_graphic = new Graphic({
    geometry: IF_location,
    symbol: IF_marker,
    popupTemplate: popup_template
});



//Pocatello Marker
var Poca_marker = {
    type: "simple-marker",
    style: "diamond",
    color: 'orange'
};
var Poca_location = {
    type: "point",
    longitude: -112.45,
    latitude: 42.85
};
var popup_template = {
    title: "Install",
    content: "<b>Location</b>: Pocatello, ID"
}
const Poca_graphic = new Graphic({
    geometry: Poca_location,
    symbol: Poca_marker,
    popupTemplate: popup_template
});

//Twin Falls Marker
var Twin_marker = {
    type: "simple-marker",
    style: "diamond",
    color: 'orange'
};
var Twin_location = {
    type: "point",
    longitude: -114.48,
    latitude: 42.54
};
var popup_template = {
    title: "Install",
    content: "<b>Location</b>: Twin Falls, ID"
}
const Twin_graphic = new Graphic({
    geometry: Twin_location,
    symbol: Twin_marker,
    popupTemplate: popup_template
});

    // Add the geometry and symbol to a new graphic
    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: gradientLineSymbol
    });
    // Add the graphics to the view's graphics layer
    view.graphics.addMany([polygonGraphic]);
    view.graphics.addMany([Boise_graphic]);
    view.graphics.addMany([Eugene_graphic]);
    view.graphics.addMany([Bend_graphic]);
    view.graphics.addMany([Grants_graphic]);
    view.graphics.addMany([Medford_graphic]);
    view.graphics.addMany([Klamath_graphic]);
    view.graphics.addMany([Ontario_graphic]);
    view.graphics.addMany([Rexburg_graphic]);
    view.graphics.addMany([IF_graphic]);
    view.graphics.addMany([Poca_graphic]);
    view.graphics.addMany([Twin_graphic]);







  });