

class TaskRepositoryInMemory {
    tasks = []
 
    async createTask({title, description, isCompleted, user_id}) {

       const task = {
          id: Math.floor(Math.random() * 1000) + 1, //funçao nativo do java
         title,
         description,
         isCompleted: false,
         user_id,
       }
       this.tasks.push(task)
       return task
    }

    async listTask() {
      return this.tasks
    }

    async listTaskById({id}) {
      const task = this.tasks.find((task) => task.id === id);
      return task;
    }

    async updateTask({title, description, isCompleted, id}) {
      const task = this.listTaskById({id})
      task.title = title ?? task.title
      task.description = description ?? task.description
      task.isCompleted = isCompleted ?? task.isCompleted
      return task
    } 

    async deleteTask({id}) {
      const index = this.tasks.findIndex((task) => task.id === id)
      return this.tasks.splice(index, 1)
    }
    
} 

module.exports = TaskRepositoryInMemory