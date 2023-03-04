import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div>
        <h2>Loading...</h2>
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
    </div>
  )
}

export default Loading