import React from "react";
import UserClass from "./UserClass";




class About extends React.Component{

    constructor(props){
        super(props);
        // console.log("parent constructor");
    }

    componentDidMount(){
        // console.log("parent component did mount");
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <h1>About</h1>
                <h2>This is react series</h2>
                <UserClass name={"Abhisekh(class)"} location={"Rajbiraj(class)"}/>
            </div>
        );
    }
}












// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is react series</h2>

//             <UserClass name={"Abhisekh(class)"} location={"Rajbiraj(class)"}/>
//         </div>
//     );
// };

export default About;