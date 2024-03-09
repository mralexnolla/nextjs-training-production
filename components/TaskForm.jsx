
import { createTask } from "@/utils/actions"


const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input 
          type="text" 
          className="input input-bordered join-item w-full" 
          placeholder="Type Here"
          name='content'
          required
        />
        <button type='submit' className="btn join-tem btn-primary">
          create Task
        </button>
      </div>
    </form>
  )
}

export default TaskForm