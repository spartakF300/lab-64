import React, {Fragment} from 'react';
import './PageHome.css'

const PageHome = (props) => {
    return (
        <Fragment>
            <div className="pageHomWrap">

                {props.children}
            </div>
        </Fragment>
    );
};

export default PageHome;