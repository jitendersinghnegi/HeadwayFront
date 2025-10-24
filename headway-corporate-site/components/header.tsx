'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Company Logo" width={40} height={40} />
          <span className="font-semibold text-lg">Headway Social</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/who-we-are" className="hover:text-black">Who We Are</Link>
          <Link href="/what-we-do" className="hover:text-black">What We Do</Link>
          <Link href="/explore" className="hover:text-black">Explore</Link>
          <Link href="/sustainability" className="hover:text-black">Sustainability</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 flex flex-col p-4 space-y-2">
          <Link href="/who-we-are" className="hover:text-black">Who We Are</Link>
          <Link href="/what-we-do" className="hover:text-black">What We Do</Link>
          <Link href="/explore" className="hover:text-black">Explore</Link>
          <Link href="/sustainability" className="hover:text-black">Sustainability</Link>
        </nav>
      )}
    </header>
  );
}
