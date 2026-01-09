# 📝 Notes App

A modern, user-friendly notes application built with React and Vite. Capture your thoughts, organize your life with a clean and intuitive interface featuring real-time form validation, smooth animations, and thoughtful UX states.

## 🚀 How to Run

**Prerequisites:** Node.js v16 or higher

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧩 Component Breakdown

- **App.jsx**: Main container component managing application state, handles note creation/deletion, and orchestrates data flow to child components
- **NoteForm.jsx**: Form component for adding new notes with title (required) and description (optional) fields, includes real-time validation feedback
- **NoteList.jsx**: Container component that displays all notes with a count badge and passes individual notes to NoteItem
- **NoteItem.jsx**: Individual note card component displaying title and description with a delete button and hover effects
- **EmptyState.jsx**: User-friendly message displayed when no notes exist, encouraging users to create their first note
- **Loader.jsx**: Animated loading indicator shown during initial data fetch with bouncing dots and pulsing icon

## 💾 State Management

- **notes**: Array stored in App.jsx, holds all note objects (id, title, description)
- **loading**: Boolean in App.jsx to manage initial load state (1-2 second simulated API call)
- **title/description/error**: Local form state in NoteForm.jsx for managing input and validation

**Data Flow**: App → NoteForm/NoteList → NoteItem (unidirectional, callbacks passed down)

## ⚙️ Assumptions & Limitations

- **Local state only**: Notes are stored in React state and reset on page refresh (no persistence layer)
- **Simulated loading**: Uses setTimeout instead of real API calls
- **Simple IDs**: Uses `Date.now()` for note IDs (works for demo, not production-ready)
- **No edit functionality**: Users can only add and delete notes, not modify existing ones
- **No search/filter**: All notes display in order of creation
- **No TypeScript**: Built with JavaScript for simplicity
- **Styling via inline styles**: No external CSS library or CSS modules used (easy to migrate)
