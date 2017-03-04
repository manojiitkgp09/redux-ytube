import React, {Component} from 'react' //this is needed since the jsx will transform the input element
//React.createElement
//es6: curley brace means import react and pull off a property called Component from React
//const Component = React.Component; //es6 syntax explanation

//functional component is not capable of reporting what is happening with itself
// const SearchBar = () => {
// 	return <input />;
// }

//every react component which is CLASS BASED must have render method to return jsx
class SearchBar extends React.Component {
	//called whenever new instance is created. for eg when component search bar is created 
	//initializing variable and state
	//super called Component class constructor
	//i think state comes from Component class
	constructor(props) {
		super(props);

		this.state = {'term' : ''}; //only in constructor we directly assign to state
		//everywhere else we use setState
	}
	//new es6 syntax
	render() {
		// return <input onChange={this.onInputChange}/>; //onChange is a prop
		// return <input onChange={(event) => console.log(event.target.value)}/>; //converted to arrow function
		// return <input onChange={event => console.log(event.target.value)}/>; //arrow function with single args
		//this.state.term = event.target.value;// dont do this
		
		//cant write comment inside return parentheses becomes child component
		//this is needed because there are two components
		//arrow function with single args
		//see how using parentheses help to avoid unwanted error
		return (
			<div className="search"> 
		<input 
		value={this.state.term}
		onChange={event => {
			this.setState({'term': event.target.value});
			this.props.searchVideos(this.state.term);
		}}
		 />
		</div>
		);
		//controlled component. By assigning value prop to state property we
		//make it more declarative so upon user action we dont need to read the value
		//from the input element since its expensive to find dom element just to read
		//its value, instead we can read it from the state object
	}
	//event handler : on/handle+element+event
	// onInputChange(event) {
	// 	console.log(event.target.value);
	// 	//console.log(event);
	// }
}

//new SearchBar //can create instance like this
export default SearchBar;

// const foo = 5

// export default foo;

//decide when to use functional or class based component 