"use client"

import Link from "next/link"
import Image from "next/image"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useState,useEffect } from "react"

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const getProvidersData = async () => {
      const response = await getProviders();
      setProviders(response)
    }
    getProvidersData();
  }, [])
  return (
    
<nav class="bg-transparent w-full">
  <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4 md:px-8 border-b-2 border-gray-500">
  <Link href='/' className="flex items-center">
    <Image
      src='/assets/logo.svg'
      width={45}
      height={45}
      alt='Logo'
      className=" object-contain rounded-full"
    />
    <h3 className=" font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-red-400 to-blue-600 px-2">
      Portfolio
    </h3>
  </Link>
  <div class="flex items-center md:order-2">
    {session?.user ? (
      
      <Link 
        href='/profile'
        type="button" 
        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" 
        aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom"
      >
        <Image 
          width = {40} 
          height={40} 
          class="rounded-full" 
          src={session?.user.image}
          alt="user photo" 
        />
      </Link>
    ): (
      <>    
        {console.log(providers)}  
        {providers && Object.values(providers).map(provider => {
          return (
            <button
              type="button"
              key = {provider.name}
              onClick={() => signIn(provider.id)}
              className=" text-gray-200 bg-cyan-600 py-1 px-2 rounded-md"
            >
              Login
            </button>
          )
        })}
      </>
    )}
  </div>
  </div>
</nav>

  )
}

export default Navbar