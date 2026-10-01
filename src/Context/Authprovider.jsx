import { useState } from 'react'
import { Authcontext } from './Authcontext'
import { getLocalStorage } from '../Utils/LocalStorage'

const Authprovider = ({children}) => {
const [UserData, setUserData] = useState(() => getLocalStorage().employees)
   
   

  return (
     <Authcontext.Provider value={[UserData, setUserData]}>
       {children}
     </Authcontext.Provider>
  )
}

export default Authprovider
