import { useSession } from 'next-auth/react'
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div>{user?.name} {user?.email}</div>
  )
}

export default Profile