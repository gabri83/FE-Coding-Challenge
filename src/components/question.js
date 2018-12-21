import React, { Component } from 'react';
import firstBlock from '../../data/4,5,6,7,8,11,12,15,16,17.json';
import secondBlock from '../../data/44,45,46.json';
import {Card, CardHeader, CardText} from 'material-ui/Card';


export default class Question extends Component {
  constructor(props){
    super(props);
  }

  extractQuestions(sectionId) {
    var questions = [];
    var block = [];
    if(sectionId <= 17 ) {
      block = firstBlock;
    } else {
      block = secondBlock;
    }
    block.map(function(item, i) {
      if(item.sectionId == sectionId) {
        questions.push(item);
      }
    })
    return questions;
  }

  isExpanded(id, states) {
    var respond = false;
      states.map((items)=>{
        items.expanded.map((item) => {
          if(item == id){
            respond = true;
          }
        })
      })
    return respond;
  }

  render() {
    var q = this.extractQuestions(this.props.id);
    return (<div>
              {q.map((k, i) =>{
                if(k) {
                  return (
                    <Card key={i} initiallyExpanded={this.isExpanded(k.tocId , this.props.states)}>
                      <CardHeader
                        title={<div dangerouslySetInnerHTML={{__html: k.question}} />}
                        actAsExpander={true}
                        showExpandableButton={true} />
                      <CardText expandable={true}>
                        <div dangerouslySetInnerHTML={{__html: k.answer}} />
                      </CardText>
                    </Card>)
                          }
                        })
                }
            </div>)
  }
};
