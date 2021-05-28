import React from 'react';
import img from '../img/fondo.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: '92.6%',
        position: 'absolute', 
    },
    input: {
        position: 'absolute',
        marginTop: '8rem',
        paddingTop: '1.2rem',
        paddingRight: '14rem',
        paddingBottom: '1.2rem',
        paddingLeft: '1rem',
        borderRadius: '3rem',
        outline: 'none',
        border: 'none'

    }
});

const Home = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <img src={img} className={classes.img} alt="fondo" />
            <input 
                className={classes.input} 
                type="text" 
                placeholder="Buscar..."
                startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                }
            > 
            </input>
        </div>
    );
}

export default Home;