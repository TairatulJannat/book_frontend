import React,{useState} from "react";

const Hook =() =>{
    const [nameState,setNameState] = useState({name: "jhon", });
    const [ageState,setAgeState] = useState({age: "20"});
    const [addState,setAddState] = useState({address: "feni"});

    const clickHandeler =() =>{
        setNameState({
            name: "khan"
        })
        // setAgeState({
        //     age: 40
        // })
        setAddState({
            address: "Dhaka"
        })


    }




    return(
    <div>
        <button onClick={clickHandeler}>Click</button>
        <h1>Name: {nameState.name}</h1>
        <h1>Age: {ageState.age}</h1>
        <h1>Address: {addState.address}</h1>
    </div>
    ) 
}
export default Hook