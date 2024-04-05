

class UserListByIdService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute({user_id}) {
       const user = await this.userRepository.ListUserById({user_id})
       return user//retorna o usuario criado
}
}

module.exports = UserListByIdService