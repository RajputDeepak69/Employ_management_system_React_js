import { useContext } from 'react'
import { Authcontext } from '../../Context/Authcontext'

const AllTask = () => {
  const [UserData] = useContext(Authcontext)

  return (
    <div id='alltsk' className='overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/75 p-4 shadow-2xl shadow-slate-950/25 backdrop-blur-xl sm:p-5'>
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.25em] text-cyan-300'>Overview</p>
          <h2 className='mt-2 text-2xl font-semibold text-white'>Team workload</h2>
        </div>
      </div>

      <div className='mb-3 grid grid-cols-5 gap-3 rounded-2xl bg-slate-800/85 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300'>
        <h2>Employee</h2>
        <h3>New</h3>
        <h5>Active</h5>
        <h5>Done</h5>
        <h5>Failed</h5>
      </div>

      <div className='max-h-[280px] space-y-3 overflow-auto'>
        {(UserData ?? []).map((e, idx) => (
          <div key={idx} className='grid grid-cols-5 gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/40 px-4 py-3 text-sm text-slate-200'>
            <h2 className='font-medium text-white'>{e.firstName}</h2>
            <h3 className='text-amber-300'>{e.taskCounts.newTask}</h3>
            <h5 className='text-sky-300'>{e.taskCounts.active}</h5>
            <h5 className='text-emerald-300'>{e.taskCounts.completed}</h5>
            <h5 className='text-red-300'>{e.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
