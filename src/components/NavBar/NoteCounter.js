import React from 'react';
import Badge from '@material-ui/core/Badge';

import './NoteCounter.css';

function NoteCounter(props) {
    
    return (
        <div className="note-counter">
            <Badge color="secondary" badgeContent={props.count}
            />
        </div>
        
    );
}

export default NoteCounter;