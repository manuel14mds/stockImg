'use client'
import React, { useState } from 'react'

function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}>
                user
                <i className="fas fa-user"></i>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                    <a href="">logout</a> <br />
                    <a href="">config</a>
                </div>
            )}
        </div>
    )
}

export default UserMenu
