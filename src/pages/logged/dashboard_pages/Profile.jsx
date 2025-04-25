import React from 'react'
import Graph from '../../../components/Graph'
import CircleChart from '../../../components/CircleChart'
import ConsistencyChart from '../../../components/ConsistencyChart'
import ProfileDetails from '../../../components/ProfileDetails'
const Profile = () => {
  return (
    <div className='h-full w-full flex flex-col gap-4 items-center justify-center p-2 overflow-y-auto'>
      <ProfileDetails/>
      <div className='flex gap-2 w-full'>
        <Graph/>
        <CircleChart/>
      </div>
      <ConsistencyChart/>
    </div>
  )
}

export default Profile;