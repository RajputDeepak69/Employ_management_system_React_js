import Header from '../others/Header'
import Task from '../others/Task'
import TaskList from '../Taklist/TaskList'

const EmployDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <Task data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployDashboard
