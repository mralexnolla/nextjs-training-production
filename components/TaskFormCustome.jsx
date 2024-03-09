'use client'
import { createTaskCustome } from "@/utils/actions"
import { useEffect } from "react";
import { useFormStatus, useFormState} from "react-dom";
import toast from "react-hot-toast";

const SubmitButton = () => {
  const {pending} = useFormStatus()

  return (
    <button type="submit" className="btn join-item btn-primary" disabled={pending}>
     { pending ? 'Please wait..' : 'Create Task' }
    </button>
  )
}

const initialState = {
  message:  null
}


const TaskFormCustome = () => {
  const [state, formAction] = useFormState(createTaskCustome, initialState);
  
  useEffect(() => {
    //console.log(state.message)
    if (state.message !== "success") {
      toast.error(state.message);
    }

    if (state.message === "success") {
      toast.success("task created...");
    }

  },[state])

  return (
    <form action={formAction}>
      {/*state.message ? <p className="mb-2">{state.message}</p> : null*/}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
}

export default TaskFormCustome