import React from 'react';
import '../styles/LandingPage.css';
import { Link, useLocation } from 'react-router-dom';


const SectionContainer =(props)=>{
    return(
                <section className="register-section student-section">
                    <div className="" style={{height:'20%',width:"100%"}}>
                    <h2>{props.title}</h2>
                    </div>
                    <div className="" style={{height:'43%',width:"100%"}}>
                    <p>{props.desc}</p>
                    </div>
                    <div className="" style={{height:'36%',width:"100%"}}>
                    <button className="register-button">
                        <Link style={{color:"white"}} to={`${props.url}`}>{props.btntitle}</Link></button>
                    </div>

                   
                   
                  
                </section>
    )
}
const LandingPage = () => {

    const location = useLocation();

if (location.pathname === '/'){

}
console.log(
    location.pathname
)

    return (
        <div className="landing-page">
            <header className="header">
                <h1>[Institution]</h1>
                <h1>Internship & Attachment Management System</h1>
                <p>Eliminate paperwork and streamline your internship experience</p>
            </header>

            <main className="main-content">
                

<SectionContainer
 url="student-register"
  desc="Register to log your daily activities, track your progress, and receive feedback from supervisors."
   title="For Students"
    btntitle="Student Registration" 
    />

<SectionContainer
 url="supervisor-register"
  desc="Assess student progress, provide feedback, and submit reports to the institution."
   title="For Supervisors"
    btntitle="Supervisor Register" 
    />

<SectionContainer
 url="admin-register"
  desc="Manage students, supervisors, and oversee the entire internship program."
   title="For Admins"
    btntitle="Admin Register" 
    />
               
            </main>
            <br>
            </br>

            <footer className="footer">
                <p>&copy;Bryghton 2024 Internship & Attachment Management System</p>
            </footer>
        </div>
    );
};

export default LandingPage;
