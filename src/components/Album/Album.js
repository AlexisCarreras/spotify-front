import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


}));



export default function Album({ id, name, image, type, totalTracks, albumArtist, tracks }) {
    return (
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{image}</h3>
            <h3>{type}</h3>
            <h3>{totalTracks}</h3>
            <h3>{albumArtist}</h3>

            {<ul>
                {tracks.map((a) => <li>{a.name}</li>)}
            </ul>}
        </div>
    )
}