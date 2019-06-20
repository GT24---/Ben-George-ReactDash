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
