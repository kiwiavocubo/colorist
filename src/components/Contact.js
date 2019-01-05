import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
        constructor(props){
                super(props)
                this.state={
                        fname:'',
                        lname:'',
                        email:'',
                        message:'',
                        mailSent:false,
                        error:null
                        
                }
        }
        handleFormSubmit(e){
                e.preventDefault();
                const fname = document.getElementById('fname').value;
                const lname = document.getElementById('lname').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                axios({
                    method: 'post',
                    url: "http://localhost:3000/send",
                    data:{
                            fname:fname,
                            lname:lname,
                            email:email,
                            message:message
                    }
                  })
                .then((response)=>{
                        if (response.data.msg === 'success'){
                            alert("Message Sent."); 
                            this.resetForm()
                        }else if(response.data.msg === 'fail'){
                            alert("Message failed to send.")
                        }
                    })
                .catch(error => this.setState( { error: error.message } ));
        }
        render() {
                return (
                        <div className="form">
                                <p>Contact Us</p>
                                <form method="post">
                                        <label className="labels">First Name</label>
                                        <input type="text" id="fname" name="firstname" 
                                                value={this.state.fname}
                                                onChange={e =>this.setState({fname:e.target.value})}
                                        />
                                        <label className="labels">Last Name</label>
                                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." 
                                                 value={this.state.lname}
                                                onChange={e => this.setState({ lname: e.target.value })}
                                        />
                                        <label className="labels">Email</label>
                                        <input type="email" id="email" name="email" placeholder="xxx@mail.com" 
                                                 value={this.state.email}
                                                 onChange={e => this.setState({ email: e.target.value })}
                                        />

                                        <label className="labels">Subject</label>
                                        <textarea id="message" name="message" placeholder="Write something.."
                                            onChange={e => this.setState({ message: e.target.value })}
                                                value={this.state.message}
                                        ></textarea>
                                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                                        <div> 
                {this.state.mailSent  &&
                  <div className="sucsess">Thank you for contcting me.</div>
                }
                {this.state.error  &&
                  <div className="error">Sorry we had some problems.</div>
                }
              </div>
                                </form>
                        </div>
                );
        }
}

export default Contact;