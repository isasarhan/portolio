import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const IconButton = ({ text, icon, href }) => {
  return (
    <Link href={href}>
      <Button className="button-common icon-btn me-4">
        <span className='iconText'>{text}</span>
        <span className="icon">{icon}</span> </Button>
    </Link>
  )
}

export default IconButton