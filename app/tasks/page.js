import TaskForm from '@/components/TaskForm';
import TaskFormCustome from '@/components/TaskFormCustome';
import TaskList from '@/components/TaskList';
export const dynamic = 'force-dynamic'



const Tasks = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustome />
      <TaskList /> 
    </div>
  );
}

export default Tasks