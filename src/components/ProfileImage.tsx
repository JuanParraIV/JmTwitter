import Image from 'next/image'
import React from 'react'

type ProfileImageProps = {
  url?: string | null;
  className?: string;
}

const ProfileImage = ({ url, className = '', ...props }: ProfileImageProps) => {
  return (
    <div className={` relative h-12 w-12 overflow-hidden rounded-full ${className}`} >
      {url == null ?
        null
        :
        <Image
          src={url}
          alt="Profile Image"
          quality={100}
          fill
          {...props}
        />}
    </div >
  )
}

export default ProfileImage