import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from './Header'
import Dashboard from './Dashboard'
const Home = () => {
    return (
        <div className='Home'>
            <div className='container'>
                <Sidebar />
                {/* <Header handleDarkMode={setDarkMode} /> */}
                

            </div>
        </div>
    )
}

export default Home