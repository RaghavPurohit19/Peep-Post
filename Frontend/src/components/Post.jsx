import { Avatar, Box, Flex, Link, Text, Image } from "@chakra-ui/react"
import {Menu, MenuButton, MenuItem, MenuList, Portal, useToast} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs"
import Actions from "./Actions"
import {useEffect, useState} from 'react'
import useShowToast from "../hooks/useShowToast";

const Post = ({post, postedBy}) => {

    const toast = useToast();

    const copyURL = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
            // console.log("URL copied to Clipboard");
            toast({
                title : "Account Created",
                status : "success",
                description : "Profile link copied",
                duration : 3000,
                isClosable : true,
            });
        });
    };

    const [liked, setLiked] = useState(false);
    const showToast = useShowToast();
    const [user, setUser] = useState(null);

    // fetch user data
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch("/api/users/profile/" + postedBy);
                const data = await res.json();
                console.log(data);
                if(data.error){
                    showToast("Error", data.error, "error");
                    return;
                }
                setUser(data);
            } catch (error) {
                showToast("Error", error.message, "error");
                setUser(null); 
            }
        }

        getUser();
    }, [postedBy, showToast]);

    if(!user) return null;
  return (
    <Link to={"/markzuckerberg/post/1"}>
        <Flex gap={3} mb={4} py={5}>
            <Flex flexDirection={"column"} alignItems={"center"}>
                <Avatar size={"md"} name={user.name} src={user?.profilePic} />
                <Box w='1px' h={"full"} bg='gray.light' my={2} ></Box>
                <Box position={"relative"} w={"full"}>

                    {post.replies.length === 0 && <Text textAlign={"center"}>😴</Text>}
                    {post.replies[0] && (
                        <Avatar size="xs" name="John Doe" src={post.replies[0].userProfilePic} position={"absolute"} top={"0px"} left={"15px"} padding={"2px"} />
                    )}
                    {post.replies[1] && (
                        <Avatar size="xs" name="John Doe" src={post.replies[1].userProfilePic} position={"absolute"} bottom={"0px"} right={"-5px"} padding={"2px"} />
                    )}
                    {post.replies[2] && (
                        <Avatar size="xs" name="John Doe" src={post.replies[2].userProfilePic} position={"absolute"} bottom={"0px"} left={"4px"} padding={"2px"} />
                    )}
                    {/* <Avatar size="xs" name="John Doe" src="https://bit.ly/dan-abramov" position={"absolute"} top={"0px"} left={"15px"} padding={"2px"} /> */}
                    {/* <Avatar size="xs" name="John Doe" src="https://bit.ly/prosper-baba" position={"absolute"} bottom={"0px"} right={"-5px"} padding={"2px"} /> */}
                    {/* <Avatar size="xs" name="John Doe" src="https://bit.ly/code-beast" position={"absolute"} bottom={"0px"} left={"4px"} padding={"2px"} /> */}
                </Box>
            </Flex>

            <Flex flex={1} flexDirection={"column"} gap={2}>
                <Flex justifyContent={"space-between"} w={"full"}>
                   <Flex w={"full"} alignItems={"center"}>
                    <Text fontSize={"sm"} fontWeight={"bold"}>{user?.username}</Text>
                    <Image src='/verified.png' w={4} h={4} ml={1} />
                   </Flex>
                   <Flex gap={4} alignItems={"center"}>
                        <Text fontStyle={"sm"} color={"gray.light"}>1d</Text>
                        <Box className="icon-container">
                            <Menu >
                                <MenuButton>
                                    <BsThreeDots></BsThreeDots>    
                                </MenuButton>
                                <Portal>
                                    <MenuList bg={"gray.dark"}>
                                        <MenuItem onClick={copyURL}> copy link </MenuItem>
                                    </MenuList>
                                </Portal>
                            </Menu>
                        </Box>
                   </Flex> 
                </Flex>

                <Text fontSize={"sm"}> {post.text} </Text>
                {post.img && 
                    <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                        <Image src={post.img} w={"full"} />
                    </Box>
                }
                <Flex gap={3} my={1}>
                    <Actions liked={liked} setLiked={setLiked} />
                </Flex>
                
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"} fontSize='sm'>
                        {post.replies.length} replies
                    </Text>
                    <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
                    <Text color={"gray.light"} fontSize='sm'>
                        {post.likes.length} likes
                    </Text>
			    </Flex>
            </Flex>
        </Flex>
    </Link>
  )
}

export default Post