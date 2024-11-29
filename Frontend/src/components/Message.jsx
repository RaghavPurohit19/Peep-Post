import { Avatar, Flex, Text } from "@chakra-ui/react"


const Message = ({ownMessage}) => {
  return (
    <>
        {ownMessage ? (
            <Flex gap={2} alignSelf={"flex-end"}>
                <Text maxW={"350px"} bg={"blue.900"} p={1} borderRadius={"md"}>
                    lorem sd odsdofn dsldnm lgjrir dlf dfn,d  flsndfl  ldnfsl sl  lsdnflsdnfsd  fnsdnfnds  dnf df d dfjnl /mmm ndn ln . .dsnfsdn   .
                </Text>
                <Avatar src="" w={"7"} h={7} />
            </Flex>
        ) : (
            <Flex gap={2} >
                <Avatar src="" w={"7"} h={7} />
                <Text maxW={"350px"} bg={"gray.700"} p={1} borderRadius={"md"}>
                    lorem sd odsdofn dsldnm lgjrir snsdfkl oijlslddd ldfls llksd  fnsdnfnds  dnf df d dfjnl /mmm ndn ln . .dsnfsdn   .
                </Text>
                
            </Flex>
        )}
    </>
  )
}

export default Message