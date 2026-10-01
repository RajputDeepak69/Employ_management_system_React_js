
const AcceptTask = ({ data }) => {
  return (
    <div className='h-full w-80 shrink-0 rounded-[26px] border border-amber-400/20 bg-gradient-to-br from-amber-500/15 to-slate-900 p-5 shadow-xl shadow-amber-950/20'>
      <div className='flex items-center justify-between text-xs text-slate-200'>
        <h3 className='rounded-full bg-amber-500/20 px-2.5 py-1 font-medium text-amber-200'>{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold text-white'>{data.taskTitle}</h2>
      <p className='mt-4 text-sm leading-6 text-slate-300'>{data.taskDescription}</p>

      <div className='mt-6 flex gap-3'>
        <button className='flex-1 rounded-xl bg-emerald-500 px-3 py-2.5 text-sm font-semibold text-slate-950'>Completed</button>
        <button className='flex-1 rounded-xl bg-red-500/80 px-3 py-2.5 text-sm font-semibold text-white'>Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
