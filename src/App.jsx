import React from 'react'
import UserContainer from './components/UserContainer'

function App() {
    return (
        <>
            <h1>Click on Load User Button to Load more users</h1>
            <h2>Max Limit: 10</h2>
            <UserContainer />
        </>
    );
}

export default App;