import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            useinfo:{
                name:"Sachin",
                location:"jaipur",
                contact:"sy083328@gmail.com",
                photo:""
            },
        }
    }
    

async componentDidMount(){
    const data = await fetch("");
    const json = await data.json;

    this.setState({
        userinfo:json,
    })
}
    render(){
        const {name,location,photo,contact}=this.state.useinfo;
        return (
            <div className="user-comp"> 
                <img alt="iamge of the person" src={photo}></img>
                <h2> {name}</h2>
                <h3>{ "Loaction :"+location }</h3>
                <h4> {"Contat to me here "+contact}</h4>
            </div>
            );
    }
}
export default UserClass
/**
 * -----MOUNTING------
 * constructor (dummy)
 * Render( dummy )
 *      <HTML dummy>
 * ComponentsDidMount 
 *      <Api call>
 *      <this.setState> --->> state variable is updated
 * 
 * -----UPDATING-----
 *      render(API data-- updated)
 *      < HTML (new api data) >
 * ComponentDidUpdate
 * 
 * ----- UNMOUNTING-----
 * ComponentWillUnnmount
 */