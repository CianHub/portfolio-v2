import { useQuery } from '@apollo/client';
import React from 'react';
import './App.css';
import { REPOS_QUERY } from './graphql/queries';
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
    <div className="App">
      <h1>{data?.viewer.login}</h1>
    </div>
  );
};

export default App;
