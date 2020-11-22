/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRepos
// ====================================================

export interface GetRepos_viewer_repositories_nodes_languages_edges_node {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface GetRepos_viewer_repositories_nodes_languages_edges {
  __typename: "LanguageEdge";
  node: GetRepos_viewer_repositories_nodes_languages_edges_node;
}

export interface GetRepos_viewer_repositories_nodes_languages {
  __typename: "LanguageConnection";
  /**
   * A list of edges.
   */
  edges: (GetRepos_viewer_repositories_nodes_languages_edges | null)[] | null;
}

export interface GetRepos_viewer_repositories_nodes {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages: GetRepos_viewer_repositories_nodes_languages | null;
}

export interface GetRepos_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetRepos_viewer_repositories_nodes | null)[] | null;
}

export interface GetRepos_viewer {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetRepos_viewer_repositories;
}

export interface GetRepos {
  /**
   * The currently authenticated user.
   */
  viewer: GetRepos_viewer;
}

export interface GetReposVariables {
  firstRepo?: number | null;
  firstLang?: number | null;
}
