import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <h3>Page 4</h3>

            <Link href='/intercepted/page1/page3'>go to page 3</Link>
        </div>
    );
};

export default page;
