import { Layout } from 'react-grid-layout'

// Signature for the credentials manager
export type IUserValidator = (
  email: string,
  password: string
) => Promise<UserState>

export enum UserState {
  Invalid = 'invalid',
  Administrator = 'administrator',
  Member = 'member'
}

export interface IApproval {
  userID: ID
  approvalTimestamp?: string
}

export interface IWidget {
  key: string
  type: string
  title: string
  subtitle: string
}

export interface ISIMPLETray {
  widgets: IWidget[]
}

export interface IRigHeader {
  [prop: string]: string
}

export interface IJobFormData {
  estimatedStart: string
  estimatedEnd: string
  estimatedDuration: string
  actualStart?: string | undefined
  actualEnd?: string | undefined
  siteId: string
  rigHeader: IRigHeader
}

export interface IJob extends IJobFormData {
  id: ID
}

export interface ISiteFormData {
  name: string
  locationX: number
  locationY: number
}

export interface ISite extends ISiteFormData {
  id: ID
}

export interface ISafetyNoteFormData {
  code1: string
  code2: string
  startTime: string
  endTime: string
  description: string
  jobId: ID
}

export interface ISafetyNote extends ISafetyNoteFormData {
  id: ID
  approvals: IApproval[]
}

export interface IActivityFormData {
  startTime: string
  endTime: string
  crewId: ID
  jobId: ID
}

export interface IActivity extends IActivityFormData {
  id: ID
  approved: boolean
}

export interface IMemoFormData {
  message: string
}

export interface IMemo extends IMemoFormData {
  jobId: string
  time: number
  category: number
  userId: string
}

export interface IUserFormData {
  email: string
  password: string
  isAdmin: boolean
  jobIds: string[]
}

export interface IUser extends IUserFormData {
  id: ID
}

export type ID = string

export interface ILayoutObject {
  id: ID
  layouts: Layout[]
}
