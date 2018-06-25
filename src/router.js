import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Button from "./pages/ui/button";
import Admin from "./admin";
import Home from './pages/home';
import NoMatch from './pages/noMatch';

export default class IRouter extends React.Component{

  render(){

    return (
      <Router>
        <App>
          <Route path ="/login" component={Login} />
          {/* <Route path ="/admin" component={Admin} /> */}
          <Route path ="/home" render={()=>
            <Admin>
              <Switch>
                <Route exact path ="/home" component={Home} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
          <Route path ="/ui" render={()=>
            <Admin>
              <Switch>
                <Route path ="/ui/buttons" component={Button} />
                <Route component={NoMatch} />
              </Switch>
            </Admin>
          } />
          <Route path ="/order/detail" component={Login} />
        </App>
      </Router>
    );
  }


}