import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const TrackComponent = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemImageContainer}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 100,
          }}
          resizeMode="center"
          source={{ uri: item.track.album.images[0].url }}
        />
      </View>
      <Text>{item.track.album.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  itemImageContainer: {
    width: 60,
    height: 60,
    marginEnd: 10,
  },
});

export default TrackComponent;
