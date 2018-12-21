import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class Theme extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(darkBaseTheme)};
  };

  render(){
    return this.props.children
  }
}

Theme.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
