import React, { Component } from 'react'; 

// react still needs to be in the scope
// not just within the scope though
// has to be at the top 

class SearchBar extends Component{

    constructor(props){
        super(props); 

        this.state = { term: '' }; 
    }; 

    render(){
        return (
            <div className="search-bar">
                <input 
                value = { this.state.term }
                onChange = {event => this.onInputChange( event.target.value )} />
            </div>
        ); 
    }

    onInputChange(term){
        this.setState({term}); 
        this.props.onSearchTermChange(term); 
    }
}

export default SearchBar; 