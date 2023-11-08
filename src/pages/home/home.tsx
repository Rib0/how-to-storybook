import React from 'react';

import Button from '@/components/button';

interface Props {
    text: string
};

const Home: React.FC<Props> = ({ text }) => {
    return (
        <>
            <h1>Home</h1>
            <p>Welcome to Home page</p>
            <p>{text}</p>
            <Button>first button</Button>
            <Button>second button</Button>
        </>
    )
};

export default Home;
