import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Theme from './services/theme.js';
import Paper from 'material-ui/Paper';
import sections from '../data/sections.json';
import states from '../data/states.json';
import Widget from './components/widget.js'

injectTapEventPlugin();
const style = {
	height: 'auto',
	width: 1024,
	margin: 20,
	padding: 30,
	display: 'inline-block',
};


export default class App extends Component {

	findChildren(array) {
		var map = {};
	    for(var i = 0; i < array.length; i++){
	        var obj = array[i];
	        obj.children= [];
	        map[obj.id] = obj;
	        var parent = obj.parentId;
	        if(!map[parent]){
	            map[parent] = {
	                children: []
	            };
	        }
	        map[parent].children.push(obj);
	    }
	    return map['-1'].children;
	}
    render() {
    	var holder = this.findChildren(sections)
        return (<Theme>
	            	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
	            		<Paper style={style} zDepth={2} >
			            	{holder.map((sec, index)=>{
			            		return <Widget key={index} node={sec} initialStates={states} />
			            	})}
			            </Paper>
	            	</MuiThemeProvider>
	            </Theme>
            )
    }
}
