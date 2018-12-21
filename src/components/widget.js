import React from 'react';
import Question from './question.js'
import states from '../../data/states.json';

export default class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  toggle = () => {
    this.setState({visible: !this.state.visible});
  };
  render() {
    var childNodes;
    var classObj;
    if (this.props.node.children != null) {
      childNodes = this.props.node.children.map(function(node, index) {
        return (<li key={index}>
                  <TreeNode node={node} />
                </li>)
      });

      classObj = {
        togglable: true,
        'togglable-down': this.state.visible,
        'togglable-up': !this.state.visible
      };
    }

    var style;
    if (!this.state.visible) {
      style = {display: 'none'};
    }

    return (
      <div>
        <h2 onClick={this.toggle} >
          {this.props.node.title}
        </h2>
        <Question id={this.props.node.id} states={states}/>
        <ul style={style}>
          {childNodes}
        </ul>
      </div>
    );
  }
};
