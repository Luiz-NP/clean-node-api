import { Platform, PermissionsAndroid, Dimensions } from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("screen");

export function Map() {
  return (
    <MapView 
      style={{width: width, height: height}}  
    />
  );
}
