import {Grid, Heading, Text, Image, Box, Center, Flex, UnorderedList, ListItem } from '@chakra-ui/react';
import axios from 'axios';
import { useState , useEffect} from 'react';


const Airpods =()=>{

    const [data , setData] = useState();

    useEffect(()=>{
        fetchData();
    } , [])

    const fetchData=()=>{
        axios.get("http://localhost:8080/airpods").then((res)=>{
            setData(res.data)
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <Box>
            {/* ........................................image box 1.......................... */}
            <Box
        width="100%"
        bgColor="black"
        height={{ base: '100%', md: '210%', xl: '280%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
        paddingTop='60px'
      >

        <Text color="white"  fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold" >Airpods </Text>
        <Text color="white" fontSize={{ base: '1xl', md: '2xl', xl: '4xl' }} fontWeight="bold">A magical connection to your devices.</Text>
        {/* <Text fontSize={{ base: '0.5xl', md: '1xl', xl: '2xl' }} fontWeight="bold" color="gray.500">$249</Text> */}
        <Center>
          <Box
           display={{ base: 'none', md: 'block', lg: 'block' }}
          
          boxSize={{ base: '70%', md: '187%', xl: '250%' }}>
            <Image src='https://9to5mac.com/wp-content/uploads/sites/6/2022/09/airpods-pro-2-vs-airpods-pro-airpods-3-wrap-up.jpg?quality=82&strip=all&w=1600' alt='Dan Abramov' height="28rem" width="120rem" />
          </Box>

          <Box 
          display={{ base: 'block', md: 'none', lg: 'none' }}
          boxSize={{ base: '100%', md: '187%', xl: '281%' }}>
            <Image src='https://9to5mac.com/wp-content/uploads/sites/6/2022/09/airpods-pro-2-vs-airpods-pro-airpods-3-wrap-up.jpg?quality=82&strip=all&w=1600' alt='Dan Abramov' height="28rem" width="120rem" />
          </Box>
        </Center>
      </Box>

{/* ................................img box 2 ............................................. */}
      <Box
        width="100%"
        bgColor="white"
        height={{ base: '125%', md: '250%', xl: '300%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
        paddingTop='60px'
      >
        <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">Airpods </Text>
        <Text color="black" fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }} fontWeight="bold">3rd generation</Text>
        <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="gray.500">From ₹14,365</Text>
        <Center>
          <Box boxSize={{ base: '93.75%', md: '187.5%', xl: '250%' }}>
            <Image src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/airpods/replace-airpods-pro-tip.gif' alt='Dan Abramov' height="28rem" width="120rem" />
          </Box>
        </Center>
      </Box>


{/* ................................img box 3 ............................................. */}
<Box
        width="100%"
        bgColor="white"
        height={{ base: '125%', md: '250%', xl: '300%' }}
        paddingX={{ base: '2', md: '4', xl: '8' }}
        paddingTop='60px'
      >
        <Text color="black" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontWeight="bold">Airpods Max </Text>
        <Text fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} color="gray.500">From ₹46,668</Text>
        <Center>
          <Box boxSize={{ base: '50%', md: '187.5%', xl: '250%' }}>
            <Image src='https://images.expertreviews.co.uk/wp-content/uploads/2021/01/apple_airpods_max_review_4.jpeg' alt='Dan Abramov' height="28rem" width="120rem" />
          </Box>
        </Center>
      </Box>


      {/* ............................................. Airpods Maping........................................... */}
{/* 
      <Box>
            {data.map((e, index) => (
                <div key={index}>
                {e.name}
                </div>
            ))}
    </Box> */}

           

    </Box>
    )
}

export default Airpods;
