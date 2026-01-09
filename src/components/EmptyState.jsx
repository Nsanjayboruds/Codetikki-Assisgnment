import React from 'react'

function EmptyState() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        fontSize: '4rem',
        marginBottom: '20px',
        opacity: '0.7'
      }}>📝</div>
      <h3 style={{
        color: '#2c3e50',
        fontSize: '1.5rem',
        marginBottom: '12px',
        fontWeight: '600'
      }}>No notes yet</h3>
      <p style={{
        color: '#7f8c8d',
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        Start capturing your thoughts by adding your first note above ✍️
      </p>
    </div>
  );
}

export default EmptyState;
