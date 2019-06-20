import React from 'react'
import '../src/App.scss'
import ApolloClientGraphQLChart from './components/HorizontalChart/TimeScrollableHorizontalChart/ApolloClientGraphQLChart';

const random = (max: number) => {
  return Math.floor(Math.random()*max) + 1
}
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const visibleData = ():any => 
{
  // @ts-ignore
  return [...Array(months.length).keys()].map(num => ({month: months[num], undecided: random(100), resolved: random(100)}))
}
const labels = [
  'undecided',
  'resolved'
]
const App = () => {
  return (
    <div className="App">
      <ApolloClientGraphQLChart visibleData={visibleData()} labels={labels}/>
    </div>
  )
}

export default App;
