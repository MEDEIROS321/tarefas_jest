const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const TaskRepositoryInMemory = require("../repositories/taskRepository/TaskRepositoryInMemory")

const UserCreateService = require("../services/UserServeces/UserCreateService")
const TaskCreateService = require("../services/TaskServices/TaskCreateService")


describe("TaskCreateService", () => {
    let userRepository = null;
    let taskRepository = null;
    let userCreateService = null;
    let taskCreateService = null
 

    beforeEach(() => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)

        taskRepository = new TaskRepositoryInMemory()
        taskCreateService = new TaskCreateService(taskRepository)
       
    })

    it("should be able to update tasks", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        }
        const userCreated = await userCreateService.execute(user)

        const task = {
            title: "testando api com jest",
            description: "elaborar teste unitarios na aplicação ",
            user_id: userCreated.id
        }

        const taskCreated = await taskCreateService.execute(task)

        expect(taskCreated).toHaveProperty("id", taskCreated.id)
       
    })

   
    })