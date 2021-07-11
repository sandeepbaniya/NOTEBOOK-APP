import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import './SingleNote.css';
import ContentEditable from 'react-contenteditable';

const singleNote = props => {

    const { title, content, index, deleteNote, updateContent, updateTitle } = props;

    return (
        <div className="single-note">

            <Card className="card-container">

                
                    <ContentEditable

                        className={"note__title"}
                        html= {title}
                        onChange={event => updateTitle(index, event)}

                    />

              
                <CardContent>

                    

                    <ContentEditable

                        className={"note__content"}
                        html={content}
                        onChange={event => updateContent(index, event)}

                    />

                    

                </CardContent>


                <IconButton aria-label="delete" onClick={() => deleteNote(index)}>
                    <DeleteIcon fontSize="small" />

                </IconButton>

            </Card>


        </div>

    );
}

export default singleNote;