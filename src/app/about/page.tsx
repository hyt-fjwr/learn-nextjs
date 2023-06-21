import Link from "next/link";

const Page = () => {
    return (
    <>
        <div className="flex flex-col justify-center items-center h-screen">
            <Link href='/' className="underline hover:text-blue-300 duration-300 ">
                Home
            </Link>
            <h1 className="text-2xl">About</h1>
        </div>
    </>
    )
};

export default Page