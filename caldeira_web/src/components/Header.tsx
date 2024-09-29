import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Caldeira Estate</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#accommodation">Accommodation</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#products">Products</Link></li>
            <li><Link href="#story">Story</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
