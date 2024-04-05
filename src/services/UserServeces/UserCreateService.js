


class UserCreateService {
    constructor(UserRepository) {
        this.UserRepository = UserRepository
    }

    async execute({name, email, password}) {
       const userCreated = await this.UserRepository.createUser({name, email, password}) //iformaçoes passadas
       return userCreated //retorna o usuario criado
}
}

module.exports = UserCreateService