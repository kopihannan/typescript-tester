import { type } from "os";
import React from "react";


type usersProps = {
    users:{
        userId: number;
        id: number;
        title: string;
        body: string;
    }[]
}

const Hello = (props: usersProps) => {
    
  return <div>
   {
    props.users.map(({id, userId, title, body}: any) => {
        return ( <div style={{ background: "gray", margin: "20px", padding: "20px", borderRadius: "20px", boxShadow: "10px, 10px, 30px, 30px", color: "white", fontWeight: 600}} key={id}>
            <h1>{id}</h1>
        <p>{title}</p> 
        <p>{body}</p> 
        </div>)
     }) }
  </div> 
};

export default Hello;
