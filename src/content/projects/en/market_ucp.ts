import videoQuibbo from "../../../assets/videos/quibbo.mp4";
import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Market UCP",
  theme: "dark",
  tags: ["html", "javascript", "css", "mysql", "bootstrap"],
  live: "https://github.com/Alejostone1/Market_ucp",
  source: "https://github.com/Alejostone1/Market_ucp",
  videoBorder: true,
  description:
    "An internal e-commerce marketplace web application designed for students and administrative staff of the Universidad Católica de Pereira.<br/><br/>It enables the university community to post items for sale or trade, communicate securely with buyers/sellers, and manage product lists within a safe academic environment.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "Market UCP Application",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Product Catalog",
        caption: "Available Products Directory View",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Item Details",
        caption: "Detailed Product View",
      },
    },
  ],
} as const satisfies ProjectContent;
