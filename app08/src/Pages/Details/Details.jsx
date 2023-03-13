import {useEffect, useState} from "react";
import {link, useParams} from "react-router-dom";
import {users} from "../../data.js";


const Details = ()=>{
    const parameters = useParams();
    const [user, setUser] = useState(undefined);

    useEffect(()=>{
        const {id} = parameters;

        const result = users.find((user)=> user.id === id);

        if(result) {
            setUser(result);
        }

    }, [parameters]);

    return (
        <div>
            <h1>Details</h1>
            <div>
                <h2>{user.nome}</h2>
                <p>{user.description}</p>
            </div>
        </div>
    );
};

export default Details;