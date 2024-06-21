import { useState } from 'react'
import MenuItem from './components/menu-item'
import RegisterClientDialog from './components/register_client_dialog'

function HomePage() {
  const [openDialog, setOpenDialog] = useState(false)
  // const clientDto = {
  //   name: 'John Doe',
  //   email: 'jhon@email.com',
  //   phone: '123456789',
  //   birthday: new Date('1990-01-01')
  // }

  // async function registerNewClient() {
  //   invoke<Client>('register_new_client', { dto: { ...clientDto, birthday: clientDto.birthday.toISOString()}})
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }

  return (
    <main className='bg-slate-800 text-white w-screen h-screen flex flex-col items-center justify-center'>
      <nav className='bg-slate-700 w-2/3 mx-auto rounded-lg px-8 py-10 flex flex-col justify-start items-start gap-6 shadow'>
        <ul className='contents'>
          <MenuItem
            onClick={() => setOpenDialog(true)}
          >Register a Client</MenuItem>
          <MenuItem>Register a Account</MenuItem>
          <MenuItem>Client Access</MenuItem>
          <MenuItem>Exit</MenuItem>
        </ul>
      </nav>
      <RegisterClientDialog
        open={openDialog}
        onOpenChange={() => setOpenDialog(false)}
      />
    </main>
  )
}

export default HomePage