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
      <br/>
      <h3>Welcome to my dev-site *slash* website. </h3>
      <br/>
      <p>Yeah, it's a little light on content. Sorry.</p>
      
      <p>Spent ages drawing it  all out and couldnt figure what colours to use, so I cut out all the bits and uploaded them to github. By some magical trickery, that worked, thanks to a tutorial from youTube. </p>
      
      <p> I do  have a few bad puns though...</p>
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

