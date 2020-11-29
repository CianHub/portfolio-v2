import { lazy } from 'react';

export const LazyBlog = lazy(
  () => import('../components/containers/blog/Blog')
);
export const LazyAbout = lazy(
  () => import('../components/containers/about/About')
);
export const LazyBlogPost = lazy(
  () => import('../components/containers/blogpost/BlogPost')
);
export const LazyProjects = lazy(
  () => import('../components/containers/projects/Projects')
);
