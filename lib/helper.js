/**
 * Format Email
 * @param {*} email 
 * @returns 
 */

export const formatEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}