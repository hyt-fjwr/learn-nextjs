import Link from "next/link";


const Page = ({ params } : { params : { id: string } }) => {
    console.log(params.id);
    return <div className="m-4 font-bold">
        <Link href="/" className="underline">
            Home
        </Link>
        Blog ID: {params.id}
        </div>
}

export default Page;