import React from 'react'
import { 
        Card,
        CardBody, 
        CardFooter,
        Text,
        Image,
        Stack,
        Heading,
        Divider,
        ButtonGroup,
        Button
        } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <>
        <Card sx={{ maxWidth: 350 }} style={styles.container}>
            <CardBody>
                <Image
                src={product.image}
                alt={product.title}
                borderRadius='lg'
                />
                <Stack mt='6' spacing='1'>
                    <Heading size='md'>{product.title}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        U$D{product.price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link to={"/producto/" + product.id}>
                        <Button variant='solid' colorScheme='blue'> 
                        Ver detalles 
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
        
    </>
  )
}

const styles = {
    container: {
      width: window.innerHeight > 900 ? "25%" : "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      backgroundColor: "rgba(249, 220, 92, 0.3)",
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 100,
    },
  };

export default Item