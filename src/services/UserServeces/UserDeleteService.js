class UserDeleteService {
    constructor(UserRepository) {
        this.userRepository = UserRepository
    }

    async execute({user_id}) {
      
       return await this.userRepository.deleteUser({user_id})
}
}

module.exports = UserDeleteService