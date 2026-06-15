import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import React from 'react'



async function page(){
  const session = await auth()

  console.log(session)
  return (
    <div>
      <h1 className="h1-bold text-primary-500 flex justify-center m-10">
        Hi,I am Krishanth
      </h1>
      <form className='px-10 pt-25' action={async()=>{
        "use server"
        await signOut({redirectTo:ROUTES.SIGN_IN})
      }}>
        <Button type='submit'>Log out</Button>
      </form>
    
    </div>
  )
}

export default page
