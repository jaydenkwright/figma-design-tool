import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const FILE_QUERY = gql`
    query Document($key: String!) {
        document(key: $key) {
            name
            type
            children {
                name
                type
            }
        }
    }
`
const key = "8uwcYHQmbaHGFgZ59KkOYU"

export default function Document() {
    return (
        <div>
            Document
            <Query query={FILE_QUERY} variables={{key}}>
                {
                    ({ loading, error, data }) => {
                        if(loading) return <h1>loading...</h1>
                        if(error) return console.log(error)
                        return <h1>working</h1>
                        console.log(data)
                    }
                }
            </Query>
        </div>
    )
}
