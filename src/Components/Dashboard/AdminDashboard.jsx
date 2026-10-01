// import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard(props) {
  return (
    <div className='min-h-screen w-full px-4 py-6 sm:px-6 lg:px-10'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6'>
        <Header changeUser={props.changeUser} data={props.data} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
