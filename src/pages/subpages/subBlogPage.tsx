import BlogCard from "./components/ui/blogCard.tsx";

export default function SubBlogPage() {
  return (
    <>
      <BlogCard />
      <Outlet />
    </>
  );
}
