import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PostCardItem from "./PostCardItem";
import GlobalSpinner from "../../components/common/GlobalSpinner";

const BlogPage = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("https://heyfarming.com/wp-json/wp/v2/blog");
    },
  });

  if (isLoading) {
    return <GlobalSpinner/>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const { data: posts } = data;
  console.log(posts);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="font-bold m-8 text-center capitalize text-4xl">News</h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCardItem
            key={post.id}
            featureMedia={post.featured_media}
            title={post.title.rendered}
            content={post.excerpt.rendered}
            author="Admin"
            url={`/blog/${post.id}`}
            date={post.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
