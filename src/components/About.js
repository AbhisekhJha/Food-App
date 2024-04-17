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
        //console.log("parent render");
        return (
            // <div>
            //     <h1>About</h1>
            //     <h2>This is a food app</h2>
            //     <UserClass name={"Abhisekh(class)"} location={"Rajbiraj(class)"}/>
            // </div>
            <div className="min-h-screen bg-gray-100">
    <div className="container mx-auto px-4 py-16">
        <section className="mb-12 text-center">
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800">About Us</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to our food app! Indulge in a culinary journey with us where you can explore a variety of dishes 
                from local favorites to international delights. Our mission is to provide you with a seamless and 
                delightful food ordering experience that satisfies your cravings.
            </p>
        </section>
        <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">Meet the Team</h2>
            <div className="flex justify-center">
                <UserClass name={"Abhisekh(class)"} location={"Rajbiraj(class)"} />
            </div>
        </section>
    </div>
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