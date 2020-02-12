'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatSchema extends Schema {
  up () {
    this.create('chats', (table) => {
      table.integer('userroom_id').unsigned().references('id').inTable('usersrooms')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.text('messages')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('chats')
  }
}

module.exports = ChatSchema
