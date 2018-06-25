import React from 'react';
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Main from './Main';
import Question from './Question';
import About from '../route1/About';
import Topic from '../route1/Topic';
import  Home from "./Home";
import  NoMatch from "./NoMatch";

export default class IRouter extends React.Component{
  render(){
    return (
      <Router> 
          <Home>
            <Switch>
            {/* <Route exact={true} path="/" component={Main}/> */}
            <Route path="/main" render={()=>
              <Main>
                  <Route path="/main/:questionId" component={Question}></Route>
              </Main>
            } />
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topic}/>
            <Route component={NoMatch}/>
            </Switch>
          </Home>
      </Router>
    );
  }
}