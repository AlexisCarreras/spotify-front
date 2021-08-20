import React, { useEffect, useState } from "react";
import Track from "./Track";
import TrackService from "../../service/TrackService";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fondo: {
        // background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%)',
        // width: '100%',
        // height: '100%',
        // paddingTop: '1.5rem',
        // color: 'white',
    },
});

export default function ArtistProfile({ params }) {
    const classes = useStyles();
    const [track, setTrack] = useState();
    const { id } = params;

    useEffect(function () {
        TrackService(id).then((responseTrack) => setTrack(responseTrack));
    }, [id]);

    return(
        <div>
            {
                track &&
                <div className = {classes.fondo}>
                    {console.log(track)}
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
                            key = {track.key}
                            mode = {track.mode}
                            tempo = {track.tempo}
                            acousticness = {track.acousticness}
                            danceability = {track.danceability}
                            energy = {track.energy}
                            instrumentalness = {track.instrumentalness}
                            liveness = {track.liveness}
                            speechiness = {track.speechiness}
                            valence = {track.valence}
                        />
                    }
                    {/* <h2>key: {track.key}</h2>  */}
                </div> 
            }
        </div>
    );
}