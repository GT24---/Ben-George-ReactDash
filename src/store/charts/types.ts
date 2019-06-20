import { Action } from 'redux'
import { ChartDataActionConstants } from './actionConstants'
import { IChartData } from '../../common/chartServerCommands'

export interface IChartState {
  timeChartState: IChartDataState
  depthChartState: IChartDataState
}

export interface IChartDataState {
  isFetching: boolean
  errors?: string[]
  cachedData: object[] | undefined
  labels: string[]
  lastTimeCached: number
}

export interface IChartSample {
  [key: string]: any
}
/**
 * CHART ACTION CREATOR TYPES
 */

export type TChartDataActionTypes =
  | IGetChartTimeDataStartAction
  | IGetChartTimeDataSuccessAction
  | IGetChartTimeDataFailAction
  | IGetChartDepthDataStartAction
  | IGetChartDepthDataSuccessAction
  | IGetChartDepthDataFailAction

// Start and failure of request

export interface IGetChartTimeDataStartAction extends Action {
  readonly type: typeof ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_START
}

export interface IGetChartTimeDataFailAction extends Action {
  readonly type: typeof ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_FAILED
  readonly payload: { errors: string[] }
}

export interface IGetChartTimeDataSuccessAction extends Action {
  readonly type: typeof ChartDataActionConstants.GET_TIME_CHART_DATA_REQUEST_SUCCESS
  readonly payload: IChartData
}

export interface IGetChartDepthDataStartAction extends Action {
  readonly type: typeof ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_START
}

export interface IGetChartDepthDataFailAction extends Action {
  readonly type: typeof ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_FAILED
  readonly payload: { errors: string[] }
}

export interface IGetChartDepthDataSuccessAction extends Action {
  readonly type: typeof ChartDataActionConstants.GET_DEPTH_CHART_DATA_REQUEST_SUCCESS
  readonly payload: IChartData
}
