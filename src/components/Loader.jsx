import React from 'react'

function Loader() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '30px'
      }}>
        <div style={{
          width: '16px',
          height: '16px',
          backgroundColor: '#3498db',
          borderRadius: '50%',
          animation: 'bounce 1.4s ease-in-out infinite'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          backgroundColor: '#2ecc71',
          borderRadius: '50%',
          animation: 'bounce 1.4s ease-in-out 0.2s infinite'
        }}></div>
        <div style={{
          width: '16px',
          height: '16px',
          backgroundColor: '#f39c12',
          borderRadius: '50%',
          animation: 'bounce 1.4s ease-in-out 0.4s infinite'
        }}></div>
      </div>

      <div style={{
        fontSize: '3rem',
        marginBottom: '20px',
        animation: 'pulse 2s ease-in-out infinite'
      }}>📝</div>

      <p style={{
        color: '#2c3e50',
        fontSize: '1.2rem',
        fontWeight: '500',
        marginBottom: '8px'
      }}>Loading your notes</p>
      
      <p style={{
        color: '#95a5a6',
        fontSize: '0.95rem'
      }}>Just a moment...</p>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: scale(0);
            opacity: 0.5;
          }
          40% { 
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Loader;
