import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className='flex flex-col gap-12'>
            <h1>Intercepting Routes</h1>
            <Link href='/intercepted/page1'> Page 1 </Link>
        </div>
    );
};

export default page;
