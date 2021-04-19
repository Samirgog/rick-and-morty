import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Home} from "./containers/Home/Home"
import {Navbar} from "./components/Navbar/Navbar"
import {Episode} from "./components/Episode/Episode"
import './App.css'
import {CharactersPage} from "./containers/CharactersPage/CharactersPage"
import {Locations} from "./containers/Locations/Locations"
import {Location} from "./components/Location/Location"


function App() {
  return (
        <>
          <Navbar/>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/episode/:id" component={Episode}/>
              <Route path="/characters" component={CharactersPage}/>
              <Route path="/locations" component={Locations}/>
              <Route path="/location/:id" component={Location}/>
          </Switch>
        </>
  );
}

export default App;
