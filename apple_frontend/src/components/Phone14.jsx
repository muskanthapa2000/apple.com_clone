import { Box, Heading, Text , Image, Flex, Button ,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,useDisclosure ,
    ModalCloseButton,
    Center,} from "@chakra-ui/react";
import { useEffect , useState } from 'react';

const Phone14 = () => {

    const images = [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1676506021673",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660689596976",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_AV3?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1677293707305",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671474798353",
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1676930655577",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch_AV2_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1671474739477",
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
                Buy iPhone 14
            </Heading>
            <Text fontSize="xl" color="gray.500" mr="0" mt="2">
                From $799 or $33.29/mo. for 24 mo. 
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
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 14</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.1-inch display</Text>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.500" textAlign="right">$29.12/mo. for 24 month</Text>
                            </Box>
                     </Flex>  
                </Button>
                   
                <Button height="110px" width= "100%" mt = "10"  border="2px  black"  _focus={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }} >       
                        <Flex justifyContent="space-between" alignItems="center" width="100%">
                            <Box textAlign="left">
                                <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">iPhone 14 Plus</Text>
                                <Text fontSize="xl" color="gray.500" fontWeight="bold" mt="3" ml="0" textAlign="left">6.7-inch display</Text>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.500" textAlign="right">$33.29/mo. for 24 month</Text>
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
                    <Image src='https://i-smart.by/image/catalog/iphone14/2d07bad4078a55691c31650d909ab24f.jpeg' alt='Dan Abramov' 
                    height= "18rem" width= "100rem" /><Center>
                        <Text fontSize="2xl" color="black" fontWeight="bold" >iPhone 14</Text>
                    </Center>
                    </Box>

                    <Box boxSize={{ base: '0px', md: '300px', xl: '450px' }} mt = "8">
                    <Image src='https://cdn.dxomark.com/wp-content/uploads/medias/post-132367/Apple-iPhone-14_Plus_FINAL_featured-image-packshot-review.jpg' alt='Dan Abramov' 
                    height= "16rem" width= "100rem" /><Center>
                     <Text fontSize="2xl" color="black" fontWeight="bold" mt="1">iPhone 14 Plus</Text>
                  

                    </Center>
                 
                    </Box>
                           </Flex>
                        </ModalBody>
                        <Box mt = "1">
                        
                        <Text fontSize="xl" color="black"  mt="3" textAlign="left" ml = "4" mr = "4">
                           iPhone 14 and iPhone 14 Plus share the same fantastic innovations, like a Pro-level camera, a durable design with Ceramic Shield, 
                           vital safety features, and our lightning-fast A15 Bionic chip with 5-core GPU.
                        </Text>
                        <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml = "4" mr = "4">Here are the key differences:</Text>
                        <Text fontSize="xl" color="black"  mt="3" textAlign="left" ml = "4" mr = "4">
                        iPhone 14 has a 6.1-inch display¹ and gets up to 20 hours video playback.
                       iPhone 14 Plus has a 6.7-inch display¹ and gets up to 26 hours video playback.
                        </Text>
                        </Box>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                            </Button>
                        </ModalFooter>
                        </ModalContent>

                  
            </Modal>

                </Box>
            </Flex>

            </Box>
        </Box>
    );
}

export default Phone14;
