import {useState} from "react";

import { Testimonials, Intro, Works, Portfolio, Contacts, TopBar, Menu } from './components';
import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
    <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu items={[
      {name: "home", link: "intro"},
      {name: "portfolio", link: "portfolio"},
      {name: "works", link: "works"},
      {name: "testimonials", link: "testimonials"},
      {name: "contacts", link: "contacts"},
    ]}
    
    menuOpen={menuOpen}
    setMenuOpen={setMenuOpen}
    />
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
