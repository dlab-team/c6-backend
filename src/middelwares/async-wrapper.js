const wrapperAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
const wrapperCommon = (fn) => {
  return async (attr) => {
    try {
      return await fn(attr)
    } catch (error) {
      throw Error(error)
    }
  }
}
module.exports = { wrapperAsync, wrapperCommon }
