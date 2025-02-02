import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "./components/Container.jsx";
import LoginBox from './components/Login.jsx';
import Navigation from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import Hero from './components/Hero.jsx';
import SearchList from './components/SearchList.jsx';
import PlaylistBuilderList from './components/PlaylistBuilderList.jsx';
import PlaylistImageSelector from './components/PlaylistImageSelector.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [{ snippet: { title: 'Music is cool' }, id: { videoId: '4D2qcbu26gs' }}],
            query: '',
        }
        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({
            query: event.target.value,
        })
    }

    onSearch(){
        console.log(this.state.query);
        let query = this.state.query;
        axios.post('/search', {query})
        .then((response)=>{
            console.log(response);
            // debugger;
            this.setState({
                searchResults : response.data.items,
            })
        })
        .catch((err)=> {
            console.error('Error searching:', err)
        })
    }
    render() {
        const { searchResults } = this.state;
        return (
            <Router>
                <div className="App">
                    <Navigation />
                    <Container onChange={this.onChange} onSearch={this.onSearch} searchResults={searchResults} />
                </div>
            </Router>
        );
    }
}

// <div className="App">
//     <Navigation />
//     <Hero />
//     <Search onChange={this.onChange} onSearch={this.onSearch} />
//     <LoginBox />
//     <SearchList searchResults={searchResults} />
//     <PlaylistImageSelector />
//     <PlaylistBuilderList />
//     <footer className="text-info bg-light">Created by Team Operation Sparkle.</footer>
// </div>

ReactDOM.render(<App />, document.getElementById("app"));