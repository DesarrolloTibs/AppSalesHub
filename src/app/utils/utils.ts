/**
 * Get de path current Url
 * @param {string} currentUrl - filename
 */
export const getCurrentRoute = (currentUrl:string) => {
    return currentUrl.split('/')[1].toString()
  }

