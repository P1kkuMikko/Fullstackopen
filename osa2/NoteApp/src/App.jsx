import Note from './components/Note.jsx';
import { useState, useEffect } from 'react';
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote('');
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const toggleImportanceOf = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    })
      .catch(error => {
        alert(`the note '${note.content}' was already deleted from the server`);
        setNotes(notes.filter(n => n.id !== id));
      });
  };

  const deleteNoteById = (id) => {
    const noteToDelete = notes.find((n) => n.id === id);
    const confirm = window.confirm(
      `Do you really want to delete a note "${noteToDelete.content}"`
    );
    if (confirm) {
      noteService.remove(id).then
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
            deleteNote={() => {
              deleteNoteById(note.id);
            }}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type='text' value={newNote} onChange={handleNoteChange} />
        <button type='submit'>add note</button>
      </form>
    </div>
  );
};

export default App;
