const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory")

const UserCreateService = require("../services/UserServeces/UserCreateService")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")

const TaskUpdateService = require("../services/TaskServices/TaskUpdateService")


describe("TaskUpdateService", () => {
    let userRepository = null
    let taskRepository = null
    let userCreateService = null
    let taskCreateService = null
    let taskUpdateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskUpdateService = new TaskUpdateService(taskRepository)

    })

    it("should be able to update tasks", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
        const userCreated = await userCreateService.execute(user)

        const task = {
            title: "Testando api com jest",
            description: "Elaborar teste unitarios na aplicação",
            user_id: userCreated.id
        }
        const taskCreated = await userCreateService.execute(task)

        taskCreated.title = "Tarefa atualizada"
        taskCreated.description = "Descrição atualizada"


        const taskUpdate = await taskCreateService.execute(taskCreated)
        expect(taskUpdate).toHaveProperty("title", "Tarefa atualizada")

    })
})