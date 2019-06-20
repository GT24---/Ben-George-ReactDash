import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import HorizontalChart from '../index'


const CHART_DATA = gql`
    query {
      chartDataQuery {
        time
        DEPTH
        BITLOC
        TEMP
      }
      queryChartLabels {
        id
      }
    }
`
const getLabels = (chartLabels) => {
    return (chartLabels).map(
        (value, index) => value.id
      )
}

const chart = (props) => {
    const {visibleData, labels} = props
    return(
        <HorizontalChart
                    isXAxisDepth={false}
                    visibleData={visibleData}
                    labels={labels}
                /> 
    )
}
const queryChart = () => {
   return <Query
            query={CHART_DATA}
        >
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <ul key={1} className="ChartError">
                    {error}
                </ul>
                return <HorizontalChart
                    isXAxisDepth={false}
                    visibleData={data.chartDataQuery}
                    labels={getLabels(data.queryChartLabels)}
                />
            }}
        </Query>  
}

const ApolloClientGraphQLChart = (props) => {
    const {visibleData, labels} = props
    return(
    <div>
        {visibleData === undefined || labels === undefined ? queryChart() : chart(props) }
    </div>)
}

export default ApolloClientGraphQLChart