import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link, useLocation } from "wouter";
import { useState } from "react"

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    container: {

    },
    sectionSearch: {
        display: 'flex',
    },
    input: {
        marginTop: '5rem',
        paddingRight: '5rem',
        paddingLeft: '1rem',
        backgroundColor: 'white',
        borderRadius: '3rem',
    },
    button: {
        marginTop: '5rem',
        marginLeft: '0.5rem',
        color: 'white',
        backgroundColor: '#F50057',
        '&:hover': {
            backgroundColor: '#C51162',
        }
    },
    divRadio: {
        marginTop: '0.5rem'
    },
    radio: {
        color: 'white',
    },
    radio1: {
        color: 'white',
        position: 'absolute',
        marginLeft: '0.5rem'
    },
    radio2: {
        color: 'white',
        position: 'absolute',
        marginLeft: '9rem'
    },
    radio3: {
        color: 'white',
        position: 'absolute',
        marginLeft: '17.5rem'
    }
});

const SearchHome = () => {
    const classes = useStyle();

    const [keyword, setKeyword] = useState('')
    const [value, setValue] = useState('artist')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/${value}/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    const handleRadioChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <div className={classes.root}>
            <section className={classes.container}>
            <form onSubmit = {handleSubmit}> 
                <div className={classes.sectionSearch}>
                    <InputBase
                        className={classes.input}
                        onChange = {handleChange}
                        type = "text"
                        value = {keyword}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'naked' }}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                    <IconButton type = "submit" className={classes.button} aria-label="send">
                        <SendIcon />
                    </IconButton>
                </div> 
                <div className={classes.divRadio}>
                    <RadioGroup row aria-label="position" name="position" defaultValue="artist" value = {value} onChange = {handleRadioChange}>
                        <article className={classes.radio1}>
                            <FormControlLabel
                                value="artist"
                                control={<Radio className={classes.radio}/>}
                                label="Artist"
                            />
                        </article>
                        <article className={classes.radio2}>
                            <FormControlLabel
                                value="album"
                                control={<Radio className={classes.radio}/>}
                                label="Album"
                            />
                        </article>
                        <article className={classes.radio3}>
                            <FormControlLabel
                                value="track"
                                control={<Radio className={classes.radio}/>}
                                label="Track"
                            />
                        </article>
                    </RadioGroup>
                </div>
            </form>
            </section>

        </div>
    );
}

export default SearchHome;