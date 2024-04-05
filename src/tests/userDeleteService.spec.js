

const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const UserCreateService = require("../services/UserServeces/UserCreateService")
const UserListService = require("../services/UserServeces/UserListService")
const UserDeleteService = require("../services/UserServeces/UserDeleteService")

describe("UserDeleteService", () => {
    let userRepository = null
    let userCreateService = null
    let userDeleteService = null
    let userListService = null

    it("should be possible delete an user", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)
        userListService = new UserListService(userRepository)

        const user = {
            name: "user test",
            email: "user1@test.com",
            password: "123"
        }

        await userCreateService.execute(user)

        await userDeleteService.execute(user)

        const users = await userListService.execute(user)


        expect(users).toHaveLength(0)



        //expect(Array.isArray(listUsers)).toBe(true) // verificando se é um array, e se é um array de list


    })

    it("user should be possible delete an specific user", async () => {
        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService(userRepository)
        userDeleteService = new UserDeleteService(userRepository)
        userListService = new UserListService(userRepository)


        const user1 = {
            name: "user test1",
            email: "user1@test.com",
            password: "123"
        }

        const user2 = {
            name: "user test2",
            email: "user2@test.com",
            password: "123"
        }


        const firstUser = await userCreateService.execute(user1)
        const secondUser = await userCreateService.execute(user2)

        const list = await userListService.execute()

        await userDeleteService.execute(firstUser)

        expect(list).not.toHaveProperty("nome", "user test 1")

    })
})