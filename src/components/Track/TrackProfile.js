import React, { useEffect, useState } from "react";
import Track from "./Track";
import TrackService from "../../service/TrackService";
import TrackFeaturesServices from "../../service/TrackFeaturesServices";
import { useParams } from "react-router-dom";

export default function ArtistProfile() {
    let { id } = useParams();

    const [track, setTrack] = useState();
    const [trackFeatures, setTrackFeatures] = useState();
    
    useEffect(function () {
        TrackService(id).then((responseTrack) => setTrack(responseTrack));
    }, [id]);

    useEffect(function () {
        TrackFeaturesServices(id).then((responseTrack) => setTrackFeatures(responseTrack));
    }, [id]);

    return(
        <div>
            {
                track && trackFeatures &&
                <div>
                    {
                        <Track 
                            id = {track.id}
                            type = {track.type}
                            name = {track.name}
                            albumName = {track.albumName}
                            artistName = {track.artistName}
                            image = {track.image}
                            previewUrl = {track.previewUrl}
                            trackLength = {track.trackLength}
                            favorite = {track.favorite}

                            nota = {trackFeatures.key}
                            mode = {trackFeatures.mode}
                            tempo = {trackFeatures.tempo}
                            acousticness = {trackFeatures.acousticness}
                            danceability = {trackFeatures.danceability}
                            energy = {trackFeatures.energy}
                            instrumentalness = {trackFeatures.instrumentalness}
                            liveness = {trackFeatures.liveness}
                            speechiness = {trackFeatures.speechiness}
                            valence = {trackFeatures.valence}
                        />
                    } 
                </div> 
            }
        </div>
    );
}