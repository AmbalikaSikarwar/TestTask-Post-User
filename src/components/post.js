import { useMemo } from "react";
import User  from "./user";
import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";

function Post({ post: {id, title, userId }, users }) {
  
    const user = useMemo(() => users.find(({ id }) => id === userId), [
        users,
        userId,
    ]);


   return (
        <div>
        
            <Table>
                <tbody>
                    <div class="row">
                        <div class="col">
                            <td><Link to ={`/postview/${id}/`}>{title}</Link></td>
                        </div>
                        <div class="col">
                       <td><Link to= {`/userview/${user?.id}`}><User user={user} /></Link></td>
                        </div>
                        </div>
                </tbody>
            </Table>

        </div>
    );
}
export default Post;