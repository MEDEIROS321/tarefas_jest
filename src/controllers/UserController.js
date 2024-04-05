const knex = require("../database/knex")
const UserRepository = require("../repositories/userRepository/UserRepository")
const UserCreateService = require("../services/UserServeces/UserCreateService")
const UserListService = require("../services/UserServeces/UserListService")
const UserListByIdService = require("../services/UserServeces/UserListByIdService")
const UserUpdateService = require("../services/UserServeces/UserUpdateService")
const UserDeleteService = require("../services/UserServeces/UserDeleteService")

const userRepository = new UserRepository()
const userCreateService = new UserCreateService(userRepository)
const userListService = new UserListService(userRepository)
const userListByIdService = new UserListByIdService(userRepository)
const userUpdateService = new UserUpdateService(userRepository)
const userDeleteService = new UserDeleteService(userRepository)

class UserController {
    async createUser(req, res) {
        const { name, email, password, isAdmin } = req.body

        await userCreateService.execute({ name, email, password, isAdmin }) //passando as informaçoes, executando

        return res.status(201).json("Usuário cadastrado com sucesso")
    }

    async listUsers(req, res) {
        const users = await userListService.execute()
        return res.status(200).json(users);
    }

    async listUserById(req, res) {       // req(requisiçao), res(uma resposta).
        const { user_id } = req.params

        const user = await userListByIdService.execute({ user_id });

        return res.status(200).json(user)
    }

    async updateUser(req, res) {
        const { user_id } = req.params
        const { nome, email } = req.body

        await userUpdateService.execute({ user_id, nome, email })
        return res.status(200).json("usuario atualizado com sucesso!")
    }

    async updateUserAdmin(req, res) {
        const { user_id } = req.params

        await knex("users").where({ id: user_id }).update({ isAdmin: true })
        return res.status(200).json("usuário agora é um adiministrador!")
    }

    async deleteUser(req, res) {
        const { user_id } = req.params

      const user = await userDeleteService.execute({user_id})
        return res.status(200).json("registro deletado com sucesso!")
    }



}
module.exports = UserController