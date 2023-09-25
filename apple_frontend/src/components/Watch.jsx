import { Box ,Center,Flex, Image , Text , Button} from "@chakra-ui/react"


const Watch =()=>{
    return (
        <Box>
{/* ...................................image 1 ........................... */}


<Box
        width="100%"
        bgColor="black"
        height={{ base: '125%', md: '250%', xl: '293.75%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
      >
        <Center>
          <Flex align="center">
            <Box boxSize='312.5%' marginRight="1rem">
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iWFdAkhhuTzcBZoulLi1HBkXWj_47DP0xuUC2PY&s' alt='Dan Abramov' height="5rem" width="5rem" />
            </Box>
            <Text color="white" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">Watch</Text>
          </Flex>
        </Center>

        <Text color="red" fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }} fontWeight="bold">SERIES 9</Text>
        <Text color="gray.500"fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}  fontWeight="bold">Smarter. Brighter. Mightier</Text>
        <Center>
          <Box boxSize={{ base: '60%', md: '187.5%', xl: '281.25%' }}>
            <Image src='https://obs.line-scdn.net/0h5uT_4tNtalppJn0I_SkVDVFwZitaQHBTS0MhORguN2tHCi8PVhI5OU1zZ3ZMFisNSUMgP0VzYzgUFClcUA/w644' alt='Dan Abramov' height="40rem" width="120rem" />
          </Box>
        </Center>
      </Box>

      {/* .............................................image 2....................................... */}
      <Flex>
         {/* .........................................DESCRIPTION BOX................................................ */}
        <Box width= "50%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }}  >
            <Center marginTop="30px">
                    <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://pngimg.com/d/apple_logo_PNG19674.png' alt='Dan Abramov' 
                        height= "5rem" width= "15rem" />
                        </Box>
                    <Text color="black"fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >Watch</Text>
                    </Flex>
                </Center>
                 
                 {/* <Text color="black"fontSize="6xl" fontWeight="bold" >Watch</Text> */}
                 <Text color="orange"fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }}  fontWeight="bold" >Se</Text>
                 <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">A great deal to love.</Text>
                 <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} fontWeight="bold" color="gray.500">From ₹ 21,165</Text>
                 <Center>
             <Button mt={10}
            width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: 'xl' }}
          >
           Buy
          </Button>
        </Center>

        </Box>
        {/* ....................................IMAGE BOX............................................. */}
        <Box width= "80%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }} >
        <Center>
                     <Box boxSize={{ base: '0', md: '350px', xl: '900px' }}>
                     <Image src='https://www.apple.com/v/apple-watch-se/k/images/meta/gps__dt6xcl4fwymq_og.png' alt='Dan Abramov' 
                     height= "28rem" width= "120rem" />
                     </Box>
                 </Center>
        </Box>

    
      </Flex>
     
      
        {/* ........................................3 image............................................ */}

        <Flex>
         {/* .........................................DESCRIPTION BOX................................................ */}
        <Box width= "50%" bgColor="white" height={{ base: '20rem', md: '40rem', xl: '30rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }}  >
            <Center marginTop="30px">
            <Flex  align="center">
                    <Box boxSize='5rem' marginRight="1rem">
                        <Image src='https://i.pinimg.com/1200x/97/10/1e/97101e14164bf3f0364a2da050f9837c.jpg' alt='Dan Abramov' 
                        height= "5rem" width= "5rem" />
                        </Box>
                    <Text color="black"fontSize={{ base: '2xl', md: '3xl', xl: '5xl' }}  fontWeight="bold" >Carbon Neutral</Text>
                    </Flex>
                </Center>
                 
                 {/* <Text color="black"fontSize="6xl" fontWeight="bold" >Watch</Text> */}
                 <Text color="green"fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >A first for Apple Watch</Text>
                 <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">And Apple.</Text>
                 <br></br><br></br>
                 <Center>
             <Button mt={10}
            width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: 'xl' }}
          >
           Buy
          </Button>
        </Center>

        </Box>
        {/* ....................................IMAGE BOX............................................. */}
        <Box width= "80%" bgColor="white" height={{ base: '40rem', md: '40rem', xl: '47rem' }}  paddingX={{ base: '2', md: '4', xl: '8' }} >
            <Center>
                <Box boxSize={{ base: '0', md: '150px', xl: '500px' }}>
                     <Image src='https://iphoneclass.com.br/wp-content/uploads/2023/01/Apple_watch-series7-availability_stainless-steel_10052021_big_carousel.jpg.slideshow-large_2x.jpg' alt='Dan Abramov' 
                     height= "30rem" width= "150rem" />
                </Box>
            </Center>
        </Box>

    
      </Flex>
     


        </Box>
    )
}

export default Watch;
