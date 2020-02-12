'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUsersroomSchema extends Schema {
  up () {
    this.table('usersrooms', (table) => {
      // alter table
       table.integer('rooms_id').unsigned().references('id').inTable('rooms')
    })
  }

  down () {
    this.table('usersrooms', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterUsersroomSchema
