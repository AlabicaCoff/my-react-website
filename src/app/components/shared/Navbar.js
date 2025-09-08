// components/NavBar.js
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-black w-full fixed rounded-lg z-10">
      <div className="py-5 sm:flex sm:justify-between mx-auto max-w-screen-xl p-4">
        <div className="logo">
          <a href="https://github.com/AlabicaCoff">
            <Image
              src="/images/github_logo.png"
              width={36}
              height={36}
              alt="Github"
            />
          </a>
        </div>
        <div className="text-white my-auto mt-3">
          <ul className="flex gap-8">
            <li>
              <Link
                className="hover:underline hover:underline-offset-8"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-8"
                href="/detail#skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-8"
                href="/detail#experience"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-8"
                href="/detail#projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-8"
                href="/detail#activities"
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-8"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
