import React, { Component } from "react";
import queryString from 'query-string'
//import {getCurrentDate} from './utils'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


export function getCurrentDate(separator=''){

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${year}-${separator}${month<10?`0${month}`:`${month}`}-${separator}${date}`
}


class Newsdetails extends Component {
  render() { 
     console.log(this.props);
     
     if (this.props.data.loading) {
    return (<div>Loading</div>)
  }
     
    return (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <h2>News Detail </h2>
        <div className="card-body">
        <h5 className="card-title">{this.props.data.componentPresentation.rawContent.data.Content.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">by {this.props.data.componentPresentation.rawContent.data.Metadata.metadata.author} - {this.props.data.componentPresentation.rawContent.data.Metadata.metadata.dateCreated}</h6>
          <p className="card-text">{this.props.data.componentPresentation.rawContent.data.Content.description}</p>
          <a href="/news" className="card-link">Go Back ...</a>
        </div>
    </div>
    );
  }
}
const repoQuery = gql`query($componentId: Int!)
{ 
  componentPresentation(namespaceId:1,publicationId:11,componentId:$componentId,templateId:790) {     
    content{type}
    rawContent{data}
  }
}`

const AppWithData = graphql(
  repoQuery,
  { 
      options: {
      variables: {
        componentId: 792
      }
    }
  }
)(Newsdetails)

export default AppWithData;