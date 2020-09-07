import React from 'react';
import Header from './components/common/Header';
import List from './components/list/List';
import Detail from './components/detail/Detail';
import NotFound from './components/notFound/NotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={List}/> 
                <Route path="/currency/:id" component={Detail} />
                <Route component = {NotFound}/>
            </BrowserRouter>
        </>
    )
}

export default App