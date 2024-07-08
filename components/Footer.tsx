import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
const Footer = () => {
	return (
		<>
			<div className="w-full h-[100px] mt-10">
				<div className="flex justify-center gap-2 text-white">
					Made By <strong>Amar Verma</strong>
				</div>
				<div className="flex mt-2 justify-center gap-2 text-white ">
					<Link href="https://www.linkedin.com/in/theamarverma/">
						<LinkedInIcon />
					</Link>
					<Link href="https://www.x.com/theamarverma/">
						<XIcon />
					</Link>
					<Link href="https://www.github.com/theamarverma/">
						<GitHubIcon />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
