import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import './iconButton.css'

const IconButton = ({ text, icon, href, download }) => {
  return (
    <Link href={href} download={download}>
      <Button className="button-common icon-btn me-4">
        <span className='iconText'>{text}</span>
        <span className="icon">{icon}</span> </Button>
    </Link>
  )
}

export default IconButton