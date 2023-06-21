import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href='/about' className='underline hover:text-blue-300 duration-300'>
        About
      </Link>
      <h1 className='text-2xl'>Home</h1>
    </div>
  )
}
