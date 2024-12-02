import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div>
            Seen page
            <Link href='/dashboard'> GO TO ALL NOTIFICATION</Link>
        </div>
    );
};

export default page;
