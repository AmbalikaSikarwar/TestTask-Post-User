import { useEffect , useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Post = () => {
   const [post, setPost] = useState([])
   const [userData, setUserData] = useState([])

    const fetchData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log("post",res);
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

  
    const fetchUserData = () =>{
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log("user",res);
            setUserData(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
  
      }  

    useEffect(() => {
        fetchData();
        fetchUserData(); 

    }, []);

    return (
          <div >
          <Table striped bordered hover variant="light">
          <thead>
                       <tr>
                           <th>Post Title</th>
                       </tr>
                   </thead>
                   <tbody>    
          
          {
                post.map((posts, index) =>{
                    return (
                       <tr><div key={index}>
                        
                        <td>{posts.title}</td>
                        </div></tr> 
                    )
                })
            }
            </tbody></Table>
          </div>
       );
};

export default Post;






import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Post  from "./post";
import Table from 'react-bootstrap/Table';

function List() {
	const [{ posts, users }, setData] = useState({ post: [], user: [] });
	useEffect(() => {
		const fetchData = async () => {
			const userResp = await axios.get(
				"https://jsonplaceholder.typicode.com/users",
			);
			const postResp = await axios.get(
				"https://jsonplaceholder.typicode.com/posts",
			);
			setData({ posts: postResp.data, users: userResp.data });
		};

		fetchData();
	}, []);

	const filteredPosts = useMemo(() => {
		const filteredPosts = [];
		if (posts)
		for (let i = 0; i < posts.length && i < 30; i++) {
			filteredPosts.push(posts[i]);
		}
	return filteredPosts;
}, []);

	return (
		<div>
		<Table>
		<thead>
		<div class="row">
					<div class="col">
						<th>POST TITLE</th>
					</div>
					<div class="col">
						<th>USERNAME</th>
					</div>
				</div>
			</thead>
		</Table>
		
		{filteredPosts.map((post, index) => (
			<Post post={post} users={users} key={post.id} />
		))}


		</div>
	);
}

export default List;