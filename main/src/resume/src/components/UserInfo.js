import resume from "../resume.json"
import React from "react"

class UserInfo extends React.Component{
    render(){
        return (
            <div>
                <h1 id="maintitle">{resume.basics.name}</h1>
                <h6 id="profile">{resume.basics.email}</h6>
                <h6 id="profile">{resume.basics.phone}</h6>
                <h6 id="profile">{resume.basics.url}</h6>
                <ProfileWrapper />

            </div>
           
        )
    }
}

class ProfileWrapper extends React.Component{
    render(){
        return (
            <div>
                {resume.basics.profiles.map((col, row) =>
                    <this.ProfileHelper key={row} {...col} />)}
            </div>
            
        )
    }
    ProfileHelper(props){
        return (
            <div>
                <h6 id="socials">{props.network}: {props.url}</h6>
            </div>
        )
    }
}

export default UserInfo;