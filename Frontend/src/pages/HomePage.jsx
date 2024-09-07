import { Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const showToast = useShowToast();
    useEffect(() => {
        const getFeedPosts = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/posts/feed");
                const data = res.json();
                console.log(data);
            } catch (error) {
                showToast("Error" , error.message, "error");
            } finally {
                setLoading(false);
            }
        };
        getFeedPosts();
    }, [showToast]);
    
    return (
        <Link to = {"/markzuckerberg"}>
            <Flex w={"full"} justifyContent={"center"}>
                <Button mx={"auto"}>Visit Profile Page</Button>
            </Flex>
        </Link>
    )
}

export default HomePage;