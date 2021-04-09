import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/containers/Home';
import Login from '../src/containers/Login';
import Register from '../src/containers/Register';
import NotFound from '../src/containers/NotFound';
import Layout from '../src/components/Layout';

const App = () =>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component = {Home}  />
                <Route exact path="/login" component = {Login} />
                <Route exact path="/Register" component = {Register} />
                <Route component = {NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;