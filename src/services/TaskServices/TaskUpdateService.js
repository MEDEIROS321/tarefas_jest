const knex = require("../../database/knex")

class TaskUpdateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    async execute({title, description, isCompleted, id}) {
       const taskUpdate = await this.taskRepository.updateTask({title, description, isCompleted, id}) //iformaçoes passadas
       return taskUpdate //retorna a tarefa criada
}
}

module.exports = TaskUpdateService