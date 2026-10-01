import { useContext, useState } from 'react'
import { Authcontext } from '../../Context/Authcontext'

const CreateTask = () => {
  const [UserData, setUserData] = useContext(Authcontext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskdescription, setDescription] = useState('')
  const [taskDate, settaskDete] = useState('')
  const [Assign, setAssign] = useState('')
  const [Catogery, setCatogery] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const task = {
      taskTitle,
      taskDescription: taskdescription,
      taskDate,
      category: Catogery,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const data = (UserData ?? []).map((employee) => {
      if (employee.firstName.toLowerCase() !== Assign.trim().toLowerCase()) {
        return employee
      }

      return {
        ...employee,
        tasks: [...employee.tasks, task],
        taskCounts: {
          ...employee.taskCounts,
          newTask: employee.taskCounts.newTask + 1
        }
      }
    })

    setUserData(data)
    localStorage.setItem('employees', JSON.stringify(data))

    settaskDete('')
    setAssign('')
    setDescription('')
    setCatogery('')
    settaskTitle('')
  }

  return (
    <div className='rounded-[28px] border border-white/10 bg-slate-900/75 p-4 shadow-2xl shadow-slate-950/25 backdrop-blur-xl sm:p-6'>
      <div className='mb-5 flex items-center justify-between'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.28em] text-emerald-300'>Create</p>
          <h2 className='mt-2 text-2xl font-semibold text-white'>Assign a new task</h2>
        </div>
      </div>

      <form onSubmit={submitHandler} className='grid gap-5 lg:grid-cols-[1.15fr_0.85fr]'>
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='sm:col-span-2'>
            <h3 className='mb-2 text-sm font-medium text-slate-300'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              type='text'
              placeholder='Make a UI design'
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/25 placeholder:text-slate-500'
            />
          </div>

          <div>
            <h3 className='mb-2 text-sm font-medium text-slate-300'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => settaskDete(e.target.value)}
              type='date'
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/25'
            />
          </div>

          <div>
            <h3 className='mb-2 text-sm font-medium text-slate-300'>Assign to</h3>
            <input
              value={Assign}
              onChange={(e) => setAssign(e.target.value)}
              type='text'
              placeholder='Employee name'
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/25 placeholder:text-slate-500'
            />
          </div>

          <div className='sm:col-span-2'>
            <h3 className='mb-2 text-sm font-medium text-slate-300'>Category</h3>
            <input
              value={Catogery}
              onChange={(e) => setCatogery(e.target.value)}
              type='text'
              placeholder='Design / Dev / etc'
              className='w-full rounded-2xl border border-slate-700 bg-slate-950/40 px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/25 placeholder:text-slate-500'
            />
          </div>
        </div>

        <div className='flex flex-col'>
          <h3 className='mb-2 text-sm font-medium text-slate-300'>Description</h3>
          <textarea
            value={taskdescription}
            onChange={(e) => setDescription(e.target.value)}
            className='h-48 w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/40 px-3.5 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/25 placeholder:text-slate-500'
            placeholder='Add task details'
          />
          <button className='mt-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
