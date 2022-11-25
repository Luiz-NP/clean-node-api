import { View, StyleSheet, Platform, PermissionsAndroid, Dimensions } from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("screen");

export const Map = () => {
    return (
      <View style={styles.container}>
        <MapView
          style={{width: width, height: height}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
})