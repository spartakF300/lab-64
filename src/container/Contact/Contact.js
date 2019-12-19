import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import './Contact.css'
import {NavLink} from "react-router-dom";
class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <div className="block-newsletter">
                    <div className="container block-newsletter__container">
                        <h5 className="main-title main-title--light main-title--m-top-bottom">subscribe to our newsletter</h5>
                        <div className="block-newsletter__form-block">
                            <form>
                                <input type="email" placeholder="Enter Your Email Address" className="field"/>
                                <button className="btn-contact btn--wide btn--m-top-bottom" type="submit">Submit</button>

                            </form>
                            <NavLink className="logo" to="">
                                <b className="logo__bold">. one</b>Town
                            </NavLink>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default Contact;