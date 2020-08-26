import image from "./assets/image.png";
import { Block } from "./classes/blocks";

const text = `
"Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want."
`;
export const model = [
  new Block("title", "MyWeb", {
    tag: "h1",
    styles:
      "background: #D5BFD5; color: #FEFEFE; text-align: center; padding: 1.5rem;",
  }),
  new Block("text", text, {
    tag: "h2",
    styles:
      "background: #D5BFD5; color: #FEFEFE; text-align: center; font-weight: bold; padding: 1rem;",
  }),
  new Block("image", image, {
    styles: "padding: 2rem 0; display: flex; justify-content: center;",
    alt: "My image",
    imageStyles: "width: 1000px; height: auto;",
  }),
  new Block(
    "textColumns",
    [
      "01.Choose your website template",
      "02.Add the tools you need",
      "03.Reach your audience",
    ],
    {
      tag: "h2",
      styles:
        "background: #D5BFD5; color: #FEFEFE; text-align: center; padding: 1rem;",
    }
  ),
  new Block(
    "textColumns",
    [
      "Select from any of our industry-leading website templates to best fit your personal style and professional needs.",
      "Explore which tools you want to add—whether it’s setting up an online store, booking services, or adding your favorite third-party extensions.",
      "Stand out in every inbox and social feed. On-brand email campaigns and social tools make it easy to grow your audience across multiple channels.",
    ],
    {
      tag: "h3",
      styles:
        "background:  #FEFEFE; color: #000; text-align: center; padding: 1rem;",
    }
  ),
];
