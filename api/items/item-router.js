const router = require('express').Router()

const { validator } = require('../global-middleware')
const { newItemSchema, updatedItemSchema } = require('./items-schema')
const {
  getItems,
  getItemAndUser,
  getItem,
  constructItemAndUser,
  itemExists,
  constructItem,
  addItem,
  updateItem,
  deleteItem,
  sendItems,
  sendItem,
  sendItemId,
} = require('./items-middleware')

router.get('/', [getItems], sendItems)

router.get('/:item_id', [getItemAndUser, itemExists, constructItemAndUser], sendItem())

router.post('/', [validator(newItemSchema), constructItem, addItem], sendItem(201))

router.put(
  '/:item_id',
  [validator(updatedItemSchema), getItem, itemExists, constructItem, updateItem],
  sendItem()
)

router.delete('/:item_id', [getItem, itemExists, deleteItem], sendItemId)

module.exports = router
