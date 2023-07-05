"use client"

import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
  const { status, data } = useSession()
  const handleLoginClink = () => signIn();

  return (
    <div className="container mx auto p-5 flex justify-between">
      <Image width={133} height={82} src={'/Logo (2).png'} alt='TripSys'/>

      {status == "unauthenticated" && (
        <button 
          className='text-primary text-5m font-semibold'
          onClick={handleLoginClink}>
            Login
        </button>
      )}

      {status == "authenticated" && data.user && (
          <div className="flex item-center">
            <AiOutlineMenu size={16} />

            <Image height={48} width={24} src={data.user.image!} alt={data.user.name!} />
          </div>
      )}
    </div>
  )
}

export default Header