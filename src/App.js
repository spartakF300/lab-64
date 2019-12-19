import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "./container/Home/Home";
import Add from "./container/Add/Add";
import Edit from "./container/Edit/Edit";
import Contact from "./container/Contact/Contact";
import Post from "./container/Post/Post";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={Edit}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/Post/:id" component={Post}/>
                        <Route path="/contact" component={Contact}/>
                </Switch>
            </BrowserRouter>
        </div>
);
}

export default App;
