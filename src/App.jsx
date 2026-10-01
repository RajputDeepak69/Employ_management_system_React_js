import { useContext, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { Authcontext } from './Context/Authcontext'

const   App = ()=> {

const [savedSession] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem('loggedInUser'))
  } catch {
    return null
  }
})
const [user, setUser] = useState(() => savedSession ? { role: savedSession.role } : null)
const [loggedInUserData, setLoggedInUserData] = useState(() => savedSession?.data ?? null)
const [authdata] = useContext(Authcontext)

// console.log(authdata)

// useEffect(()=>{
//   if(authdata){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//      if(loggedInUser){
//       setUser(loggedInUser.role)
//      }

//   }
// },[authdata])

 const handleLogin = (email,password)=>{
      const normalizedEmail = email.trim().toLowerCase()
      
      if(normalizedEmail==='admin@example.com' && password === "123"){
           setUser({role:'admin'})
         const admin = {
           firstName: 'Boss',
           email: 'admin@example.com',
           role: 'admin'
         }
         setLoggedInUserData(admin)
         localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data:admin}))

      }else if(Array.isArray(authdata)){
        const employee = authdata.find((e) => e.email.toLowerCase() === normalizedEmail && e.password === password)
        if(employee){
          setUser({role:'employee'})
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
        } else {
          alert('Invalid email or password')
        }
      }
      else{
        alert('Invalid email or password')
      }    
 }
  return (
    <>
     
    {
      !user ? ( <Login handleLogin={handleLogin} /> ) : (
        user.role === 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : <EmployDashboard changeUser={setUser} data={loggedInUserData}  />
      )
    }

    </>
  )
}

export default App
