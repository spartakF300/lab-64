import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import PageAdd from "../../components/PageAdd/PageAdd";
import axiosApi from "../../axios-api";
import Spinner from "../../components/UI/Spinner/Spinner";

class Add extends Component {
    _isMounting = false;
    state = {
        title: '',
        text: '',
        loading: false,
    };

    valueChanger = e => this.setState({[e.target.name]: e.target.value});


    postHandler = async (event) => {
        event.preventDefault();
        this._isMounting = true;
        let now = new Date();
        const post = {
            post: {
                dateTime: now,
                title: this.state.title,
                message: this.state.text,
            }
        };
        this.setState({loading: true});
        await axiosApi.post('/posts.json', post);
        this.props.history.push('/');
        if( this._isMounting ) {
            this.setState({loading: false});
        }
    };
componentWillUnmount() {
    this._isMounting = false;
}

    render() {
        let addPage = (
            <PageAdd
                onsubmit={this.postHandler}
                valChangerTitle={this.valueChanger}

            />
        );
        if (this.state.loading) {
            addPage = <Spinner/>
        }
        return (
            <Fragment>
                <Header/>
                {addPage}
            </Fragment>
        );
    }
}

export default Add;