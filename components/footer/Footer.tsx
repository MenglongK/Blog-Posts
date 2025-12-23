import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white inset-shadow-sm inset-shadow-white-500/50 md:mx-10 md:rounded-3xl">
      <div className="container px-4 mx-auto max-sm:text-center">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
          <Link className="block md:mx-auto mb-5 max-w-max" href="/">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
          </Link>
          <div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link
                href="/"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Terms
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link
                href="/"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Privacy
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
                href="/about"
              >
                About Us
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link
                href="/"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Careers
              </Link>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <Link
                href="/"
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2023 example.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
