import { PostProps } from "../interfaces";

export const DemoPosts: PostProps[] = [
  {
    userId: "1",
    postId: "1",
    username: "Oluwatobi",
    userAvatar: "./Assets/tobi.jpg",
    words:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium culpa minima repellendus odio inventore quas pariatur asperiores repellat dicta. Dignissimos!",
    media: [
      {
        link: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "image",
      },
      {
        link: "https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "image",
      },
      {
        link: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "image",
      },
    ],
    likes: ["1", "", ""],
    comments: [
      {
        userId: "Tolulope",
        username: "Tolulope",
        userAvatar: "./Assets/funshor.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userId: "2",
    postId: "2",
    username: "Sam Scott",
    userAvatar: "./Assets/tobi.jpg",
    words: "Check out my dogs y'all.",
    media: [
      {
        link: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "image",
      },
    ],
    likes: ["idliee49483k389393", "", ""],
    comments: [
      {
        userId: "Tolulope",
        username: "Tolulope",
        userAvatar: "./Assets/funshor.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userId: "3",
    postId: "3",
    username: "Tosin",
    userAvatar: "./Assets/tobi.jpg",
    words: "Check out my dogs y'all.",
    media: [
      {
        link: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "image",
      },
      {
        link: "https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "image",
      },
    ],
    likes: ["", "", ""],
    comments: [
      {
        userId: "funsho",
        username: "Mr Funsho",
        userAvatar: "./Assets/funshor.jpg",
        text: "Wow! The dog is so cute!",
        date: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
