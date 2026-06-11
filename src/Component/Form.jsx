const Form=(props)=>{
    return(

        <div className="container">
                 { /*<h1 className='heading1'>Contact Form</h1>*/}
               <h1 className='heading1'>{props.heading}</h1>
                <div className="main">
                    <p className='label'>Name</p>
                    <input className='textBox' placeholder='Enter your name'/>
                    <p className='label'>Email</p>
                    <input className='textBox' placeholder='Enter your Email' />
                    <p className='label'>Address</p>
                    <input className='textBox' placeholder='Enter your Address' /><br></br>
                    <button className='button'>Submit</button>
                </div>

            </div>
    );

}
export default Form;