import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import Users from "./views/users";
import Topics from "./views/topics";
import Navbar from "./components/navbar";

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/edgexl">
                        <Home />
                    </Route>
                    <Route path="/topics">
                        <Topics />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
