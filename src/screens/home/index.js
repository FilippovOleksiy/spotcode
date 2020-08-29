import React, { useEffect } from "react";
import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";

import { fetchPlaylists } from "../../redux/reducers/playlistsReducer";
import { updatePlaylistId } from "../../redux/reducers/playlistReducer";

const HomeScreen = ({ navigation, fetchPlaylists, list, updatePlaylistId }) => {
  useEffect(() => {
    fetchPlaylists();
  }, []);

  const onPressHandler = (playlistData) => () => {
    updatePlaylistId(playlistData.id);
    navigation.push("Details");
  };
  console.log(list.length);
  return (
    <SafeAreaView>
      <FlatList
        style={styles.container}
        data={list}
        keyExtractor={(playlist) => playlist.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={onPressHandler(item)}>
            <View style={styles.item}>
              <View style={styles.imageContainer}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 30,
                  }}
                  source={{ uri: item.images[0].url }}
                />
              </View>
              <Text style={styles.description}>
                {item.name}
                {item.primary_color}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    display: "flex",
    padding: 10,
    paddingTop: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
  },
  description: {
    marginLeft: 20,
  },
});

const mapStateToProps = (state) => ({
  list: state.playlists.list,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  updatePlaylistId: (id) => dispatch(updatePlaylistId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
