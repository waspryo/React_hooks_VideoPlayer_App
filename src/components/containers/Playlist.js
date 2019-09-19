import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";

const Playlist = props => (
  <>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </>
);

export default Playlist;
