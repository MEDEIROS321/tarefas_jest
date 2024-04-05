const knex = require("../../database/knex")

class UserListByIdService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    async execute({id}) {
       const task = await this.taskRepository.listUserById({id}) //iformaçoes passadas
       return task//retorna a tarefa criada
}
}

module.exports = UserListByIdService