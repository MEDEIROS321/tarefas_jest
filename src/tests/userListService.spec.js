
const UserRepositoryInMemory = require("../repositories/userRepository/UserRepositoryInMemory")
const UserCreateService = require("../services/UserServeces/UserCreateService")
const UserListService = require("../services/UserServeces/UserListService")

describe("UserCreateService", () => {
    let userRepository = null
    let userCreateService = null
    let userListService = null

    it("user should be created", async () => {
        const user1= {
            name: "user test1",
            email: "user1@test.com",
            password: "123"
        }

        const user2= {
            name: "user test2",
            email: "user2@test.com",
            password: "123"
        }


        userRepository = new UserRepositoryInMemory()
        userCreateService = new UserCreateService (userRepository)
        userListService = new UserListService(userRepository)

        await userCreateService.execute(user1)
        await userCreateService.execute(user2)

        const listUsers = await userListService.execute()
        

       expect(listUsers).toEqual(expect.arrayContaining(listUsers))
       
       
       
        //expect(Array.isArray(listUsers)).toBe(true) // verificando se é um array, e se é um array de list
        

    })  
})
