import React, { Component } from 'react';
//{Component} is same as const Component = React.Component;
//{Component} pulls the property Component
//ES6 when you have single line you can take out () when creating function.
//Functional base doesn't have state only Class based.
//super is used to call parent class.
class SearchBar extends Component { 
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (
            <div>
                <input 
                    value = {this.state.term}
                    //value makes the <input> controlled component
                    //value only changes when state.term changes.
                    onChange={event => this.setState({
                    term: event.target.value
                    })} 
                    //when onChange runs the value hasn't changed that only triggered event.
                    />
            </div>
        );
    }

}
export default SearchBar;