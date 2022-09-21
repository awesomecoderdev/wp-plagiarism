import React from 'react';
import { Squares2X2Icon } from '@heroicons/react/24/outline'
const Dashboard = () => {
    return (
        <>
            <div className="relative border border-slate-400/25 transform translate-y-0 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-slate-200 drop-shadow-2xl w-full min-h-[2.9rem] flex items-center rounded-md p-2">
                <span className='flex items-center px-2 border border-slate-400/25 '>
                    <Squares2X2Icon className="h-5 text-slate-500"/>Dashboard
                </span>
            </div>
        </>
    );
}

export default Dashboard;
