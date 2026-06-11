import './Homepage.css';
import Form from './Component/Form';


/*JSX Rules
Rule 1: Return a Single Parent Element
 return (
        <div>
            <h1>Hello</h1>
            <p>Welcome</p>
        </div>
    );
Rule 2: Use className Instead of class
<div className="container"></div>

Rule 3: Close All Tags
<img src="logo.png" />

Rule 4: JavaScript Expressions Use Curly Braces


*/

function message() {
  return "Good Morning";
}

const Homepage = () => {
    const a = "Sumith";
    //obeject declaration 
    const student = {
        name: "John",
        age: 22
    };
    return (
        <div>
            {/* <div>
            <h1 className="head">Hello</h1>
            {/*Dynamic content *
            <p>Welcome{a}</p>
            <h2>20+30={20+30}RS</h2>
            <h1>{message()}</h1>
            <h2>{student.name}</h2>
            <p>{student.age}</p>
            {/*Static content *
             <h1>Arts Internship program</h1>
             <p>Welcome to React Training</p>
             </div>*/}
             
             {/*Form creation */}
               
                <Form heading="Contact Form"/>

                <Form heading="Register Form"/>
                
            

           {/* <div>
                <Form heading="Contact form"/>
                 <Form heading="Registeration form"/>
            </div> */}
             
            
        </div>
    );
};
export default Homepage;