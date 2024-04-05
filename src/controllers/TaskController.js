const knex = require("../database/knex")



class TaskController {

    async createTask(req, res) {
        
        const {user_id} = req.params

        const { title, description } = req.body
        
        const task = {
            title,
            description,
            isCompleted: false,
            user_id
        }

        await knex("tasks").insert({
            title: task.title,
            description: task.description,
            isCompleted: task.isCompleted,
            user_id: task.user_id
        })

        return res.status(201).json("Tarefa adicionada com sucesso")
    }


    async listTask(req, res) {
        const tasks = await  knex("tasks")
         return res.status(200).json(tasks)
    }

    async listTaskById(req, res) {
        const {id} = req.params
        const {task} = await  knex("tasks").where({id})
        res.status(200).json(task)
    }

    async updateTask(req, res) {
        const {id} = req.params
        const {title, description, isCompleted} = req.body

        await knex("tasks").where({id}).update({title, description})
        
        return res.status(200).json("resgistro atualizado com sucesso!")

     }
    

    async deleteTask(req, res) { 
        const {id} = req.params
        
        await knex("tasks").where({id}).delete({id})
            return res.status(200).json("registro deletado com sucesso!")
    }

}

module.exports = TaskController