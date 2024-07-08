import { connectToDB } from '@lib/mongoDB';
import User from '@models/User';
import { NextRequest } from 'next/server';

//cause it's for client component, we need to usefetch to get the user data and also it's fetching data for client component for server component
//  we need to use server actions "./actions/user.ts"
export const GET = async (
	req: NextRequest,
	{ params }: { params: { email: string } }
) => {
	try {
		await connectToDB();

		const { email } = params;

		const user = await User.findOne({ email: email });

		if (!user) {
			throw new Error('User not found');
		}

		return new Response(JSON.stringify(user), { status: 200 });
	} catch (err: any) {
		console.log(err);
		throw new Error(`Failed to get user: ${err.message}`);
	}
};

export const POST = async (
	req: NextRequest,
	{ params }: { params: { email: string } }
) => {
	try {
		await connectToDB();

		const { email } = params;

		const user = await User.findOne({ email: email });

		if (!user) {
			throw new Error('User not found');
		}

		const { movieId } = await req.json();

		const isFavorite = user.favorites.includes(movieId);

		if (isFavorite) {
			user.favorites = user.favorites.filter((id: number) => id !== movieId);
		} else {
			user.favorites.push(movieId);
		}

		await user.save();

		return new Response(JSON.stringify(user), { status: 200 });
	} catch (err: any) {
		console.log(err);
		throw new Error(`Failed to get user: ${err.message}`);
	}
};
