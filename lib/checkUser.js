import { currentUser } from "@clerk/nextjs/server";
import connectDB from './db';  // Import the DB connection
import User from "@/server/models/User";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;  // If no user is logged in, return null
  }

  // Connect to the MongoDB database
  await connectDB();

  try {
    // Check if the user already exists in the database by their Clerk user ID
    const loggedInUser = await User.findOne({ clerkUserId: user.id });

    if (loggedInUser) {
      return loggedInUser;  // If the user exists, return the user
    }

    // If the user doesn't exist, create a new user
    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await User.create({
      clerkUserId: user.id,
      name,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    });

    return newUser;
  } catch (error) {
    console.log("Error checking user:", error.message);
    return null;
  }
};
