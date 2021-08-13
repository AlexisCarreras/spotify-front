import React, { useEffect, useState } from "react";
import ArtistService from "../../service/ArtistService";
import Artist from "./Artist";

export default function ArtistProfile({params}) {
  const [artist, setArtist] = useState();
  const { id } = params;

  useEffect(function () {
      
    ArtistService(id).then((responseArtist) => setArtist(responseArtist));
    //console.log(artist);
  }, [id]);

  return (
    <div>
      {
        artist &&
          <div>
            {console.log(artist)}
            <h3>{artist.id}</h3>
            <h3>{artist.name}</h3>
            <h3>{artist.image}</h3>
            <h3>{artist.type}</h3>
            <h3>{artist.popularity}</h3>
            <h3>{artist.topTracks.map((a) => a.name)}</h3>
            <h3>{artist.albums.map((a) => a.name)}</h3>
            <h3>{artist.albums.map((a) => a.image)}</h3>
          </div>
      }
    </div>
  );
}