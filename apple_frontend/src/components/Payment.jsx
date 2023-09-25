import { Box, Heading, Text , Image, Flex, Button ,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,FormControl ,
    ModalBody,useDisclosure ,
    ModalCloseButton,
    Center,Accordion,Input,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,} from "@chakra-ui/react";
    import axios from "axios";
import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom'

const Payment =()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
               <Text fontSize={{ base: '2xl', md: '3xl', xl: '4xl' }} color="gray.500" fontWeight="bold">Payment Method</Text> 

{/* ........................................ BOX FOR PAYMENT METHOD............................................... */}
 <Box>
<Center>
  {/* .....................................Button for apple account......................................... */}
 <Button height={{ base: '50px', md: '60px' }} width={{ base: '100%', md: '40%' }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }}  onClick={onOpen}  >
  <Flex justifyContent="space-around" alignItems="center" width="100%">
    <Box textAlign="left" width={{ base: '20%', md: '10%' }} height={{ base: '20%', md: '10%' }} ml={{ base: -4, md: -20 }}>
      <Image src="https://pngimg.com/d/macbook_PNG62.png" alt="payment" />
    </Box>
    <Box>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.800" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
        Apple Account
      </Text>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="blue" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
        Details
      </Text>
    </Box>
  </Flex>
</Button>
</Center>
{/* .....................................Button for master card......................................... */}
<Center>
<Button height={{ base: '50px', md: '60px' }} width={{ base: '100%', md: '40%' }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }} onClick={onOpen}>
  <Flex justifyContent="space-around" alignItems="center" width="100%">
    <Box textAlign="left" width={{ base: '20%', md: '10%' }} height={{ base: '20%', md: '10%' }} ml={{ base: -4, md: -20 }}>
      <Image src="https://pngimg.com/d/credit_card_PNG128.png" alt="payment" />
    </Box>
    <Box>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.800" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
        Apple Account
      </Text>
      <Text fontSize={{ base: 'sm', md: 'md' }} color="blue" fontWeight="bold" textAlign="right" mr={{ base: -4, md: -20 }}>
        Details
      </Text>
    </Box>
  </Flex>
</Button>
</Center>
                   
 </Box>

 {/* ........................................... Box for Description ............................................... */}
 <Center mb={4}>
    <Box height={{ base: '50px', md: '60px' }} width={{ base: '100%', md: '40%' }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }}>

    <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }} color="gray.500" >Your default payment method is also used for purchases made by family members.
    Tap  on button Edit , remove or pay Payment </Text> 
    </Box>

 </Center>
 <hr></hr>
 {/* ........................................... Box for Description 2............................................... */}
 <Center mt={2}>
    <Box height={{ base: '50px', md: '60px' }} width={{ base: '100%', md: '40%' }} mt={{ base: '8px', md: '16px' }} border="2px black"  _focus={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)' }}>

    <Text fontSize={{ base: 'sm', md: 'md', xl: 'lg' }} color="gray.500" >Eligible business entities including sole proprietors with a valid and active GSTIN (Goods and Services Tax Identification Number) can opt for a business e-invoice during checkout, when purchasing goods and services for business purposes. Please note that the state in which your 
    GSTIN is registered must match your billing address as well as the delivery address. If you added a trade-in to your order, we cannot issue a business invoice.
    You will need to provide a GSTIN (Goods and Services Tax Identification Number) that is valid and active. Please note that the state in which your GSTIN is registered must match your billing address and delivery address.
    The GSTIN (Goods and Services Tax Identification Number) must belong to the individual or business placing the order.
    Within 2-3 working days of your order being shipped, you should receive an official Apple invoice by email. If you do not receive this invoice, or if you require an additional copy for your records, please contact Customer Service at 000800 040 1966.
     </Text> 
    </Box>

 </Center>

{/* ............................Model............... */}

<Modal isOpen={isOpen} onClose={onClose} size="3xl">
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
      {/* <Text fontSize="2xl" color="black" fontWeight="bold" mt="1" ml="0" textAlign="left">
        Which model is right for you?
      </Text> */}
    </ModalHeader>
    <ModalCloseButton />
    <ModalBody>
        <Center>
        <FormControl style={{ marginRight: { base: '0', md: '1rem' } }}>
                    <Input type='text' width={{ base: '100%', md: '15rem' }} height="2rem"  required = "true" name = "Account number" placeholder='Enter Account Number' sx={{ '::placeholder': { fontSize: 'md' } }} color='blue.500' />
        </FormControl>  
        </Center>
        <FormControl style={{ marginRight: { base: '0', md: '1rem' } }}>
                    <Input type='text' width={{ base: '100%', md: '15rem' }} height="2rem"  required = "true" name = "Security Code" placeholder='Enter Security Code' sx={{ '::placeholder': { fontSize: 'md' } }} color='blue.500' />
        </FormControl>
  
    </ModalBody>
    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>

</Box>
    )
}

export default Payment;
