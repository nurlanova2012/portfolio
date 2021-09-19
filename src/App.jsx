import {useState} from "react";

import { Testimonials, Intro, Works, Portfolio, Contacts, TopBar } from './components';
import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
    <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

    <div className="app__sections">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Testimonials/>
    <Contacts/>


    </div>
    </div>
  );
}

export default App;
