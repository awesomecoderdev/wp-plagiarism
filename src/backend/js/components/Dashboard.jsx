import React from 'react';
import { Cog6ToothIcon, KeyIcon, PaintBrushIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { post_types,posts, ajaxurl, headers } from './Backend';
import axios from 'axios';

console.log('====================================');
console.log("post_types",post_types);
// console.log("posts",posts);
console.log('====================================');

axios.post(ajaxurl, {
    path: "ibrahim"
},headers)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});


const Dashboard = () => {

    return (
        <>
            <div className="relative bg-white w-full flex items-center px-5 py-3">
                <span className='mr-2 bg-white cursor-pointer flex items-center p-2 rounded-md border border-slate-400/25 transform translate-y-0 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-slate-200 '>
                    <Squares2X2Icon className="h-5 pointer-events-none text-slate-500 mr-2"/>Dashboard
                </span>
                <span className='mr-2 bg-white cursor-pointer flex items-center p-2 rounded-md border border-slate-400/25 transform translate-y-0 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-slate-200 '>
                    <PaintBrushIcon className="h-5 pointer-events-none text-slate-500 mr-2"/>Post Types
                </span>
                <span className='mr-2 bg-white cursor-pointer flex items-center p-2 rounded-md border border-slate-400/25 transform translate-y-0 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-slate-200 '>
                    <Cog6ToothIcon className="h-5 pointer-events-none text-slate-500 mr-2"/>Settings
                </span>
                <span className='mr-2 bg-white cursor-pointer flex items-center p-2 rounded-md border border-slate-400/25 transform translate-y-0 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 shadow-slate-200 '>
                    <KeyIcon className="h-5 pointer-events-none text-slate-500 mr-2"/>Activate
                </span>
            </div>
        </>
    );
}

export default Dashboard;
