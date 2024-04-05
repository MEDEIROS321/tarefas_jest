const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory")
const UserCreateService = require("../services/UserServeces/UserCreateService")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")
const TaskListService = require("../services/TaskServices/TaskListService")
const TaskUpdateService = require("../services/TaskServices/TaskUpdateService")


describe("TaskCreateService", () => {
    let userRepository = null;
    let taskRepository = null;
    let userCreateService = null;
    let taskCreateService = null;
    let taskListService = null;
    let taskUpdateService = null

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
        taskUpdateService = new TaskUpdateService(taskRepository)
        taskListService = new TaskListService(taskRepository)

    })

    it("should be able to update tasks", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
        const userCreated = await userCreateService.execute(user)

       
        const task1 = {
            title: "Testando api",
            description: "elaborar testes",
            user_id: userCreated.user_id
        }

        const task2 = {
            title: "Atividades realizadas",
            description: "Atividades completas",
            user_id: userCreated.user_id
        }

        await taskCreateService.execute(task1)
        await taskCreateService.execute(task2)

        const list = await taskListService.execute()
        

       expect(list).toEqual(expect.arrayContaining(list))
       
       
       
        //expect(Array.isArray(listUsers)).toBe(true) // verificando se é um array, e se é um array de list
        

    })  
})
