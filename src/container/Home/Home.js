import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import PageHome from "../../components/PageHome/PageHome";
import axiosApi from "../../axios-api";
import {NavLink} from "react-router-dom";
import './Home.css'
class Home extends Component {
    state = {
        posts: null

    };


    async componentDidMount() {
        const getPosts = await axiosApi.get('posts.json');
        if (getPosts.data) {
            const posts = await getPosts.data;
            this.setState({posts})

        }
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <PageHome>
                    {this.state.posts && (Object.keys(this.state.posts).map((id) => {
                        return <Fragment key={id}>
                            <div className={'post-home'}>
                                <h1 style={{ margin: '0'}}>Title:</h1>
                            <h2 className={'home-title'} >{this.state.posts[id].post.title}</h2>

                            <NavLink className={"read"} to={'/Post/' + id}>

                                Read more >>
                            </NavLink>
                            </div>
                        </Fragment>
                    }))}
                </PageHome>


            </Fragment>
        );
    }
}

export default Home;