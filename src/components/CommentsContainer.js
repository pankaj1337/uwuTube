import React from "react";

const commentsData = [
  {
    name: "Rohan Sharma",
    text: "Nice video! Keep up the good work.",
    replies: [],
  },
  {
    name: "Pooja Patel",
    text: "This was so helpful. Thank you!",
    replies: [
      {
        name: "Vikram Singh",
        text: "I tried this and it worked perfectly. Thanks for sharing!",
        replies: [],
      },
      {
        name: "Ananya Gupta",
        text: "Can you make a video on something intresting? That would be awesome!",
        replies: [
          {
            name: "Riya Verma",
            text: "I second that! would be really useful.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Kunal Shah",
    text: "I have a question about timestamp 2:39. Can you clarify?",
    replies: [],
  },
  {
    name: "Neha Singh",
    text: "This video changed my perspective. Thank you for sharing!",
    replies: [],
  },
  {
    name: "Aditya Kumar",
    text: "Great job on the explanation. I finally understand this concept.",
    replies: [],
  },
  {
    name: "Shreya Sharma",
    text: "I loved the editing in this video. It was so engaging!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
