
const Task = ({ data }) => {
  const stats = [
    { label: 'New task', value: data?.taskCounts?.newTask ?? 0, tone: 'from-sky-500 to-blue-500' },
    { label: 'Completed', value: data?.taskCounts?.completed ?? 0, tone: 'from-emerald-500 to-teal-500' },
    { label: 'Failed', value: data?.taskCounts?.failed ?? 0, tone: 'from-rose-500 to-red-500' },
    { label: 'Active', value: data?.taskCounts?.active ?? 0, tone: 'from-amber-400 to-yellow-500' }
  ]

  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((stat) => (
        <div key={stat.label} className={`rounded-[24px] bg-gradient-to-br ${stat.tone} p-[1px] shadow-xl shadow-slate-950/20`}>
          <div className='flex h-full flex-col justify-between rounded-[23px] bg-slate-950/80 px-5 py-5 backdrop-blur-sm'>
            <div className='mb-8 h-2.5 w-12 rounded-full bg-white/20' />
            <div>
              <h2 className='text-3xl font-bold text-white'>{stat.value}</h2>
              <h3 className='mt-2 text-lg font-medium text-slate-200'>{stat.label}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Task
