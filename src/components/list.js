import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Post  from "./post";
import Table from 'react-bootstrap/Table';

function List() {
	const [search, setSearch] = useState("");

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



	const handleChange = event => {

		setSearch(event.target.value)
	  }

	const filtered = !search
	? posts
	: posts.filter((item) => 
	item?.title.toLowerCase().includes(search.toLowerCase())
		);

	return (
		<div id="main-box">
		<Table>
		<thead>
		<input type="text" value={search} onChange={handleChange}  placeholder="Search by title..."></input>{"  "}<button type="submit" class="btn btn-dark" >Search</button>
      
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

			{filtered?.map((post) => (
				<Post post={post} users={users} key={post.id} />
			))}
		</div>
	);
}

export default List;