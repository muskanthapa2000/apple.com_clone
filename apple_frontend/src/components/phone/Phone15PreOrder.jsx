import { Box, Heading, Text , Image, Flex, Button ,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,useDisclosure ,
    ModalCloseButton,
    Center,} from "@chakra-ui/react";
import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom'

const Phone15PreOrder =()=>{

    const images = [
        "https://assets.hardwarezone.com/img/2023/09/ap12.jpg",
        "https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
        "https://www.unbox.id/wp-content/uploads/2023/09/Apple-iPhone-15_1a.webp",
        "https://i1.wp.com/sm.mashable.com/mashable_in/seo/4/45137/45137_sfvk.jpg?resize=1140,570",
        "https://cdn.mos.cms.futurecdn.net/rjuDsZwtiJZXa3WaCiPTgU.png",
        "https://www.t-mobile.com/content/dam/tfb/us/en/assets/background/text-n-image/TFB-Apple-NPI-Apple-Landing-page-2023-ImageText-Large-TwoThirds-840x470-Desktop.png"

      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const { isOpen, onOpen, onClose } = useDisclosure()
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Change slide every 1 second
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex, images.length]);

    return (
        <Box textAlign="left" ml = "20" mr = "20">
        <Heading as="h1" size="2xl" mr="2">
        Pre-order iPhone 15.
        </Heading>
        <Text fontSize="xl" color="gray.500" mr="0" mt="2">
        Delivery details for your area will be shown in Checkout. 
        </Text>
        <Text fontSize="xl" color="gray.500" mr="0" mt="2">
        From $1199 or $49.95/mo. for 24 mo.
        </Text>

     <Box mr = "0">
        <Flex>
        <Box width="70%" borderRadius="2xl">
                <Box   height={{ base: '300px', md: '400px', xl: '600px' }}
                    width="90%"
                    margin="auto"
                    mt="50px"
                    boxShadow="xl" // Add shadow
                    borderRadius="2xl" // Add curved corners
                    >
                <Image
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    width="100%"
                    height="100%"
                    fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
                />
                </Box>
            </Box>

            <Box width = "30%">
                <Flex>
                <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2">    Model.   </Text>
                <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1">  Which is best for you? </Text>
                </Flex>
            <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} >       
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Box textAlign="left">
                            <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 15</Text>
                            <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.1-inch display</Text>
                        </Box>
                        <Box>
                            <Text fontSize="lg" color="gray.500" textAlign="right">$33.29/mo. for 24 month</Text>
                        </Box>
                 </Flex>  
            </Button>
               
            <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} >       
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Box textAlign="left">
                            <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 15 Plus</Text>
                            <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.7-inch display</Text>
                        </Box>
                        <Box>
                            <Text fontSize="lg" color="gray.500" textAlign="right">$37.45/mo. for 24 month</Text>
                        </Box>
                 </Flex>  
            </Button>

            <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  onClick={onOpen} >       
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Box textAlign="left">
                            <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Need help choosing a model?</Text>
                            <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">Explore the differences in screen size and battery life.</Text>
                        </Box>
                 </Flex>  
            </Button>

        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader><Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Which model is right for you?</Text></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                       <Flex>
                       <Box boxSize={{ base: '0px', md: '300px', xl: '450px' }} mt = "0">
                <Image src='https://www.noelleeming.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-nlg-master-catalog/default/dw64f47c10/images/hi-res/7F/B2/N220892_0.jpg?sw=765&sh=765' alt='Dan Abramov' 
                height= "19rem" width= "100rem" /><Center>
                    <Text fontSize="2xl" color="black" fontWeight="bold" >iPhone 15</Text>
                </Center>
                </Box>

                <Box boxSize={{ base: '0px', md: '200px', xl: '450px' }} mt = "8">
                <Image src='https://static.comet.it/b2c/public/products/APL03258X/638e742125386d0e5e5a01264e63baaa-6501dda88bc999.54599498-ImageHttpHandler.jpg' alt='Dan Abramov' 
                height= "17rem" width= "30rem" /><Center>
                 <Text fontSize="2xl" color="black" fontWeight="bold" mt="1">iPhone 15 Plus</Text>
              

                </Center>
             
                </Box>
                       </Flex>
                    </ModalBody>
                    <Box mt = "1">
                    
                    <Text fontSize="xl" color="black"  mt="3" textAlign="left" ml = "4" mr = "4">
                    iPhone 15 and iPhone 15 Plus share the same powerful innovations, like Dynamic Island. An all‑new 48MP Main camera enables super‑high‑resolution photos and 2x Telephoto. 
                    Durable color‑infused back glass and aluminum design. USB‑C to conveniently connect and charge. And the powerhouse A16 Bionic chip.
                    </Text>
                    <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml = "4" mr = "4">Here are the key differences:</Text>
                    <Text fontSize="xl" color="black"  mt="3" textAlign="left" ml = "4" mr = "4">
                    iPhone 15 has a 6.1-inch display Footnote ¹ and gets up to 20 hours video playback. Footnote 
                    iPhone 15 Plus has a 6.7-inch display Footnote ¹ and gets up to 26 hours video playback..
                    </Text>
                    </Box>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                    </ModalFooter>
                    </ModalContent>

              
        </Modal>


             <Flex mt = "20">
                <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2">   Finish.  </Text>
                <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1">  Pick your favorite. </Text>
            </Flex>
            <Text fontSize="2xl" color="black"  mr="2" mt="2"> Color </Text>
            <Flex>
                <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://e0.pxfuel.com/wallpapers/897/983/desktop-wallpaper-beautiful-fall-color-palette-iphone-pastel-blue.jpg'alt='blue'/></Link>
                <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://www.solidbackgrounds.com/images/750x1334/750x1334-light-pastel-purple-solid-color-background.jpg'alt='pirple'/></Link>
                <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://img.freepik.com/premium-photo/yellow-cardboard-background-flat-lay-top-view_164357-2985.jpg?w=360'alt='yelllow'/></Link>
                <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://i.pinimg.com/1200x/37/c8/18/37c818a87f0eba853ee08923941e5354.jpg'alt='black'/></Link>
                <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg'alt='white'/></Link>
                <Link><Image borderRadius='full'boxSize='50px' mr = "8" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBoiPHdLN5R7yPPwJStPn9PlYEgtpOLKgis-jgd-N7C7rKPDS8RS3_tIkhVM9x4JcNU0&usqp=CAU'alt='yelllow'/></Link>
            </Flex>

            <Text fontSize="xl"  mr="0" mt="8" ml = "1">Every iPhone 14 (PRODUCT)RED purchase now contributes directly to the Global Fund to combat COVID‑19. footnote </Text>



            <Flex mt = "20">
                <Text fontSize="4xl" color="black" fontWeight="bold" mr="0" mt="2"> Storage. </Text>
                <Text fontSize="4xl" color="gray.500" fontWeight="bold" mr="0" mt="2" ml = "1"> How much space do you need?</Text>
            </Flex>

            <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  >       
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Box textAlign="left">
                            <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">128GB</Text>
                            <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $799 or $33.29/mo.per for 24 mo.</Text>
                        </Box>
                 </Flex>  
            </Button>

            <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  >       
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Box textAlign="left">
                            <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">256GB</Text>
                            <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $899 or $37.45/mo.per for 24 mo.</Text>
                        </Box>
                 </Flex>  
            </Button>

            <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}  >       
                    <Flex justifyContent="space-between" alignItems="center" width="100%">
                        <Box textAlign="left">
                            <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">512GB</Text>
                            <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">From $1099 or $45.79/mo.per  for 24 mo.</Text>
                        </Box>
                 </Flex>  
            </Button>

            </Box>
        </Flex>
        <Box>
        <Center><Text fontSize="6xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">What’s in the Box</Text> </Center>
        <Flex justifyContent="center">
            <Center>
            <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                    <Image src='https://img.freepik.com/premium-photo/smart-phone-isolated-white-screen-with-empty-background-mockup_752648-43.jpg' alt='Dan Abramov' 
                    height= "30rem" width= "100%" />
                    <Center> <Text fontSize="xl"  mr="0" mt="8" ml = "1">iPhone 15 Plus </Text></Center>
                   
                 </Box>

                 <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                    <Image src='https://www.cultofmac.com/wp-content/uploads/2023/04/Made-for-iPhone-USB-C-cable.jpg' alt='Dan Abramov' 
                    height= "30rem" width= "100%" />
                    <Center> <Text fontSize="xl"  mr="0" mt="8" ml = "1">USB-C to Lightning Cable</Text></Center>
                   
                 </Box>
            </Center>
           
        </Flex>
    <Box mt = "40">
             <Text fontSize="xl"  mr="0" mt="8" ml = "1">As part of our efforts to reach carbon neutrality by 2030, iPhone 15 and iPhone 15 Plus do not include a power adapter or EarPods. 
             Included in the box is a USB‑C Charge Cable that supports fast charging and is compatible with USB‑C power adapters and computer ports. </Text>
                    <Text fontSize="xl"  mr="0" mt="8" ml = "1">We encourage you to use any compatible USB‑C power adapter. 
                    If you need a new Apple power adapter or headphones, they are available for purchase.</Text>
    </Box>
    
    <Box>
    <Center><Text fontSize="6xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">Which iPhone is right for you?</Text> </Center>
    <Flex>
    <Link>
            <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                    <Image src='https://img.freepik.com/premium-photo/smart-phone-isolated-white-screen-with-empty-background-mockup_752648-43.jpg' alt='iPhone 15' 
                    height= "30rem" width= "100%" />
                    <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 15</Text></Center>
                    <Center> <Text fontSize="xl" >The ultimate iPhone.</Text></Center>
                   
                 </Box>
            </Link>

            <Link>
            <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                    <Image src='https://cdn.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg' alt='iPhone 14' 
                    height= "30rem" width= "100%" />
                    <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 14</Text></Center>
                    <Center> <Text fontSize="xl" >As amazing as ever.</Text></Center>
                   
                 </Box>
            </Link>

            <Link>
            <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                    <Image src='https://media.ldlc.com/r1600/ld/products/00/05/93/86/LD0005938604_1.jpg' alt='iphone 13' 
                    height= "30rem" width= "80%" />
                   <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone 13</Text></Center>
                    <Center> <Text fontSize="xl">A total powerhouse.</Text></Center>
                   
                 </Box>
            </Link>

            <Link>
            <Box  boxSize={{ base: '0px', md: '300px', xl: '450px' }}>
                    <Image src='https://www.refurbished.store/cache/images/iphone-xs-zilver-multiapple_1_600x600_BGresize_16777215-tj.png' alt='Dan Abramov' 
                    height= "30rem" width= "100%" />
                          <Center> <Text fontSize="4xl" fontWeight="bold" mr="0" mt="8" ml = "1">iPhone X</Text></Center>
                    <Center> <Text fontSize="xl">Serious power. Serious value.</Text></Center>
                   
                 </Box>
            </Link>
    </Flex>
            
    </Box>




        </Box>
       
        
       
        

        </Box>
    </Box>
    )
}

export default Phone15PreOrder;