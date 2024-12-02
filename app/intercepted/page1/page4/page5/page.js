import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            <h3>Page 5</h3>
            <Link href='/dashboard'> go to dashboard</Link>
        </div>
    );
};

export default page;
