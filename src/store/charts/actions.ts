import { Dispatch } from 'redux'
import { ChartDataActionConstants } from './actionConstants'
import {
  IGetChartTimeDataStartAction,
  IGetChartTimeDataSuccessAction,
  IGetChartTimeDataFailAction,
  IGetChartDepthDataStartAction,
  IGetChartDepthDataSuccessAction,
  IGetChartDepthDataFailAction,
  IChartSample
} from './types'
import { IChartData } from '../../common/chartServerCommands';

/**
 * SYNCHRONOUS 'CHARTDATA' ACTION CREATORS
 */

// Action creator for start, success and failure of request

export const chartTimeDataRequestStart = (): IGetChartTimeDataStartAction => ({
  type: ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_START
})

export const chartTimeDataRequestSuccess = (
  payload: IChartData
): IGetChartTimeDataSuccessAction => ({
  type: ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_SUCCESS,
  payload
})

export const chartTimeDataRequestFail = (payload: {
  errors: string[]
}): IGetChartTimeDataFailAction => ({
  type: ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_FAILED,
  payload
})

export const chartDepthDataRequestStart = (): IGetChartDepthDataStartAction => ({
  type: ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_START
})

export const chartDepthDataRequestSuccess = (
  payload: IChartData
): IGetChartDepthDataSuccessAction => ({
  type: ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_SUCCESS,
  payload
})

export const chartDepthDataRequestFail = (payload: {
  errors: string[]
}): IGetChartDepthDataFailAction => ({
  type: ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_FAILED,
  payload
})
/**
 * ASYNCHRONOUS UI 'CHARTDATA' ACTION FACILITATORS
 */
interface IGetChartDataRequestSuccessAction {
  // tslint:disable-next-line:callable-types
  (payload: IChartData):
    | IGetChartTimeDataSuccessAction
    | IGetChartDepthDataSuccessAction
}

interface IChartSamples {
  chartData: any
}
interface IGraphQLServerPayload {
  data: IChartSamples
}

const gqlchartLabels = (sample: IChartSample): string[] => {
  return Object.keys(sample).map(
    (value, index) => value
  ).filter((val, index) => val !== "time")}

const chartQuery = `query {
  chartData {
    time
    DEPTH
    BITLOC
    TEMP
    HOOKLD
  }
}`

const DEFAULT_FETCH_TIMEOUT = 30000

export const fetchWithTimeout = (
  url: RequestInfo,
  options: RequestInit | undefined,
  timeout = DEFAULT_FETCH_TIMEOUT
) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(resolve)
      .catch(reject)

    if (timeout) {
      setTimeout(reject, timeout, 'timed out')
    }
  })
}

export const fetchGQLChartData = async (chartQuery: string
  ): Promise<any> => {
    const chartgqlOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: chartQuery }),
    }
  
    return fetchWithTimeout(
      'http://localhost:4000/graphql',
      chartgqlOptions
    )
      .catch((error: any) => {
        throw new Error(`${'Graphql server command failed.'} ${error}`)
      })
      .then((response: any) => {return (response.text())})
  
  }

export function fetchGQLTimeChart() {
  return async (dispatch: Dispatch) => {
    dispatch(chartTimeDataRequestStart())
    try {
      const response = await fetchGQLChartData(chartQuery)
      const serverPayload = JSON.parse(response)
      cacheGQLChartData(
        dispatch,
        serverPayload,
        chartTimeDataRequestSuccess
      )
    } catch (error) {
      dispatch(chartTimeDataRequestFail({ errors: [error.toString()] }))
    }
  }
}

const cacheGQLChartData = (
  dispatch: Dispatch,
  serverPayload: IGraphQLServerPayload,
  chartDataRequestSuccessAction: IGetChartDataRequestSuccessAction
) => {
  const labels = gqlchartLabels(serverPayload.data.chartData[0])
  dispatch(
    chartDataRequestSuccessAction({
      cachedData: serverPayload.data.chartData,
      labels
    })
  )
}


