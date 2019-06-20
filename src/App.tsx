import React from 'react'
import '../src/App.scss'
import ApolloClientGraphQLChart from './components/HorizontalChart/TimeScrollableHorizontalChart/ApolloClientGraphQLChart';
import 'bootstrap-4-grid/css/grid.min.css'
import ReactDOM from 'react-dom'
import { Button } from '@progress/kendo-react-buttons'
import { savePDF } from '@progress/kendo-react-pdf'
import '@progress/kendo-theme-material/dist/all.css'
import 'bootstrap-4-grid/css/grid.min.css'
import { Ripple } from '@progress/kendo-react-ripple'

const random = (max: number) => {
  return Math.floor(Math.random() * max) + 1
}
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const visibleData = (): any => {
  // @ts-ignore
  return [...Array(months.length).keys()].map(num => ({ month: months[num], Undecided: random(100), Applications: random(100) }))
}
const labels = [
  'Undecided',
  'Applications'
]
const App = () => {
  return (
    <Ripple>
      <div className="bootstrap-wrapper">
        <div className="app-container container">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h2>Student Course Application Summary | SAIT 2019</h2>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <button>Share</button>
              <button>Export to PDF</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <h4>Panel Bar Container</h4>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                  <h4>Donut Chart Container</h4>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                  <div className="percentage-container">
                    <span className="percentage-number">94</span>
                    <span className="percentage-sign">%</span>
                    <p>UNDECIDED STUDENTS</p>
                  </div>
                  <div className="percentage-container">
                    <span className="percentage-number">89</span>
                    <span className="percentage-sign">%</span>
                    <p>ACTUAL APPLICATIONS</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <h4>Chart Summary</h4>
                  <ApolloClientGraphQLChart visibleData={visibleData()} labels={labels} />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h4>Grid Container</h4>
                </div>
              </div>
            </div>
          </div>
          <h4 style={{ display: 'none' }}>Dialog Shown/Hidden with Logic</h4>
        </div>
      </div>
    </Ripple>
  )
}

export default App;
