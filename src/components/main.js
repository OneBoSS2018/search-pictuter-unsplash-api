import  React from 'react'
import SearchBar from "./searchBar";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import GallaryBar from "./gallaryBar";


function Main() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <SearchBar />
                    </Route>
                    <Route path="/gallary">
                        <GallaryBar />
                    </Route>
                </Switch>
        </Router>
    );
}

export default Main