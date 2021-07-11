import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NoteCounter from './NoteCounter';
import Button from '@material-ui/core/Button';

import './NavBar.css';

function NavBar(props) {

    const { noteCounter, addNote } = props;
    return (
        <AppBar position="static">      
            <Toolbar>
                <h2>React Keep</h2>

                <NoteCounter count={noteCounter}  />

                <div className="add-notes-btn">
                    <Button  variant="contained" onClick={addNote} >Add Note</Button>
                </div>

            </Toolbar>

        </AppBar>
    );
}

export default NavBar;