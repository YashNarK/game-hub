import { Box } from "@chakra-ui/react";

const Footer = () => {
    const currentYear: number = new Date().getFullYear();
    
  return (
    <Box justifyContent='center' textAlign='center' fontSize='lg' mx='auto' my={5}>
        © {currentYear} YashNarK. All rights reserved.
    </Box>
  )
}

export default Footer