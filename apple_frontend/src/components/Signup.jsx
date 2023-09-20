import { Heading, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Flex, Select, Center, Text, Button, Alert, AlertIcon , Checkbox,Box , Stack} from '@chakra-ui/react';
import {route , routes} from 'react-router-dom'
import Login from './Login';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';



const Signup = ()=>{
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const toast = useToast()

    const [data , setData] = useState({
      Fname :"",
      Lname : "",
      Country :"",
      Birth :"",
      Email :"",
      Pswd : "",
      ConfirmPswd :"",
      NoCode :"",
      Number :""
    })

    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };


    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    
    //   if (
    //     data.Fname === "" ||
    //     data.Lname === "" 
    //     // data.Country === "" 
    //     // data.Birth === "" 
    //     // data.Email === "" 
    //     // data.Pswd === "" 
    //     // data.ConfirmPswd === "" 
    //     // data.NoCode === "" ||
    //     // data.Number === ""
    //   ) {
    //     toast({
    //       title: "Error",
    //       description: "Please fill in all required fields.",
    //       status: "error",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //     return;
    //   }
    
    //   try {
    //     const response = await axios.post('http://localhost:8080/signup', data);
    
    //     if (response.status === 201) {
    //       // Registration successful
    //       setShowAlert(true);
    //       toast({
    //         title: "Success",
    //         description: "User registered successfully.",
    //         status: "success",
    //         duration: 5000,
    //         isClosable: true,
    //       });
    //       navigate("/login");
    //     } else if (response.status === 200) {
    //       // Email already exists
    //       toast({
    //         title: "Error",
    //         description: "Email address already exists. Please use another one.",
    //         status: "error",
    //         duration: 5000,
    //         isClosable: true,
    //       });
    //     } else {
    //       // Handle other response statuses if needed
    //       console.error('Unexpected response status:', response.status);
    //       toast({
    //         title: "Error",
    //         description: "An error occurred while registering. Please try again later.",
    //         status: "error",
    //         duration: 5000,
    //         isClosable: true,
    //       });
    //     }
    //   } catch (error) {
    //     console.error('Error registering user:', error);
    //     toast({
    //       title: "Error",
    //       description: "An error occurred while registering. Please try again later.",
    //       status: "error",
    //       duration: 5000,
    //       isClosable: true,
    //     });
    //   }
    // };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // if (
      //   data.Fname === "" ||
      //   data.Lname === "" ||
      //   data.Country === "" ||
      //   data.Birth === "" ||
      //   data.Email === "" ||
      //   data.Pswd === "" ||
      //   data.ConfirmPswd === "" ||
      //   data.NoCode === "" ||
      //   data.Number === ""
      // ) {
      //   // If any required field is empty, show an error message and return early
      //   toast({
      //     title: "Error",
      //     description: "Please fill in all required fields.",
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //   });
      //   return;
      // }
    
      try {
        const response = await axios.post('http://localhost:8080/signup', data)
          .then((res) => {
            console.log(res.data);
            // setData(data);
            navigate("/login");
            toast({
              title: 'Account created.',
              description: "We've created your account for you.",
              status: 'success',
              duration: 9000,
              isClosable: true,
            });
          });
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
    
    
    

    return (
       
    <div>
        <form onSubmit={handleSubmit}>
 <Flex justifyContent="space-between" alignItems="center" mr="280px" ml="280px">
          <Heading as="h3" size="lg">
            Apple ID
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Sign In
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Create Your Apple ID
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500">
                FAQ
              </Text>
            </Link>
          </Flex>
        </Flex>
       
<hr></hr>

       <Box ml = "20px" mr = "20px">
            
            <Heading as='h1' size={{ base: 'xl', md: '2xl', lg: '3xl' }}>Create Your Apple ID </Heading>
            <br></br>
            <Text fontSize={{ base: 'xl', md: '1xl', lg: '2xl' }} > One Apple ID is all you need to access all Apple services. </Text>
            <br></br>
            <Center>
            <Flex whiteSpace={0} flexDir={{ base: 'column', md: 'row' }}>
                <FormControl style={{ marginRight: { base: '0', md: '1rem' } }}>
                    <Input type='text' width={{ base: '100%', md: '17rem' }} height="4rem" name = "Fname" onChange={handleChange} placeholder='Enter First Name' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' />
                </FormControl>

                <FormControl >
                 <Input type='text' width={{ base: '100%', md: '17rem' }} height="4rem" name = "Lname" onChange={handleChange} placeholder='Enter Last Name' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' />
                 </FormControl>
             </Flex>
         </Center>
      
        <br></br>
        
        <FormControl>
            
            <Text fontSize='lg' >COUNTRY / REGION</Text>
            <center>
                <Select height="4rem" width={{ base: '100%', md: '30rem' }} sx={{ fontSize: 'xl' }}  name = "country" onChange={handleChange}>
                   <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="China">China</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Albania">Albania</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Austria">Austria</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Angola">Angola</option>
                    <option value="Greece">Greece</option>
                    <option value="Algeria">Algeria</option>   
                </Select>
            </center>
            </FormControl>
           
            <br></br>
            <FormControl >
                    <Input type='text' height="4rem" width={{ base: '100%', md: '30rem' }}  placeholder='Date Of Birth' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "birth" onChange={handleChange} />
            </FormControl>
            <br></br>
            <br></br>
       <hr></hr>
            <br></br>
       
                <FormControl style={{ marginRight: '1rem' }}>
                    <Input type='email' width={{ base: '100%', md: '30rem' }}  height="4rem" placeholder='name@example.com'  sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500'  name = "email" onChange={handleChange}/>
                    <Text color='gray.500' fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}  >This will be your new Apple ID</Text>
                </FormControl>
                <br></br>
                <FormControl style={{ marginRight: '1rem' }}>
                    <Input type={showPassword ? "text" : "password"} width={{ base: '100%', md: '30rem' }}  height="4rem" placeholder='Password' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "password" onChange={handleChange} />
                </FormControl>
                
                <br></br>
                <FormControl style={{ marginRight: '1rem' }}>
                    <Input type='password' width={{ base: '100%', md: '30rem' }}  height="4rem" placeholder='Confirm Password' sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "confirmpassword" onChange={handleChange} />
                </FormControl>
                <br></br>
                <hr></hr>
                <br></br>
                <FormControl>
            <center>
                <Select height="4rem" width={{ base: '100%', md: '30rem' }} sx={{ fontSize: 'xl' }}  name = "nocode" onChange={handleChange}>
                    <option value="India">+91 (India)</option>
                    <option value="Bangladesh">+44 (Bangladesh)</option>
                    <option value="Australia">+1 (Australia)</option>
                    <option value="Canada">+22 (Canada)</option>
                    <option value="Germany">+86 (Germany)</option>
                    <option value="France">+1 (France)</option>
                    <option value="China">+45 (China)</option>
                    <option value="Bangladesh">+12 (Bangladesh)</option>
                    <option value="Cambodia">+48 (Cambodia)</option>
                    <option value="Argentina">+2 (Argentina)</option>
                    <option value="Belgium">+89 (Belgium)</option>
                    <option value="Albania">+42 (Albania)</option>
                    <option value="Brazil">+6 (Brazil)</option>
                    <option  value="Colombia">+56 (Colombia)</option>
                    <option value="Austria">+88 (Austria)</option>
                    <option value="Egypt">+9 (Egypt)</option>
                    <option value="Angola">+01 (Angola)</option>
                    <option value="Greece">+08 (Greece)</option>
                    <option  value="Algeria">+33 (Algeria)</option>   
                </Select>
            </center>
            </FormControl>
            <br></br>
            <FormControl style={{ marginRight: '1rem' }}>
                    <Input type='text' width={{ base: '100%', md: '30rem' }}  height="4rem" placeholder='Phone Number'  sx={{ '::placeholder': { fontSize: 'xl' } }} color='blue.500' name = "number" onChange={handleChange}/>
                </FormControl>
                <Center>
                <Text  color='gray.500' width={{ base: '100%', md: '30rem' }} height="4rem" >Be sure to enter a phone number you can always access. 
                It will be used to verify your identity any time you sign in on a new device or web browser. 
                Messaging or data rates may apply.</Text>
                </Center>
                
       </Box>
       <br></br>
       <hr></hr>
       <br></br>
                  
              <Box ml="0">
                  <Stack spacing={4}>
                <Center> <Checkbox defaultChecked>Annoucements</Checkbox> </Center>   
                    <Center>
                      <Text color='gray.500' width={{ base: '100%', md: '30rem' }} height="4rem">
                        Receive Apple emails and communications including announcements, marketing, recommendations, and updates about Apple products, services, and software.
                      </Text>
                    </Center>
                    <Center mt = "20px"><Checkbox defaultChecked>Apps, Music, TV and More</Checkbox></Center>
                    <Center>
                      <Text color='gray.500' width={{ base: '100%', md: '30rem' }} height="4rem">
                        Receive Apple emails and communications including new releases, exclusive content, special offers and marketing, and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay, and more.
                      </Text>
                    </Center>
                  </Stack>
            </Box>

        

       {showAlert && (
          <Alert status="success">
            <AlertIcon />
            User registered successfully!
          </Alert>
        )}

<br></br><br></br><br></br>

       <Button  h={{ base: '1rem', md: '3rem' }} fontSize={{ base: 'lg', md: '2xl' }} colorScheme="blue" type = "submit" >Continue</Button>
       </form>
    </div>
    
    )
}

export default Signup;