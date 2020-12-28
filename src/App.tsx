import { useQuery } from '@apollo/client';
import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/containers/navbar/Navbar';
import Theme from './components/styles/theme';
import { REPOS_QUERY } from './graphql/queries';
import {
  LazyAbout,
  LazyBlog,
  LazyBlogPost,
  LazyProjects,
} from './helpers/lazyLoading';
import {
  GetRepos,
  GetRepos_viewer_repositories_nodes,
} from './models/graphqL/GetRepos';

const App: React.FC = () => {
  const [jsonData, setJsonData] = useState<
    GetRepos_viewer_repositories_nodes[]
  >([]);
  const { data, error, loading } = useQuery<GetRepos>(REPOS_QUERY, {
    variables: {
      firstRepo: 100,
      firstLang: 10,
    },
  });

  const getJsonData = async () => {
    const response = await fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    await response
      .json()
      .then((jsonProjects: GetRepos_viewer_repositories_nodes[]) =>
        setJsonData(jsonProjects)
      );
  };

  useEffect(() => {
    getJsonData();
  }, []);

  const projectData = error ? jsonData : data?.viewer?.repositories?.nodes;

  return (
    <HashRouter>
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
                <LazyProjects projects={projectData} showLoading={loading} />
              </Route>
              <Route path="/">
                <LazyAbout />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
