import React, {Component} from "react"

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading">Let's Get In Touch!</h2>
                            <hr className="my-4"/>
                            <p className="mb-5">Ready to start your next project with us? That's great! Give
                                us a call or send us an email and we will get back to you as soon as possible!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto text-center">
                            <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                            <p>123-456-6789</p>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <i className="far fa-envelope fa-3x mb-3 sr-contact"></i>
                            <p>
                                <a href="mailto:your-email@your-domain.com">qiqitech@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact