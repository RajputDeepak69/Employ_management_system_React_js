
const Header = ({ data, changeUser }) => {
  const logout = () => {
    localStorage.removeItem('loggedInUser')
    changeUser?.(null)
  }

  const userName = data?.firstName ?? data?.email ?? 'User'
  const role = data?.role ? data.role.toUpperCase() : 'USER'

  return (
    <header className='rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 shadow-lg shadow-slate-950/30 backdrop-blur-xl sm:px-6'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.3em] text-emerald-300'>Dashboard</p>
          <h1 className='mt-2 text-2xl font-semibold text-white sm:text-3xl'>
            Hello, <span className='text-emerald-300'>{userName}</span>
          </h1>
        </div>

        <div className='flex items-center gap-3'>
          <span className='rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200'>
            {role}
          </span>
          <button
            onClick={logout}
            className='rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-200 transition hover:bg-red-500/20'
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
