import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useState } from 'react'
import Button from './Button';
import ProfileImage from './ProfileImage';

type Props = {}

const NewTweetForm = (props: Props) => {
  const session = useSession();
  const user = session.data?.user;
  const [inputValue, setIputValue] = useState<string>('')

  if (session.status !== 'authenticated') return
  return (
    <form className='flex flex-col gap-2 border-b px-4 py-2 '>
      <div className='flex gap-4 w-full'>
        <ProfileImage
          url={user?.image}
        />
        <textarea
          style={ { height: 0 }}
          className='bg-transparent flex-grow resize-none overflow-hidden p-4 text-lg outline-none'
          placeholder='What´s happening '
        />
      </div>
      <Button className='self-end' />
    </form>
  )
}

export default NewTweetForm