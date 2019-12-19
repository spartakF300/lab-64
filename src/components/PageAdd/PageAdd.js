import React, {Fragment} from 'react';
import './PageAdd.css'
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";


const PageAdd = (props) => {
    return (
        <Fragment>
            <div className='box-img'>
                <img className='img' src="http://hq-walls.ru/foto/23/abstraktnye_temnye_soty_1920x1080.jpg" alt=""/>
            </div>
            <div className='container'>
                <div className='windows'>
                    <form>
                        <h1>Add new post</h1>
                        <div className='block-input'>
                            <p>Title:   </p>
                            <Input  getTitle={props.valChangerTitle}/>
                        </div>
                        <div className="block-textarea">
                            <p>Message:</p>
                            <Textarea getMessage={props.valChangerTitle}/>
                        </div>
                        <div className='block-btn'>
                            <Button onclick={props.onsubmit} class={'add-post'}>ADD POST</Button>
                        </div>
                    </form>
                </div>
            </div>

        </Fragment>
    );
};

export default PageAdd;