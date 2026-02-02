import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  
  return (
    <nav className="sticky inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-5xl ">
      <div className="px-4">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex shrink-0">
            <Link href="/">
              <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            </Link>
          </div>
          <div className="md:flex md:items-center md:justify-center md:gap-5">
            <Link
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 "
              href="/dashboard/posts"
            >
              Posts
            </Link>
            <Link
              href="/about"
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 "
              href="/dashboard/posts-client"
            >
              Posts Client
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 "
              href="/dashboard/product"
            >
              Product
            </Link>
            <Link
              className="inline-block rounded-lg px-2 py-1 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 "
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
