import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";
import StyledPlaylist from '../styles/StyledPlaylist'

const Playlist = props => (
  <StyledPlaylist>
    <Nightmode />
    <PlaylistHeader />
    <PlaylistItems />
  </StyledPlaylist>
);

export default Playlist;
