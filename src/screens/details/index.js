import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";

import { fetchPlaylistInfo } from "../../redux/reducers/playlistReducer";

import HeaderComponent from "../../components/HeaderComponent";
import TrackComponent from "../../components/TrackComponent";

const DetailsScreen = ({ playlistId, info, fetchPlaylistInfo }) => {
  useEffect(() => {
    fetchPlaylistInfo(playlistId);
  }, [playlistId]);

  return (
    <SafeAreaView>
      {Object.keys(info).length !== 0 && (
        <FlatList
          style={styles.container}
          data={[{}, ...info.tracks.items]}
          keyExtractor={(item, index) => {
            let key = index;
            if (item.track) {
              key = `${key}${item.track.album.artists[0].id}`;
            }
            return key.toString();
          }}
          renderItem={({ item }) => {
            let renderComponent = <HeaderComponent info={info} />;
            if (item.track) {
              renderComponent = <TrackComponent item={item} />;
            }
            return renderComponent;
          }}
        ></FlatList>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
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

const mapStateToProps = (state) => ({
  playlistId: state.playlist.id,
  info: state.playlist.playlist,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaylistInfo: (id) => dispatch(fetchPlaylistInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
