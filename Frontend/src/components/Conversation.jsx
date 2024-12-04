import { Avatar, AvatarBadge, Flex, Stack, useColorModeValue, WrapItem, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Conversation = ({conversation}) => {
    console.log(conversation);
    const user = conversation.participants[0];
    const lastMessage = conversation.lastMessage;
  return (
    <Flex
        gap={4} alignItems={"center"} p={"1"} 
        _hover={{
            cursor: "pointer",
            bg: useColorModeValue("gray.600", "gray.dark"),
            color:"white"
        }}
    >
        <WrapItem>
            <Avatar size={{
                base: "xs",
                sm: "sm",
                md: "md"
            }} src='https://bit.ly/broken-link' >
            <AvatarBadge boxSize={"1em"} bg={"green.500"} />
            </Avatar>
        </WrapItem>

        <Stack direction={"column"} fontSize={"sm"}>
            <Text fontWeight="700" display={"flex"} alignItems={"center"} >
                {user.username} <Image src='/verified.png' w={4} h={4} ml={1} />
            </Text>
            <Text fontSize={"xs"} display={"flex"} alignItems={"center"} gap={1} >
                {lastMessage.text.length > 18 ? lastMessage.text.substring(0, 18) + "..." : lastMessage.text}
            </Text>
        </Stack>
    </Flex>
  )
}

export default Conversation