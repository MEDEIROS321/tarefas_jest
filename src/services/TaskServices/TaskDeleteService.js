
class TaskDeleteService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    async execute({id}) {
       return await this.taskRepository.deleteTask({id}) //retorna a tarefa criada
}
}

module.exports = TaskDeleteService