import { useState, useEffect } from "react";
import { Platform, PermissionsAndroid, Dimensions } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const { width, height } = Dimensions.get("screen");

export function Map() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      console.log(info.coords.latitude);
      console.log(info.coords.longitude);
    }); 
  }, []);

  return (
    <MapView
      onMapReady={() => {
        Platform.OS === "android" ?
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
          .then(() => {
            console.log("User Accepted.");
          }) : '';
      }}
      style={{width: width, height: height}}  
      region={region}
      zoomEnabled={true}
      minZoomLevel={17}
      showsUserLocation={true}
      loadingEnabled={true}
    />
  );
}
