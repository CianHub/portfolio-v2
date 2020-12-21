import { useQuery } from '@apollo/client';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/containers/navbar/Navbar';
import { REPOS_QUERY } from './graphql/queries';
import {
  LazyAbout,
  LazyBlog,
  LazyBlogPost,
  LazyProjects,
} from './helpers/lazyLoading';
import { GetRepos } from './models/graphqL/GetRepos';

const App: React.FC = () => {
  const { data, loading, error } = useQuery<GetRepos>(REPOS_QUERY, {
    variables: {
      firstRepo: 100,
      firstLang: 10,
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Suspense fallback={'lazy...'}>
            <Switch>
              <Route exact path="/blog/:id">
                <LazyBlogPost />
              </Route>
              <Route exact path="/blog">
                <LazyBlog />
              </Route>
              <Route exact path="/projects">
                <LazyProjects projects={data?.viewer?.repositories?.nodes} />
              </Route>
              <Route path="/">
                <LazyAbout />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
