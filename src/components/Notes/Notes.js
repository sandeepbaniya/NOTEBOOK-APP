import React from 'react';
import axios from 'axios';
import SingleNote from './SingleNote';
import "./Notes.css";


const notes = props => {

    const { allNotes, deleteNote, updateContent, updateTitle } = props;

    return (

        <div className="notes">
            


                {allNotes.map((note, index) =>

                    <SingleNote
                        key={index}
                        {...note}
                        deleteNote={deleteNote}
                        index={index}
                        updateContent={updateContent}
                        updateTitle={updateTitle}


                    />

                )}
          





        </div>
    )
}

export default notes;