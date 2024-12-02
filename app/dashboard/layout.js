import React from "react";

const layout = ({ children, notifications, quiz, assignments }) => {
    return (
        <>
            <div className='container bg-gray-500 h-screen w-screen grid grid-rows-2 grid-cols-2 gap-3'>
                {quiz}
                {notifications}
                {assignments}
            </div>
        </>
    );
};

export default layout;
