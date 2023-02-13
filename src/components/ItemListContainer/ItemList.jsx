import React from 'react'
import Item from './Item';
import { Container } from '@chakra-ui/react'

const ItemList = () => {
  return (
    <>
      <Container maxw="container.sm" className="main-catalogue">
        <Item />
      </Container>
    </>
  )
}

export default ItemList