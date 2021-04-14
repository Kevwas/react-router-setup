import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Users from "./routes/users";
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
                </Switch>
            </div>
        </BrowserRouter>
    );
}

