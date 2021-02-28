# GitHub Jobs Reimagination
Personal take of the GitHub Job Graphic Interface
## Goal
Recreate the GitHub Jobs graphic interface adding modifications as seen fit without compromising the original premise.

## Getting Started
To achieve the goal of this challenge, the process will be broken down into several steps which will be explained throughout this document.

### 1. Creating a Trello Page
To keep track of: what is going to be needed, is currently being worked on and possible new features, a Trello page will be created and modularized as to cover all the initial necessities of the challenge.

![Trello Snippet](https://github.com/gabriel-camurca/github-job-gui-reimagination/blob/main/imgs_git/trello_snippet.png)

### 2. Creating a GitHub Repository
Furthermore, to organize the code that is being written, motivate the completion of this challenge, and practice for what is required from the job, a GitHub repository will be created and expanded with updated versions of the code currently being worked on.

![Github Snippet](https://github.com/gabriel-camurca/github-job-gui-reimagination/blob/main/imgs_git/github_snippet.png)

### 3. Creating a Figma Project
In order to complete the challenge it’s important to have solid milestones and guidelines. Therefore a Template made with Figma is going to be used to set the expectations of what the final project will most likely look like.

![Figma Project](https://github.com/gabriel-camurca/github-job-gui-reimagination/blob/main/imgs_git/figma_snippet.png)

### 4. Coding
This step is the broadest in terms of what is done and will be broken down even further over the course of this document. In a few words, this is where all the actual code that is required for the challenge is written and sent to the GitHub Repository.

## Implementing the Code

### File Structure
First a file structure is decided: Choosing to use Next.js, the files were divided into 'components', 'pages' and 'styles'. Components are modulated and can be used to define sections of the page and are visually organized as stated in the style module for that component; pages also have their styles defined if necessary.

### Routing
Some way to navigate across the pages is necessary: Next.is was used and it dictates how to get to other pages.

### Communicate between Containers
The React Context API was used to save information from one component to the other in order to get information such as filters and apply those to the search.

## Technologies

* GitHub Jobs API
* HTML
* CSS
* Bootstrap
* Javascript
* Typescript
* React js
* Next js
