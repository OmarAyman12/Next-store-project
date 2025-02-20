

import Link from 'next/link'
import React from 'react'
import { VscCode } from 'react-icons/vsc'
import { Button } from '../ui/button'

function Logo() {
  return (
    <Button size='icon' asChild ><Link href='/' className='ml-8'><VscCode/></Link></Button>
  )
}

export default Logo