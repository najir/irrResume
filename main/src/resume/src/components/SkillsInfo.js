import resume from "../resume.json"
import React from "react"

class SkillsInfo extends React.Component{
    render(){
        return(
            <div>
                <SkillsWrapper />
            </div>
        )
    }
}

class SkillsWrapper extends React.Component{
    render(){
        return(
            <div>
                {resume.skills.map((col, row) =>
                    <this.SkillsHelper key={row} {...col} />)}
            </div>
        )
    }

    SkillsHelper(props){
        return(
            <div>
                <h5 id="skillname">{props.name}</h5>
                <progress id="experiencelevel" max="5" value={props.level}>Experience</progress>
                <div class="flex-list">
                    {props.keywords.map((col, row) =>
                    <h6 id="keyword" key={row}>{col}</h6>)}
                </div>
            </div>
        )
    }
}

export default SkillsInfo