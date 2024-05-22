import Link from "next/link"
import DeleteForm from "./DeleteForm"
import { getAllTasks } from "@/utils/actions"

const TaskList = async () => {
    const tasks = await getAllTasks()

    if (!tasks.length) {
        return <h2>No Tasks Found...</h2>
    }

  return (
    <>
      {tasks.map((task) => {
        return (
            <li key={task.id} className="max-w-xl flex justify-between border-2 p-2 rounded-lg my-4">
                <h3 className={`font-3xl p-3 capitalize ${task.completed ? 'line-through': null}`}>{task.content}</h3>
                <div>
                <Link href={`/tasks/${task.id}`} className="mr-2 btn btn-primary">Edit</Link>
                <DeleteForm id={task.id}/>
                </div>
            </li>
        )
      })}
    </>
  )
}

export default TaskList
