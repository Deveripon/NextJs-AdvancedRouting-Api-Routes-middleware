import { wait } from "@/lib/wait";
import React from "react";
import error from "./error";
import Link from "next/link";

const page = async () => {
    await wait(3000);
    return (
        <div className='h-[640px] border-red-500 bg-teal-500 border flex justify-center items-center'>
            <h1>This is notification page</h1>
            <Link href='/dashboard/seen'>Go to seen notification</Link>
        </div>
    );
};

export default page;
