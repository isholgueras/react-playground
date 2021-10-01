import React from 'react'
import {Route, Switch} from 'react-router-dom';

import './App.css'
import routes from './routes';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <h1>My app</h1>
      <Navbar />

      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props} {...rest} />
            )} />
        ))}
        <Route render={(props) => <NotFound {...props} /> } />
      </Switch>
    </div>
  )
}

export default App
