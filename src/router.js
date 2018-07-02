import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Buttons from "./pages/ui/button";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notices from "./pages/ui/notices";
import Messages from "./pages/ui/messages";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousel from "./pages/ui/carousel";
import FormLogin from "./pages/form/login";
import RegisterForm from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import DynamicTable from "./pages/table/dynamicTable";
import HighTable from "./pages/table/highTable";
import City from "./pages/city";
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
                        <Route path ="/ui/modals" component={Modals} />
                        <Route path ="/ui/loadings" component={Loadings} />
                        <Route path ="/ui/notification" component={Notices} />
                        <Route path ="/ui/messages" component={Messages} />
                        <Route path ="/ui/tabs" component={Tabs} />
                        <Route path ="/ui/gallery" component={Gallery} />
                        <Route path ="/ui/carousel" component={Carousel} />
                        <Route component={NoMatch} />
                      </Switch>
                  } />
                  <Route path ="/form" render={()=>
                      <Switch>
                        <Route path ="/form/login" component={FormLogin} />
                        <Route path ="/form/reg" component={RegisterForm} />
                        <Route component={NoMatch} />
                      </Switch>
                  } />
                  <Route path ="/table" render={()=>
                      <Switch>
                        <Route path ="/table/basic" component={BasicTable} />
                        <Route path ="/table/dynamic" component={DynamicTable} />
                        <Route path ="/table/high" component={HighTable} />
                        <Route component={NoMatch} />
                      </Switch>
                  } />
                  <Route path ="/city" component={City}/>
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