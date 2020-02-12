'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('users/:id', 'UserController.show').middleware('auth')
Route.post('login', 'UserController.login')
Route.post('register', 'UserController.register')

Route.get('create-chatroom','ChatroomController.create').middleware('auth')
Route.get('showall-chatroom','ChatroomController.all').middleware('auth')
Route.get('show-chatroom/:id','ChatroomController.show').middleware('auth')
Route.get('read/:id','ChatroomController.read').middleware('auth')
Route.post('adduser/:id','ChatroomController.adduser').middleware('auth')

Route.post('sendmessages/:id','MessagesController.sendmessages').middleware('auth')