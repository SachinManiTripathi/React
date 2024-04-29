import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import thirdpage from './Components/thirdpage';
import secondpage from './Components/secondpage';
import firstpage from './Components/firstpage';
import NoteState from './Context/notes/noteState';

function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/home' Component={Homepage} />
          <Route path='/first' Component={firstpage} />
          <Route path='/second' Component={secondpage} />
          <Route path='/third' Component={thirdpage} />
        </Routes>
      </Router>
      </NoteState>
  

    </div>
  );
}

export default App;
