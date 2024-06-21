// import { useState } from 'react'
// import { invoke } from '@tauri-apps/api/tauri'

import MenuItem from './components/menu-item'

function HomePage() {
  // const [greetMsg, setGreetMsg] = useState('')
  // const [name, setName] = useState('')

  // async function greet() {
  //     setGreetMsg(await invoke('greet', { name }))
  // }

  return (
    <main className='bg-slate-800 text-white w-screen h-screen flex flex-col items-center justify-center'>
      <nav className='bg-slate-700 w-2/3 mx-auto rounded-lg px-8 py-10 flex flex-col justify-start items-start gap-6 shadow'>
        <ul className='contents'>
          <MenuItem>Register a Client</MenuItem>
          <MenuItem>Register a Account</MenuItem>
          <MenuItem>Client Access</MenuItem>
          <MenuItem>Exit</MenuItem>
        </ul>
      </nav>
    </main>
  )
}

export default HomePage