import Link from "next/link";

const Header = () => {
    return (
      <header className="bg-gradient-to-bl from-blue-600 to-blue-900 text-white py-4 px-8">
        <h1 className="text-2xl font-bold flex items-center justify-center">MOID UDDIN Website Header</h1>
        <nav>
          <ul className="flex space-x-4 items-center justify-center">
            <li><Link href="/" className="hover:text-red-600 hover:font-bold">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-600 hover:font-bold">About</Link></li>
            <li><Link href="/contact" className="hover:text-red-600 hover:font-bold">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;