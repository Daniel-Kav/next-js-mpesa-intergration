import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="bg-sky-900 p-4">
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300">
            <a href="#">Home</a>
          </li>
          <li className="text-white hover:text-gray-300">
            <a href="/About">About</a>
          </li>
          <li className="text-white hover:text-gray-300">
            <a href="/About">Services</a>
          </li>
          <li className="text-white hover:text-gray-300">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <h1 className="text-sky-900">Home Page</h1>
      </div>
    </div>
  );
}
