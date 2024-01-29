import React from 'react'
import Link from 'next/link'
import SideNav from '@/components/admin/SideNav/SideNav'


function layout({children}) {
    return (
        <div className="flex h-screen bg-gray-100">

            <SideNav />
            <main className="flex flex-col flex-1 overflow-hidden pl-36">

                <header className="bg-gray-200 p-4 flex justify-between">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <Link href='/' className='text-2xl font-bold text-violet-600'>VisioStock</Link>

                </header>

                {/* Content */}
                <div className="flex-1 overflow-x-hidden overflow-y-scroll bg-gray-100 p-4">
                    {children}
                </div>

            </main>
        </div>
    )
}

export default layout
