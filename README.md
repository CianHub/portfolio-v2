![CI/CD](https://github.com/CianHub/portfolio-v2/workflows/React%20CI%20Pipeline/badge.svg)
![Code Climate](https://codeclimate.com/github/CianHub/portfolio-v2.png)
[![codecov](https://codecov.io/gh/CianHub/portfolio-v2/branch/main/graph/badge.svg)](https://codecov.io/gh/CianHub/portfolio-v2)

# Cian's Website

This project is a replacement for my previous personal website.

## Design

The application design outlined in the mock-ups utilise a minimal mobile-first responsive design.

Although the final design deviates from the mock ups they were created as a sort of base from which the main design could evolve from.

The core elements of the design mainly uses the Monaco and Roboto fonts while the color pallette for the application was selected to give the feel of a code editor and compliment each other well.

For reference these are:

<ul>
<li style="color:#24292e">#24292e</li>
<li style="color:#C48A5F">#C48A5F</li>
<li style="color:#557DA7">#557DA7</li>
<li style="color:#706095">#706095</li>
<li style="color:#94525D">#94525D</li>
<li>#FFFFFF</li>
</ul>

The goal of the apps design is to balance the styled code theme and provide an efficient and functional means of displaying the data to the user.

## CI/CD

To avoid issues and ensure quality, any changes to the code in this application must pass the custom pipeline before being merged.

The pipeline is run with GitHub Actions and executes the following:

<ul>
<li>Tests are run and it's coverage checked by Codecov</li>
<li>Formatting, syntax and standards by ESLint </li>
<li>Maintainability and quality checked by Code Climate</li>
<li>Build and deployment are checked by running the commands</li>
</ul>

## Accessibility

The application was designed to be as accessible as possible. Some of the features implemented include specifying aria-roles and wai-aria compliant roles aswell as contrasting colors.

## Data

The data is sourced from my public GitHub repos using GraphQL, if there's an issue with this the application will switch to a hardcoded JSON backup instead.
