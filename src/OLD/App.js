import React from 'react';
import './App.css';
import Navbar from './OLD/Components/Navbar'
import Booklist from './OLD/Components/Booklist'
import Themecontextprovider from './OLD/Context/Themecontext'
import Authcontextprovider from './OLD/Context/Authcontext'
import Addbookcontextprovider from './OLD/Context/Addbookcontext'
// import Songs from './hooks/Songs.js'



function App() {
  return (
    <div className="App">

      {/* <Songs /> */}
      <Themecontextprovider>
        <Authcontextprovider>

          <Navbar />
          <Addbookcontextprovider>
            <Booklist />
          </Addbookcontextprovider>

        </Authcontextprovider>
      </Themecontextprovider>

    </div>
  );
}

export default App;
