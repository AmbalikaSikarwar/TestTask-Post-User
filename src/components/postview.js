import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Postview() {
  const [Postuser, setPostUser] = useState([]);
  const [userName, setUserName] = useState([]); 

  const navigate = useNavigate();

  const { id } = useParams();
  console.log("post param", id);

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("user", res);
        setPostUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    fetchData();

  }, []);

  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <h4>
        <u>Post Details</u>
      </h4>
      Post Title:<h5>{Postuser.title}</h5>
      Post Body: <h5> {Postuser.body}</h5>
    
      <p>
        <button onClick={back}>Back</button>
      </p>
    </div>
  );
}

export default Postview;
