// validates req.body using yup schema passed as schema
const validator = (schema) => async (req, res, next) => {
    try {
      await schema.validate({ body: req.body })
      next()
    } catch (err) {
      next({ status: 401, ...err })
    }
  }
  
  // eslint-disable-next-line
  const errorHandling = (err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  }
  
  module.exports = {
    validator,
    errorHandling,
  }
  