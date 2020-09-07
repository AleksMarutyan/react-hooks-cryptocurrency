import React from 'react';
const MyHOC = (Component) => {
    const obj1 = {
        push: (url) => {
            console.log('push in url', url)
        }
    };
    
    const obj2 = {
        getData: () => {
            console.log('Get Data')
        }
    };

    return class extends React.Component {
        render() {
            return (
                <Component 
                    obj1={obj1}
                    obj2={obj2}
                    {...this.props} 
                />
            )
        }
    }
};

export default MyHOC