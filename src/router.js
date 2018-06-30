import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Buttons from "./pages/ui/button";
import Admin from "./admin";
import Home from './pages/home';
import NoMatch from './pages/noMatch';

export default class IRouter extends React.Component{

  render(){

    return (
      <Router>
        <App>          
          <Switch>
            <Route exact={true} path ="/login" component={Login} />

            
            {/* <Route path ="/admin" component={Admin} /> */}
            <Route path ="/order/detail" component={Login} />    

            <Route path ="/" render={()=>
              <Admin>
                <Switch>
                  <Route path ="/home" component={Home} />
                  <Route path ="/ui" render={()=>
                      <Switch>
                        <Route path ="/ui/buttons" component={Buttons} />
                        <Route path ="/ui/modals" component={NoMatch} />
                        <Route path ="/ui/loadings" component={NoMatch} />
                        <Route path ="/ui/notification" component={NoMatch} />
                        <Route path ="/ui/tabs" component={NoMatch} />
                        <Route path ="/ui/gallery" component={NoMatch} />
                        <Route path ="/ui/carousel" component={NoMatch} />
                        <Route component={NoMatch} />
                      </Switch>
                  } />
                  <Route path ="/form" render={()=>
                      <Switch>
                        <Route path ="/form/login" component={NoMatch} />
                        <Route path ="/form/reg" component={NoMatch} />
                        <Route component={NoMatch} />
                      </Switch>
                  } />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            } />     
          </Switch>
        </App>
      </Router>
    );
  }


}