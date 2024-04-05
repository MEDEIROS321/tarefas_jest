const knex = require("../../database/knex")


class TaskRepository {

    async createTask({ title, description, user_id }) {
        const isCompleted = false

        const taskId = await knex("tasks").insert({ title, description, isCompleted, user_id })

        return { id: taskId }
    }


    async listTask() {
        const tasks = await knex("tasks")
        return tasks
    }

    async listTaskById({ id }) {

        const task = await knex("tasks").where({ id })
        return task
    }

    async updateTask(req, res) {
        const task =await knex("tasks").where({id});
        task.title = title ?? task.title
        task.description = description ?? task.description
        task.isCompleted = isCompleted ?? task.isCompleted

        await knex("tasks").where({ id }).update({ title: task.title, description: task.description, isCompleted: task.isCompleted })
        return user

    }

    async deleteTask({id}) {
        const task = await knex("tasks").where({id}).delete()

        
        return task
    }

}

module.exports = TaskRepository