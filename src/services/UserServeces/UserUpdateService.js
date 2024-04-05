class UserUpdateService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute({user_id, name, email}) {
       const user = await this.userRepository.updateUser({user_id, name, email})
       return user//retorna o usuario criado
}
}

module.exports = UserUpdateService