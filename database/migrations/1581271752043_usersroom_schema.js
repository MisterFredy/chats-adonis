'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersroomSchema extends Schema {
  up () {
    this.create('usersrooms', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('usersrooms')
  }
}

module.exports = UsersroomSchema
