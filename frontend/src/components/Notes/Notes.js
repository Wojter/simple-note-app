import React from 'react';
import './Notes.css';
import Note from '../Note/Note';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.notes = [
            {
                id: '23232',
                title: 'wykąpać psa',
                body: 'pamiętaja by wykąpać psa'
            },
            {
                id: '2241322',
                title: 'zrobić zakupy',
                body: 'kupić mleko maslo likier'
            }
        ];
    }
    render() {

        return (
            <div>
                <p>Moje notatki:</p>

                {this.notes.map(note => (
                    <Note title={note.title} body={note.body} id={note.id} />
                )
                )}

            </div>
        )

    }
}

export default Notes;