import Link from "next/link";
import React from "react";

const BlogPage = () => {
    const blog = Array(9)
        .fill(0)
        .map((b, i) => {
            return (
                <div className='m-5 bg-gray-600 p-3 rounded' key={i}>
                    <h1>this is heading of blog</h1>
                    <p>
                        This is description Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Nisi fuga tenetur, dicta
                        ad exercitationem natus illo dolorum reprehenderit
                        quaerat neque sint et, officiis ea odit quasi deleniti
                        cupiditate fugiat minima?
                    </p>
                    <Link
                        className='text-blue-500 underline'
                        href={`/blogs/${i}`}>
                        Read more
                    </Link>
                </div>
            );
        });

    return <div>{blog}</div>;
};

export default BlogPage;
