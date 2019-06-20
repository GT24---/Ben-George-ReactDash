import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { IRootstate } from './stateType'
import { ChartReducer } from './charts/reducer'

const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`)
  middlewares.push(createLogger())
}
export const store = createStore(
  combineReducers<IRootstate>({
    chart: ChartReducer
  }),
  applyMiddleware(...middlewares)
)

export default store
