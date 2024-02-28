import { option } from '@app/api/auth/[...nextauth]/option';
import { connectToDB } from '@lib/mongoDB';
import User from '@models/User';
import { getServerSession } from 'next-auth';

//server actions for server components and fetching api
export const fetchMyList = async (email: string) => {
	const session = await getServerSession(option);
	if (!session?.user?.email) {
		throw new Error('You need to be authenticated to view this content');
	}

	await connectToDB();
	const user = await User.findOne({ email: session.user.email });

	if (!user) {
		throw new Error('User not found');
	}
	return user.favorites;
};
