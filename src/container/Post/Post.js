import React, {Component} from 'react';
import './Post.css'
import axiosApi from "../../axios-api";
import Header from "../../components/Header/Header";
import PageHome from "../../components/PageHome/PageHome";

class Post extends Component {
    _isMounting = false;
    state = {
        post: null,
        message: '',
        title: '',
    };

    async componentDidMount() {
        this._isMounting = true;
        const res = await axiosApi.get(`posts/${this.props.match.params.id}.json`);
        if (res.data) {
            const post = res.data;
            if (this._isMounting) {
                this.setState({post})
            }
        }
    }
    componentWillUnmount() {
        this._isMounting = false;
    }
    deletePost = async (e) => {
        e.preventDefault();
        await axiosApi.delete(`posts/${this.props.match.params.id}.json`);
        this.props.history.replace('/');
    };
    putPost = async (e) => {
        e.preventDefault();
        const now = new Date()
        const post = {
            post: {
                title: this.state.title,
                message: this.state.message,
                dateTime: now
            }

        };
        await axiosApi.put(`posts/${this.props.match.params.id}.json`, post);
        this.props.history.replace('/');
    };
    inputChenge = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };



    render() {
        return this.state.post && (
            <div className={'wrapper'}>
                <Header/>
                <PageHome>
                    <form className={"form-post"} style={{background: '#fff', width: '40%', margin: '50px auto'}}>
                        <h5 className="title">DataTime: {this.state.post.post.dateTime}</h5>
                        <label htmlFor="text">Text</label>
                        <input className="title-post" name="title" onChange={this.inputChenge}
                               defaultValue={this.state.post.post.title}
                               type="text"/>
                        <label htmlFor="message">Message </label>
                        <textarea id={"message"} className="message-text" name="message" onChange={this.inputChenge}
                                  defaultValue={this.state.post.post.message}
                                  type="textarea"/>
                        <button className={'btn-post'} onClick={this.putPost}>edit</button>
                        <button className={'btn-post'} onClick={this.deletePost}>delete</button>

                    </form>
                </PageHome>
            </div>
        );
    }
}

export default Post;