/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uamr5cnnujpaz1q")

  // remove
  collection.schema.removeField("kriyfnby")

  // remove
  collection.schema.removeField("btvqtlnl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uamr5cnnujpaz1q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kriyfnby",
    "name": "options",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "noMove",
        "noLook",
        "noMap"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btvqtlnl",
    "name": "durationSeconds",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
