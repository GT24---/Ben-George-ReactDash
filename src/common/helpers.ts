export const parseInteger = (num: string) => {
  return parseInt(num, 10)
}

export function emailIsValid(email: string) {
  return Boolean(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

export const isEmpty = (str: string | undefined) => !Boolean(str)

export const passwordIsValid = (password: string): boolean => {
  return Boolean(password.length > 4 && password.length < 20)
}

export const endTimeIsValid = (startTime: string, endTime: string): boolean => {
  return Boolean(isValidDateTime(endTime) && startTime < endTime)
}

export function returnDateTimeFormat(dateTimeInput: string) {
  const regexp = /\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/
  const outputArray = dateTimeInput.replace('T', ' ').match(regexp)
  if (outputArray == null) {
    return ''
  } else {
    return outputArray[0]
  }
}

export function isValidDateTime(dateTimeInput: string) {
  const regexp = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/
  if (dateTimeInput.length === 0) {
    return false
  } else if (regexp.test(dateTimeInput)) {
    return true
  } else {
    return false
  }
}
