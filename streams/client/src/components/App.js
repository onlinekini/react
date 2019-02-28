import React from 'react'
//import {BrowserRouter, Route } from "react-router-dom"; -- to use with history
import {Router, Route } from "react-router-dom";
import StreamCreate from './streams/StreamCreate'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'
import history from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div className="ui container">
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/stream/edit/:id" exact component={StreamEdit}/>
                    <Route path="/stream/delete/:id" exact component={StreamDelete}/>
                    <Route path="/stream/show/:id" exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    )
}


export default App