const yup = require('yup')

const userSchema = yup.object({
  body: yup.object({
    username: yup.string().required('username is required').max(128),
    password: yup.string().required('password is required').max(128),
  }),
})

module.exports = {
  userSchema,
}
