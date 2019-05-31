import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import React from "react";
import Home from '../client/pages/Home';
import About from '../client/pages/About';
import TrongNuoc from "../client/pages/TrongNuoc";
import NuocNgoai from "../client/pages/NuocNgoai";
import Content from "../client/pages/Content";
import Contact from "../client/pages/Contact";
import Dichvu from "../client/pages/Dichvu";
 export const Main=()=>(
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/gioi-thieu" component={About}/>
            <Route path="/trien-lam" component={Trienlam}/>
            <Route path="/lien-he" component={Contact}/>
            <Route path="/dich-vu" component={Dichvu}/>
        </Switch>
    </main>
 )
const Trienlam=()=>(
    <Switch>
    <Route exact path="/trien-lam" component={TrongNuoc}/>
    <Route path="/trien-lam/nuoc-ngoai/:id" component={Content}/>
    <Route exact path="/trien-lam/nuoc-ngoai" component={NuocNgoai}/>
    
    </Switch>
)




