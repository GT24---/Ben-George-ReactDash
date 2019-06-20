import { TChartDataActionTypes, IChartState } from './types'
import { Reducer } from 'redux'
import { ChartDataActionConstants } from './actionConstants'

export const initialChartDataState: IChartState = {
  timeChartState: {
    isFetching: false,
    errors: [],
    cachedData: undefined,
    labels: [],
    lastTimeCached: 0
  },
  depthChartState: {
    isFetching: false,
    errors: [],
    cachedData: undefined,
    labels: [],
    lastTimeCached: 0
  }
}

export const ChartReducer: Reducer<IChartState> = (
  state: IChartState = initialChartDataState,
  action: TChartDataActionTypes
) => {
  switch (action.type) {
    case ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_START:
      return {
        ...state,
        timeChartState: {
          ...state.timeChartState,
          isFetching: true,
          errors: undefined
        }
      }
    case ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_FAILED:
      return {
        ...state,
        timeChartState: {
          ...state.timeChartState,
          isFetching: false,
          errors: action.payload.errors
        }
      }
    case ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        timeChartState: {
          isFetching: false,
          cachedData: action.payload.cachedData,
          labels: action.payload.labels,
          lastTimeCached: Date.now(),
          errors: undefined
        }
      }
    case ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_START:
      return {
        ...state,
        depthChartState: {
          ...state.depthChartState,
          isFetching: true,
          errors: undefined
        }
      }
    case ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_FAILED:
      return {
        ...state,
        depthChartState: {
          ...state.depthChartState,
          isFetching: false,
          errors: action.payload.errors
        }
      }
    case ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        depthChartState: {
          isFetching: false,
          cachedData: action.payload.cachedData,
          labels: action.payload.labels,
          lastTimeCached: Date.now(),
          errors: undefined
        }
      }
    default:
      return state
  }
}
