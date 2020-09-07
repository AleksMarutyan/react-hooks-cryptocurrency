import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';


const Loading = (props) => {
    const {width, height} = props;

    return (
        <div 
            className="Loading"
            style = {{
                width: width,
                height: height
            }}
        />
    )
};

Loading.defaultProps = {
    width: '30px',
    height: '30px'
}
Loading.propTypes = {
    width : PropTypes.string,
    height : PropTypes.string
}
export default Loading;