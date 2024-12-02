import { wait } from "@/lib/wait";
import React from "react";

const page = async () => {
    await wait(3000);
    return (
        <div className='h-[300px] border-red-500  bg-teal-500 border flex justify-center items-center'>
            <h1>This is assignment page</h1>
        </div>
    );
};

export default page;
