import React, { useState } from 'react'

const ContactMe = () => {
  const [theme , setTheme] = useState('dark')
  return (
    <div className='dark:bg-gray-900 dark:text-white'>
      hello here lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
    </div>
  )
}

export default ContactMe
