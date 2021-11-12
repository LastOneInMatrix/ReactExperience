import { useEffect, useState } from "react";
import {PeopleRenderer} from "./TestComponents";

export default function PeopleUseEffect() {
    const [json, setJson] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setJson(data));
    }, []);

    return <PeopleRenderer data={json}/>
}