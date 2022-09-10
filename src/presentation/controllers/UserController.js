const { Users } = require('../../domain/user/mocks/UserMock')
class UserController {


    async postPerson(req, res, next) {
        const { name, email, cpf } = req.body
        const person = { name, email, cpf }

        try {
            await Person.create(person)
            res.states(201) 
        } catch (error) {
            res.status(500).json({ error: error })
        }

        // res.send("Hello User!");
    }

    getUsers(req, res, next) {
        // res.send("Hello World!");
        res.json({ users: Users })
    }
}

module.exports = new UserController();