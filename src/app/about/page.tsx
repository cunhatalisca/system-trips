import React from 'react'
import Trips from './components/trips'

export const metadata = {
  title: 'Page'
}

const page = () => {
  return (
    <div>
      <Trips />
    </div>
  )
}

export default page