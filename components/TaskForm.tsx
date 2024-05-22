import { createTask } from "@/utils/actions"

const TaskForm = () => {
  return (
    <form action={createTask} className='join text-xl mb-10'>
      <input type="text" className='join-item input-bordered mr-2 p-2 rounded-lg' name='content' required placeholder='Add a task'/>
      <button type='submit' className='btn btn-accent'>Create Task</button>
    </form>
  )
}

export default TaskForm
