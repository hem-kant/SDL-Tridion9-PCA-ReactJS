import React, { Component } from "react";
 
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class News extends Component {
  render() {
    console.log(this.props)
    return (
      
      <div>
        <h2>News and Articles Landing Page</h2> 
        {
          this.props.data.loading === true ? "Loading" : 
            this.props.data.componentPresentations.edges.map
            (
              data =>
            <ul key={data.node.rawContent.data.Id}>
            <li style={{fontWeight: 'bold'}}>
                <a href={"newsdetails?ids="+data.node.rawContent.data.Id+"&"+data.node.rawContent.data.Content.title}>
                  {data.node.rawContent.data.Content.title}
               </a>
            </li>
            <p>
              {
               data.node.rawContent.data.Metadata.metadata.description
              }
              </p>
          </ul>
            )
        }
      </div>
    );
  }
}

const repoQuery = gql`
  query
{
  
  componentPresentations(namespaceId: 1, publicationId: 11, filter: {schema: {id: 789}}) {
    edges {
      cursor
      node {
        itemType
        rawContent {
          data
        }
      }
    }
  }
}
`

const AppWithData = graphql(
  repoQuery,
  { 
  }
)(News)

export default AppWithData;