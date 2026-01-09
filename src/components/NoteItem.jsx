import React from 'react'

function NoteItem({ note, onDelete }) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e0e6ed',
        borderLeft: '4px solid #3498db',
        padding: '20px',
        marginBottom: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <h3 style={{
        margin: '0 0 12px 0',
        color: '#2c3e50',
        fontSize: '1.3rem',
        fontWeight: '600'
      }}>{note.title}</h3>
      
      {note.description && (
        <p style={{
          margin: '0 0 16px 0',
          color: '#5a6c7d',
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>{note.description}</p>
      )}

      <button 
        onClick={() => onDelete(note.id)}
        style={{
          padding: '8px 16px',
          fontSize: '0.9rem',
          fontWeight: '500',
          color: '#e74c3c',
          backgroundColor: '#fee',
          border: '1px solid #e74c3c',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e74c3c';
          e.target.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#fee';
          e.target.style.color = '#e74c3c';
        }}
      >
        🗑️ Delete
      </button>
    </div>
  );
}

export default NoteItem;
