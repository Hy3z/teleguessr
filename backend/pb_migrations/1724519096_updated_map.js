/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8eh3bgo3v451ah")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhwvbasy",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8eh3bgo3v451ah")

  // remove
  collection.schema.removeField("yhwvbasy")

  return dao.saveCollection(collection)
})
