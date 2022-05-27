import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Userview() {
  const [userPost, setUserPost] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("user params", id);

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log("user", res);
        setUserPost(res.data);
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
      <center>
        <h4>
          <u>User Details</u>
        </h4>
        <tr>
          <p>
            <td>
              {" "}
              User Name: <h4> {userPost.name}</h4>
            </td>
          </p>
          <p>
            <td>
              User Email:<h4> {userPost.email}</h4>
            </td>
          </p>
        </tr>
        <p>
          <button onClick={back}>Back</button>
        </p>
      </center>
    </div>
  );
}

export default Userview;
