import React from "react";
type Comp1PropsType = {
    data: any;
}
export const PeopleRenderer = (props: Comp1PropsType) => {
    console.log(props.data)
    return <div>
        {props.data && props.data.map((i: any) =>  <p>{i.title}</p>)}
    </div>
}