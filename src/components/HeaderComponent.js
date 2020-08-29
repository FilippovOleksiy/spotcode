import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const HeaderComponent = ({ info }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="center"
          source={{ uri: info.images[0].url }}
        />
      </View>
      <Text style={styles.title}>Playlist</Text>
      <Text style={styles.name}>{info.name}</Text>
      <Text style={styles.description}>{info.description}</Text>
      <Text style={styles.statics}>
        {info.owner.display_name} - {info.followers.total} likes -{" "}
        {info.tracks.items.length} tracks
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textTransform: "uppercase",
  },
  name: {
    fontSize: 40,
  },
  statics: {
    marginTop: 5,
  },
  description: {
    marginTop: 5,
  },
  imageContainer: {
    height: 250,
  },
});

export default HeaderComponent;
