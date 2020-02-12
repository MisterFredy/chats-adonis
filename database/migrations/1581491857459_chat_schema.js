'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatSchema extends Schema {
  up () {
    this.table('chats', (table) => {
      // alter table
       table.dropForeign('userroom_id')
       table.dropColumn('userroom_id')
       table.integer('rooms_id').unsigned().references('id').inTable('rooms')
    })
  }

  down () {
    this.table('chats', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ChatSchema
