const yup = require('yup')

const newItemSchema = yup.object({
  body: yup.object({
    item_name: yup.string().required('item_name is required').max(128),
    item_description: yup.string().required('item_description is required').max(256),
    item_location: yup.string().required('item_location is required').max(128),
    item_price: yup.string().required('item_price is required').max(16),
  }),
})

const updatedItemSchema = yup.object({
  body: yup.object({
    item_name: yup.string().max(128),
    item_description: yup.string().max(256),
    item_location: yup.string().max(128),
    item_price: yup.string().max(16),
  }),
})

module.exports = {
  newItemSchema,
  updatedItemSchema,
}
