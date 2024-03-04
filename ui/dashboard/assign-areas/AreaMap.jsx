"use client";
import { convertToGeoJSON } from "@/helper/utilityFunctions";
import React, { useState } from "react";
import Map, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  GeolocateControl,
} from "react-map-gl";
import HoverCard from "./HoverCard";

const AreaMap = ({ profilseData }) => {
  const [popupInfo, setPopupInfo] = useState(null);
  const newGeoJson = convertToGeoJSON(profilseData);

  const mouseEnterHandler = (event) => {
    if (event.features.length > 0) {
      const feature = event.features[0];
      const { lngLat } = event;
      const { lat, lng } = lngLat;
      const { name, areaName } = feature.properties;
      setPopupInfo({
        name,
        areaName,
        lat,
        lng,
      });
    }
  };
  return (
    <Map
      mapboxAccessToken="pk.eyJ1Ijoic2hhamphcjk5IiwiYSI6ImNsdDdjcWc1dDBscmgybW1zcW9uc2todXgifQ.eRSbnQ9C5g3FxpZ2NEviRA"
      initialViewState={{
        longitude: "73.0288",
        latitude: "33.7156",
        zoom: 3,
      }}
      style={{ width: "100%", height: "700px" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onMouseEnter={mouseEnterHandler}
      interactiveLayerIds={["data"]}
      projection="globe"
      fog={{
        "space-color": "#000000",
        "star-intensity": 1,
      }}
    >
      <Source type="geojson" data={newGeoJson}>
        <Layer
          {...{
            id: "data",
            type: "fill",
            paint: {
              "fill-color": "#42A554",
              "fill-opacity": 0.5,
            },
          }}
        />
      </Source>
      <NavigationControl />
      <GeolocateControl />
      {popupInfo && (
        <Popup
          longitude={popupInfo?.lng}
          latitude={popupInfo?.lat}
          onClose={() => setPopupInfo(null)}
        >
          <HoverCard name={popupInfo?.name} areaName={popupInfo?.areaName} />
        </Popup>
      )}
    </Map>
  );
};

export default AreaMap;
