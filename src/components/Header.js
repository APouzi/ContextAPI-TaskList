import React from 'react'

const Header = () => {
    const day = new Date(Date.now())
    const date = day.toDateString()

    return(
        <div className="navbar bg-primary grid-2">
            <h1>Task List</h1>
            <h3>Today: {date}</h3>
        </div>
    )
}

export default Header