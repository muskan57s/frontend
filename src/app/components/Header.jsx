import Link from "next/link";

function Header(props) {
  return (
    <div className=' h-20 w-screen px-5 text-yellow-400 bg-blue-700 flex items-center justify-between'>
      <h2 className='text-xl'>{props.user1}</h2>
        <ul className=' flex gap-8 '>
          <Link href='/Home'>Home</Link>
          <Link href='/About'>About</Link>   
          <Link href='/Service'>Service</Link>
          <Link href='/Contact'>Contact</Link>
        </ul>
    </div>
  )
}

export default Header