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
                <input onChange={event => console.log(event.target.value)} />
            </div>
        );
    }

}
export default SearchBar;