import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  const tasks = data?.tasks ?? []

  return (
    <div className='rounded-[28px] border border-white/10 bg-slate-900/75 p-4 shadow-2xl shadow-slate-950/25 backdrop-blur-xl sm:p-5'>
      <div className='mb-5'>
        <p className='text-xs font-medium uppercase tracking-[0.28em] text-violet-300'>Tasks</p>
        <h2 className='mt-2 text-2xl font-semibold text-white'>Your task board</h2>
      </div>

      <div id='taskl' className='flex h-[320px] w-full flex-nowrap items-stretch gap-5 overflow-x-auto pb-2'>
        {tasks.map((e, idx) => {
          if (e.active) return <AcceptTask key={idx} data={e} />
          if (e.newTask) return <NewTask key={idx} data={e} />
          if (e.completed) return <CompleteTask key={idx} data={e} />
          if (e.failed) return <FailedTask key={idx} data={e} />
          return null
        })}
      </div>
    </div>
  )
}

export default TaskList
