import React from "react";
import resume from "../resume.json"

class ExperienceInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }
    render() {
        return (
            <div>
                <h3 id="title">Projects</h3>
                <hr/>
                {resume.projects.map((col, row) => 
                <ProjectWrapper key={row} {...col}/>)}
                <EducationWrapper />

                <h3 id="title">Work</h3>
                <hr/>

                <h4>{resume.work[0].name}</h4>
                <h5>{resume.work[0].Position}</h5>
                <h6>{resume.work[0].startDate} - {resume.work[0].endDate}</h6>
                <p>{resume.work[0].summary}</p>

                <h3 id="title">Other</h3>
                {resume.volunteer.map((col, row) => 
                <VolunteerWrapper key={row} {...col}/>)}
            </div>
        )
    }
}

class EducationWrapper extends React.Component{
    render() {
        return (
            <div>
                <h3 id="title">Education</h3>
                <hr/>
                <h3>{resume.education[0].institution}</h3>
                <h6 id="educationname">{resume.education[0].startDate} - {resume.education[0].endDate}, {resume.education[0].studyType} in {resume.education[0].area}</h6>
                <h3>{resume.education[1].institution}</h3>
                <h6 id="educationname">{resume.education[1].startDate} - {resume.education[1].endDate}</h6>
                <this.educationHelper />
            </div>
        )
    }
    educationHelper(){
        return(
            <div>
                <h6>Relevant Courses Include;</h6>
                <div class="flex-other">
                    {resume.education[0].courses.map((col, row) =>
                        <h6 id="courses" key={row}>{col}</h6>)}
                </div>
            </div>
        )
    }
}

class VolunteerWrapper extends React.Component{
    render(){
        return(
            <div>
                <h5>{this.props.organization}</h5>
                <h6>{this.props.date}</h6>
            </div>
        )
    }
}

class ProjectWrapper extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h6>{this.props.date}</h6>
                <h5>{this.props.description}</h5>
                <div id="projectwrapper" class="flex-list">
                    {this.props.keywords.map((col, row) =>
                    <h6 id="keyword" key={row}>{col}</h6>)}
                </div>
            </div>
        )
    }
}

class WorkWrapper extends React.Component{

}

export default ExperienceInfo;