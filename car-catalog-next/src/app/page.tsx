import Home from "@/components/screens/home/Home";
import { BlogService } from "@/services/blog.service";
import { IBlogData } from "@/services/types";
import { GetServerSideProps, NextPage } from "next";

const HomePage: NextPage = async () => {
  const data = await BlogService.getAll();

  return <Home blogs={data} />;
};

// export const getServerSideProps: GetServerSideProps<IBlogData> = async () => {
//   const blogs = await BlogService.getAll();

//   return {
//     props: { blogs },
//   };
// };

export default HomePage;
