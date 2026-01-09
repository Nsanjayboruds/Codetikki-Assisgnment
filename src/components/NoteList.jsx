import React from 'react'
import NoteItem from './NoteItem.jsx';

function NoteList({ notes, onDelete }) {
  return (
    <div>
      <h2 style={{
        fontSize: '1.8rem',
        color: '#2c3e50',
        marginBottom: '24px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span>📚</span>
        <span>Your Notes</span>
        <span style={{
          fontSize: '1rem',
          fontWeight: '400',
          color: '#7f8c8d',
          backgroundColor: '#ecf0f1',
          padding: '4px 12px',
          borderRadius: '12px'
        }}>{notes.length}</span>
      </h2>

      <div>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList
