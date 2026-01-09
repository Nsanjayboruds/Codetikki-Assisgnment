import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const addNote = (note) => {
    setNotes((prev) => [...prev, note]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '20px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#2c3e50',
            marginBottom: '10px',
            fontWeight: '700'
          }}>📝 Notes App</h1>
          <p style={{
            color: '#7f8c8d',
            fontSize: '1.1rem'
          }}>Capture your thoughts, organize your life</p>
        </header>

        <NoteForm onAddNote={addNote} />

        {loading && <Loader />}

        {!loading && notes.length === 0 && <EmptyState />}

        {!loading && notes.length > 0 && (
          <NoteList notes={notes} onDelete={deleteNote} />
        )}
      </div>
    </div>
  );
}

export default App;
