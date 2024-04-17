import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        // this.state={
        //     count:0
        // }
        // console.log("child constructor");
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy-photo.com"
            }
        }
    }

    async componentDidMount(){
        // console.log("child component did mount");
        const data=await fetch("https://api.github.com/users/abhisekhjha");
        const json=await data.json();
        
        this.setState({
            userInfo:json
        });
        console.log(json);


    }


    
    render(){
        // console.log("child render");

        // const{name,location}=this.props;
        // const{count}=this.state;

        const{name,location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
                {/* <h1>Count:{count}</h1>
                <button onClick={()=>{
                    //never update state variables directly
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Count Increase</button> */}
                <img src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:abhisekhj0@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;