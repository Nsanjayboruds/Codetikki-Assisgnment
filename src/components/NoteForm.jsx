import { useState } from "react";

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAddNote({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      marginBottom: '30px'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="📌 Note Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
          style={{
            width: '100%',
            padding: '14px 18px',
            fontSize: '1rem',
            border: error ? '2px solid #e74c3c' : '2px solid #e0e6ed',
            borderRadius: '8px',
            outline: 'none',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = '#3498db'}
          onBlur={(e) => e.target.style.borderColor = error ? '#e74c3c' : '#e0e6ed'}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <textarea
          placeholder="✍️ Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          style={{
            width: '100%',
            padding: '14px 18px',
            fontSize: '1rem',
            border: '2px solid #e0e6ed',
            borderRadius: '8px',
            outline: 'none',
            resize: 'vertical',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxSizing: 'border-box'
          }}
          onFocus={(e) => e.target.style.borderColor = '#3498db'}
          onBlur={(e) => e.target.style.borderColor = '#e0e6ed'}
        />
      </div>
      
      {error && (
        <div style={{
          backgroundColor: '#fee',
          color: '#e74c3c',
          padding: '12px 16px',
          borderRadius: '8px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.95rem'
        }}>
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}
      
      <button 
        type="submit"
        disabled={!title.trim()}
        style={{
          width: '100%',
          padding: '14px 24px',
          fontSize: '1rem',
          fontWeight: '600',
          color: !title.trim() ? '#bdc3c7' : '#ffffff',
          backgroundColor: !title.trim() ? '#ecf0f1' : '#3498db',
          border: 'none',
          borderRadius: '8px',
          cursor: !title.trim() ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: !title.trim() ? 'none' : '0 2px 4px rgba(52, 152, 219, 0.3)'
        }}
        onMouseEnter={(e) => {
          if (!title.trim()) return;
          e.target.style.backgroundColor = '#2980b9';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 4px 8px rgba(52, 152, 219, 0.4)';
        }}
        onMouseLeave={(e) => {
          if (!title.trim()) return;
          e.target.style.backgroundColor = '#3498db';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 2px 4px rgba(52, 152, 219, 0.3)';
        }}
      >
        ➕ Add Note
      </button>
    </form>
  );
}

export default NoteForm;
