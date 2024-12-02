import { wait } from "@/lib/wait";

const page = async () => {
    await wait(2000);
    return (
        <div className='h-[300px] border-red-500 bg-teal-500 border flex justify-center items-center'>
            <h1>This is Quiz Page</h1>
        </div>
    );
};

export default page;
