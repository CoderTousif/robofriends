import React from 'react';

class Header extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log('Header');

        return <h1>ROBOFRIENDS</h1>;
    }
    /* <Typography variant="h2">ROBOFRIENDS</Typography> */
}

export default Header;
