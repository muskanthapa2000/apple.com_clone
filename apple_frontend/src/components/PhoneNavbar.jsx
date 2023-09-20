import { Routes, Route } from 'react-router-dom';
import { Image, Box, Text, Grid , Flex, Center } from '@chakra-ui/react';

const PhoneNavbar = () => {
  return (
    <Box>
        <Flex >

             <Grid >
                <Box  ml="300" mt="50">
                <Image src='https://www.rinogear.com/cdn/shop/collections/RN_Re-create_Website_Icons_7.jpg?v=1676564569' alt='Dan Abramov' height="60px" width="90px" />
                <Text ml= "0">iPhone 15</Text>
                </Box>
            </Grid>

            <Grid >
                <Box  ml="50" mt="50">
                <Image src='https://www.pngmart.com/files/22/iPhone-14-PNG-Picture.png' alt='Dan Abramov' height="60px" width="50px" />
                <Text ml= "0">iPhone 14</Text>
                </Box>
            </Grid>

            <Grid>
                <Box mt="50" ml = "10">
                <Image src='https://img.freepik.com/premium-vector/bangkok-thailand-october-23-2021-iphone-13-pro-max-mock-up-grey-color-iphone-is-product-apple-inc_34944-168.jpg?w=2000' alt='Dan Abramov' height="60px" width="80px" />
                <Text ml= "0">iPhone 13</Text>
                </Box>
            </Grid>

            <Grid>
                <Box mt="50" ml = "10">
                <Image src='https://cdn.iconscout.com/icon/free/png-256/free-iphone11-pro-max-back-1834905-1556118.png' alt='Dan Abramov' height="60px" width="80px" />
                <Text ml= "0">iPhone 11</Text>
                </Box>
            </Grid>

            <Grid>
                <Box mt="50" ml = "10">
                <Image src='https://cdn.awsli.com.br/310x374/1984/1984607/produto/175549351eac3ed40ba.jpg' alt='Dan Abramov' height="60px" width="80px" />
                <Text ml= "0">iPhone X</Text>
                </Box>
            </Grid>


            <Grid>
                <Box mt="50" ml = "10">
                <Image src='https://i.pinimg.com/originals/a9/62/d3/a962d363670e0aa15eb4e9f2120a6613.png' alt='Dan Abramov' height="60px" width="40px" />
                <Text ml= "0">iPhone SE</Text>
                </Box>
            </Grid>

            <Grid>
                <Box mt="55" ml = "10">
                <Image src='https://freepngimg.com/thumb/apple/94074-airpods-apple-text-symbol-plus-iphone.png' alt='Dan Abramov' height="42px" width="42px" />
                <Text ml= "0" mt = "3">AirPods</Text>
                </Box>
            </Grid>

            <Grid>
                    <Box mt="55" ml = "10">
                    <Center> <Image src='https://static.thenounproject.com/png/310593-200.png' alt='Dan Abramov' height="42px" width="42px" /></Center>
                    <Text ml= "0" mt = "3">Apple Watch</Text>
                    </Box>
            </Grid>

            <Grid>
                    <Box mt="55" ml = "6">
                    <Center> <Image src='https://developer.apple.com/news/images/og/wallet-og.jpg' alt='Dan Abramov' height="50px" width="120px" /></Center>
                    <Text ml= "0" >Apple Card</Text>
                    </Box>
            </Grid>

            <Grid>
                    <Box mt="55" ml = "6">
                    <Center> <Image src='https://static.vecteezy.com/system/resources/thumbnails/000/583/708/small/shop.jpg' alt='Dan Abramov' height="50px" width="90px" /></Center>
                    <Text ml= "0" >Shop iPhone</Text>
                    </Box>
            </Grid>

        </Flex>
     
    </Box>
  );
};

export default PhoneNavbar;
