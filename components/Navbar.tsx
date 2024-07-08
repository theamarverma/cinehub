'use client';

import { Search } from '@mui/icons-material';
import { sign } from 'crypto';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

const Navbar = () => {
	const router = useRouter();
	const [search, setSearch] = useState<string>('');
	const [dropdown, setDropdown] = useState<boolean>(false);
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	const HandleScroll = () => {
		if (window.scrollY > 100) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', HandleScroll);
		//cleanup function to remove event listener when component is unmounted
		return () => {
			window.removeEventListener('scroll', HandleScroll);
		};
	}, []);

	const handleLogout = () => {
		signOut({ callbackUrl: '/login' }); //redirect to login page after logout
	};

	return (
		<div className={`${isScrolled && 'bg-black-1'} navbar`}>
			<Link href="/">
				<Image
					className="logo"
					src="/assets/logo.png"
					alt="Cine Hub"
					width={100}
					height={100}
				/>
			</Link>
			<div className="nav-links">
				<Link
					href="/"
					className="nav-link"
				>
					Home
				</Link>
				<Link
					href="/my-list"
					className="nav-link"
				>
					My List
				</Link>
			</div>

			<div className="nav-right">
				<div className="search">
					<input
						type="text"
						placeholder="Search Movie....."
						className="input-search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button disabled={search === ''}> </button>
					<Search
						className="icon"
						onClick={() => router.push(`/search/${search}`)}
					/>
				</div>
				<Image
					className="profile"
					src="/assets/profile_icon.jpg"
					alt="Avatar"
					width={40}
					height={40}
					onClick={() => setDropdown(!dropdown)} //it's just opposite of state;
				/>
				{dropdown && (
					<div className="dropdown-menu">
						<Link href="/">Home</Link>
						<Link href="/my-list">My List</Link>
						<a onClick={() => handleLogout()}>Log Out</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
