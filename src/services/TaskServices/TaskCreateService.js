
class TaskCreateService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    async execute({title, description, isCompleted, user_id}) {
       const taskCreated = await this.taskRepository.createTask({title, description, isCompleted, user_id}) //iformaçoes passadas
       return taskCreated //retorna a tarefa criada
}
}

module.exports = TaskCreateService