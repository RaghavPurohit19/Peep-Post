import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        // console.log(data);
        if(data.error){
          showToast("Error", data.error, "error");
          return ;
        }
        setUser(data);
      } catch (error) {
        // console.log(error);
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };
    
    getUser();
  }, [username, showToast]);

  if(!user && loading){
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    )
  }
  if(!user && !loading) return <h1>User not found</h1>;
  
  return (
    <>
      <UserHeader user={user} />
      <UserPost likes={1200} replies={500} postImg={"/post1.png"} postTitle={"Let's talk about threads "}/>
      <UserPost likes={2831} replies={722} postImg={"/post4.jpg"} postTitle={"I am at work. Just Enjoying 😉"}/>
      <UserPost likes={722} replies={367} postImg={"/post3.png"} postTitle={"I am laying off my employees.😎"}/>
      <UserPost likes={272} replies={83} postTitle={"This is my first post. "}/>
    </>
  )
}

export default UserPage