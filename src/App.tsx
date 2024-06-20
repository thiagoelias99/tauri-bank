import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

function App() {
    const [greetMsg, setGreetMsg] = useState('')
    const [name, setName] = useState('')

    async function greet() {
        setGreetMsg(await invoke('greet', { name }))
    }

    return (
        <main className='bg-slate-800 text-white w-screen h-screen'>
            <h1 className=''>Welcome to Tauri React</h1>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={greet}>Greet</button>
            <p>{greetMsg}</p>
        </main>
    )
}

export default App