import Link from "next/link";

const page = () => {
    return (
        <div className='flex flex-col gap-12'>
            <h1>Page 2 </h1>
            <Link href='/intercepted/page1'> page 1</Link>
        </div>
    );
};

export default page;
