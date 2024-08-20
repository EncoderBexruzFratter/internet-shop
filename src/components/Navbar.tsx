import Link from "next/link"
import Image from "next/image"

function Navbar() {
  return (
    <header className="text-gray-600 bg-white overflow-y-hidden body-font fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="h-10 py-5 flex items-center justify-center">
            <Image src={"/logo.png"} alt={"logo"} width={120} height={5} />
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-blue-600">Home page</Link>
          <Link href={"/products"} className="mr-5 hover:text-blue-600">All products</Link>
          <Link href={"/contact"} className="mr-5 hover:text-blue-600">Contact</Link>
        </nav>
        <div className="flex items-center space-x-2.5 text-xs">
          <Link href={"/shopping-cart"}>
            <button  className="button  bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black ">
              My bag
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar