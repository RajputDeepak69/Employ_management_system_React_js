
const CompleteTask = ({ data }) => {
  return (
    <div className='h-full w-80 shrink-0 rounded-[26px] border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-slate-900 p-5 shadow-xl shadow-emerald-950/20'>
      <div className='flex items-center justify-between text-xs text-slate-200'>
        <h3 className='rounded-full bg-emerald-500/20 px-2.5 py-1 font-medium text-emerald-200'>{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='mt-4 text-sm leading-6 text-slate-300'>{data.taskDescription}</p>

      <div className='mt-6'>
        <button className='w-full rounded-xl bg-emerald-500/80 px-3 py-2.5 text-sm font-semibold text-white'>Task Completed</button>
      </div>
    </div>
  )
}

export default CompleteTask
