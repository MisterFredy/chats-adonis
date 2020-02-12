'use strict'
const User = use('App/Models/User');

class UserController {

     async login({request, auth, response}) {

        let {email, password} = request.all();

        try {
          if (await auth.attempt(email, password)) {
            let user = await User.findBy('email', email)
            let token = await auth.generate(user)

            Object.assign(user, token)
            return response.json(user)
          }


        }
        catch (e) {
          console.log(e)
          return response.json({message: 'You are not registered!'})
        }
      }

   async register({request,auth,response}){
      const {email,password,username} = request.all()
        let user = await User.create(request.all())
        return response.json(user)
  }

    show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }


}

module.exports = UserController
