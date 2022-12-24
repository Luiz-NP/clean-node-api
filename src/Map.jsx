import { View, StyleSheet, Platform, PermissionsAndroid, Dimensions } from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("screen");

export const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);

    return (
      <View style={styles.container}>
        <MapView
          onMapReady={() => {
            if (Platform.OS === "android") {
              PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
                .then(() => console.log("User Accepted."))
                .catch(err => console.log(err));
            }
          }}
          style={{width: width, height: height}}
          region={currentPosition}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});
