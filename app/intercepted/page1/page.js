import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <Link href='/intercepted/page1/page2'> go to page2</Link>
        </div>
    );
};

export default page;
