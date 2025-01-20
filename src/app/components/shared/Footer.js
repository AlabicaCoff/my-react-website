// components/Footer.js
import Link from 'next/link';

export default function NavBar() {
    return (  
        <footer className="bg-black rounded-lg shadow text-gray-300">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center">
              <Link href="/" className="hover:underline hover:underline-offset-4">
                AlabicaCoff
              </Link>{' '}
              © {new Date().getFullYear()}
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
              <li>
                <Link
                  href="https://www.facebook.com/mrchmello"
                  className="hover:underline hover:underline-offset-4 me-4 md:me-6"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/mello_mrch"
                  className="hover:underline hover:underline-offset-4 me-4 md:me-6"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/AlabicaCoff"
                  className="hover:underline hover:underline-offset-4 me-4 md:me-6"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:thanathatp2003@gmail.com"
                  className="hover:underline hover:underline-offset-4"
                >
                  Gmail
                </Link>
              </li>
            </ul>
          </div>
        </footer>
    );
}

