// import React from "react";

// class UserClass extends React.Component{

//     constructor(props){
//         super(props);

//         // this.state={
//         //     count:0
//         // }
//         // console.log("child constructor");
//         this.state={
//             userInfo:{
//                 name:"Dummy",
//                 location:"Default",
//                 avatar_url:"http://dummy-photo.com"
//             }
//         }
//     }

//     async componentDidMount(){
//         // console.log("child component did mount");
//         const data=await fetch("https://api.github.com/users/abhisekhjha");
//         const json=await data.json();
        
//         this.setState({
//             userInfo:json
//         });
//         console.log(json);


//     }


    
//     render(){
//         // console.log("child render");

//         // const{name,location}=this.props;
//         // const{count}=this.state;

//         const{name,location,avatar_url}=this.state.userInfo;
//         return(
//             <div className="user-card">
//                 {/* <h1>Count:{count}</h1>
//                 <button onClick={()=>{
//                     //never update state variables directly
//                     this.setState({
//                         count:this.state.count+1
//                     })
//                 }}>Count Increase</button> */}
//                 <img src={avatar_url}></img>
//                 <h2>Name:{name}</h2>
//                 <h3>Location:{location}</h3>
//                 <h4>Contact:abhisekhj0@gmail.com</h4>
//             </div>
//         )
//     }
// }

// export default UserClass;

import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo.com"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/abhisekhjha");
        const json = await data.json();

        this.setState({
            userInfo: json
        });
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full ">
                    <div className="flex items-center justify-center mb-6">
                        <img 
                            src={avatar_url} 
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full border-4 border-blue-500"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                        <h3 className="text-lg font-medium mb-4">{location}</h3>
                        <p className="text-base text-gray-600">Contact: abhisekhj0@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserClass;
