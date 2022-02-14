import { PostProps } from "../interfaces";

export const DemoPosts: PostProps[] = [
  {
    userId: "1",
    _id: "1",
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
    likes: [],
    comments: [
      {
        userId: "Tolulope",
        username: "Tolulope",
        _id: "5",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
      {
        userId: "Tolulope",
        username: "Tomisin",
        _id: "5",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
      {
        userId: "Tolulope",
        username: "Tomisin",
        _id: "5",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
      {
        userId: "Tolulope",
        username: "Tomisin",
        _id: "5",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
      {
        userId: "Tolulope",
        username: "Tomisin",
        _id: "5",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userId: "2",
    _id: "2",
    username: "Sam Scott",
    userAvatar: "./Assets/tobi.jpg",
    words: "Check out my dogs y'all.",
    media: [
      {
        link: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        type: "image",
      },
    ],
    likes: [],
    comments: [
      {
        userId: "Tolulope",
        username: "Tolulope",
        _id: "5",
        text: "Lorem, ipsum dolor sit amet consectetur",
        date: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userId: "3",
    _id: "3",
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
    likes: [],
    comments: [
      {
        _id: "5",
        userId: "funsho",
        username: "Mr Funsho",
        text: "Wow! The dog is so cute!",
        date: new Date(),
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
