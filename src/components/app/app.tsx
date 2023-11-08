import React from 'react';

import Button from '@/components/button';

const App: React.FC = () => {

    const handleClick = () => {
        console.log('button clicked')
    };

    return (
        <div>
            <Button onClick={handleClick}>
                button
            </Button>
        </div>
    )
}

export default App