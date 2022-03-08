import Image from 'next/image';

export const PostLayout = ({ post, preview }) => {
  const { content, title, categories } = post;
  return (
    <main>
      <article>{content}</article>
    </main>
  );
};
