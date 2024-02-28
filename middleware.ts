import { withAuth } from 'next-auth/middleware';

export default withAuth({
	pages: {
		signIn: '/login',
	},
});

//this is how you can protect routes with next-auth
export const config = {
	mather: ['/', '/my-list', '/search/:path*'],
};
