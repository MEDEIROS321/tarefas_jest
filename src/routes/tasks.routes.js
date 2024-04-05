const {Router} = require ("express")
const TaskController = require("../controllers/TaskController")
const checkTaskExists = require("../middlewares/checkTaskExists")
const checkUserExists = require("../middlewares/checkUserExists")


const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.post("/tasks/:user_id", checkUserExists, taskController.createTask) // rota para criar a tarefa
taskRoutes.get("/tasks", taskController.listTask) // rota para listar a tarefa
taskRoutes.get("/tasks/:id", checkTaskExists, taskController.listTaskById) // rota utilizada para adicionar o id(para quando quiser buscar um id expecifico)
taskRoutes.put("/tasks/:id", checkTaskExists, taskController.updateTask) // rota para atualizar dados
taskRoutes.patch("/tasks/status/:id", checkTaskExists, taskController.updateTaskStatus) // rota para atualizar o status da tarefa, de false par true(completa)
taskRoutes.delete("/tasks/:id", checkTaskExists, taskController.deleteTask) // rota para deletar dados 


module.exports = taskRoutes