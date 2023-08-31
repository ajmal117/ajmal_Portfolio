import React from "react";
import Link from "next/link";
// import img from "next/img";

const user = {
  name: "Ajmal Ali",
  username: "mdm_ajmal",
  bio: "Web Developer | Tech Enthusiast",
  avatar: "/dev-ed-wave.png",
};

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header bg-white p-4 rounded-lg shadow-md">
      <img
        className="w-20 h-20 rounded-full mx-auto mb-2"
        src={user.avatar}
        alt={`${user.name}'s Avatar`}
      />
      <h1 className="text-xl font-semibold">{user.name}</h1>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-700">{user.bio}</p>
    </div>
  );
};

const ProfileTabs = () => {
  return (
    <div className="profile-tabs bg-white p-4 mt-4 rounded-lg shadow-md">
      <ul className="flex">
        <li className="mr-4 text-blue-600 font-semibold">Tweets</li>
        <li className="mr-4 text-gray-600">Media</li>
        <li className="text-gray-600">Likes</li>
      </ul>
    </div>
  );
};

const tweets = [
  {
    author: user,
    content: "Just launched my new website! 🚀 #WebDevelopment",
  },
  {
    author: user,
    content:
      "Crafting digital worlds from lines of code, turning imagination into interactive reality.",
  },
  // More tweet objects...
];

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet bg-white p-4 mt-4 rounded-lg shadow-md flex">
      <img
        className="w-12 h-12 rounded-full mr-4"
        src={tweet.author.avatar}
        alt={`${tweet.author.name}'s Avatar`}
      />
      <div className="tweet-content">
        <h3 className="text-lg font-semibold">{tweet.author.name}</h3>
        <p className="text-gray-700">{tweet.content}</p>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  return (
    <div className="profile-page p-6">
      <span className="border border-red-300 p-1 px-2 font-semibold rounded-md  my-4 hover:bg-slate-500 hover:text-slate-100 text-slate-500 float-right">
        <Link href="/" passHref>
          <a>Home Page</a>
        </Link>
      </span>
      <ProfileHeader user={user} />
      <ProfileTabs />
      <div className="tweets">
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
