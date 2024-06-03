import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import './iconButton.css'

const IconButton = ({className, text, icon, href = "#", download, tyoe }) => {
  return (
    <Link href={href} download={download} className={className}>
      <Button className="button-common icon-btn me-4" type={tyoe}>
        <span className='iconText'>{text}</span>
        <span className="icon">{icon}</span> </Button>
    </Link>
  )
}

export default IconButton 