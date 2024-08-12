import { Flex, Image, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb='12'>
      <Image
        cursor={"pointer"}
        alt = 'logo'
        w={50}
        src = {colorMode === "dark" ? "/PP-light.png" : "/PP-dark.png"}
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default Header