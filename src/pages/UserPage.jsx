import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPost likes={1200} replies={500} postImg={"/post1.png"} postTitle={"Let's talk about threads "}/>
      <UserPost likes={2831} replies={722} postImg={"/post4.jpg"} postTitle={"I am at work. Just Enjoying 😉"}/>
      <UserPost likes={722} replies={367} postImg={"/post3.png"} postTitle={"I am laying off my employees.😎"}/>
      <UserPost likes={272} replies={83} postTitle={"This is my first post. "}/>
    </>
  )
}

export default UserPage