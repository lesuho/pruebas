import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TasksContext';

function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const {createTask} = useTasks();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
    })

    return (
        <div className="bg-zinc-800 w-full max-w-md p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" 
                    {...register('title')}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    autoFocus
                />
                <textarea rows="3" placeholder="Description" 
                    {...register('description')}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                />
                <button>Save</button>
            </form>
        </div>
    )
}

export default TaskFormPage;