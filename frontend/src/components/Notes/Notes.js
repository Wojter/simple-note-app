import React from 'react';
import './Notes.css';
import Note from '../Note/Note';
import NewNote from '../NewNote/NewNote';

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes : [
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
        ]
        };

    }

    deleteNote(id) {
        console.log('usuwanie notatnik: ' + id);
        const notes = [...this.state.notes]
        .filter(note => note.id !== id)
        this.setState({ notes });

    }

    addNote(note) {
        const notes = [...this.state.notes];
        notes.push(note);
        this.setState({ notes });

    }

    render() {
        return (
            <div>
                <p>Moje notatki:</p>

                <NewNote 
                onAdd={(note) => this.addNote(note)}/>

                {this.state.notes.map(note => (
                    <Note
                        key = {note.id}
                        title={note.title}
                        body={note.body}
                        id={note.id} 
                        onDelete={(id)=>this.deleteNote(id)}/>
                )
                )}
            </div>
        )
    }
}

export default Notes;