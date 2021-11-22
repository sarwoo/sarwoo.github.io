import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

// import some data
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      <p>Welcome to my dev-site /slash/ website. </p>
      {notes.map(note => (
        <Note
          title={note.title}
          content={note.content}
          key={note.key}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
