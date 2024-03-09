'use client'
import { deleteTask } from "@/utils/actions"
import {useFormStatus} from "react-dom"

const DeleteForm = ({id}) => {
  
  const SubmitBtn = () => {
    const {pending} = useFormStatus()
    return (
      <button type="submit" className="btn btn-xs btn-error" disabled={pending}>
        {pending ? 'pending...' : 'delete'}
      </button>
    )
  }

  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitBtn />
    </form>
  );
}

export default DeleteForm