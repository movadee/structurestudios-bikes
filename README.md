<h1 align="center">Structure Studios Bikes</h1>

<p align="center">
  <i>Bike store management app (Yamaha bikes only)</i>
  <br>
</p>

<p align="center">
  <a href="https://www.ssbikes.io"><strong>www.ssbikes.io</strong></a>
  <br>
</p>

<p align="center">
  <a href="#">Contributing Guidelines</a>
  ·
  <a href="#">Submit an Issue</a>
  <br>
</p>

<hr>

### Tech stack

- [Nx](https://nx.dev/) (build system with monorepo support)
- [Angular](https://angular.io/docs) (latest version)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/), [SASS](https://sass-lang.com/), [HTML5](https://html.spec.whatwg.org/multipage/)
- [Storybook](https://storybook.js.org/)

### Prerequisites

Before you can build and test Angular, you must install and configure the following products on your development machine:

- [Git](https://git-scm.com/) and/or the [**GitHub app**](https://desktop.github.com/) (for Mac and Windows);
  [GitHub's Guide to Installing Git](https://help.github.com/articles/set-up-git) is a good source of information.\
  **Windows Users**: Git Bash or an equivalent shell is required\
  _Windows Powershell and cmd shells are not supported [#46780](https://github.com/angular/angular/issues/46780) so some commands might fail_

- [Node.js](https://nodejs.org), (version specified in the engines field of [`package.json`](../package.json)) which is used to run a development web server, run tests, and generate distributable files.

- [Yarn](https://yarnpkg.com) (version specified in the engines field of [`package.json`](../package.json)) which is used to install dependencies.

- [Angular CLI](https://github.com/angular/angular-cli) `npm install -g @angular/cli`

- [Nx](https://www.npmjs.com/package/nx) `npm install -g nx`

### Running project locally

Run `nx serve bikes-ui` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Running tests locally

Run `nx run bikes-ui:test` for Jest Unit Tests, `nx e2e bikes-ui-e2e` for Cypress E2E tests.

### Resources

The following resources helps us communicate expectations, manage contributions, and keep track of the project.

- [README.md](README.md) (this document) describes development setup of the project including documentation, architecture, code standards, setup of testing, automation, github flow, etc.

- [CONTRIBUTING.md](CONTRIBUTING.md) describes coding standards and best practices use in this project, sort of developer how-to

- [Architectural Decision Records](https://github.com/joelparkerhenderson/architecture-decision-record) documents that capture an important architectural decision made along with its context and consequences

- [CHANGELOG.md](CHANGELOG.md) keeps track of changes in latest releases. We use [SemVer](https://semver.org/) for versioning

- [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour#recording-tours) (VSCode Extension): to quickly review step-by-step code implementation (see [how-to]() use)

- [Github Projects]() used for project management and keeping track of bugs

- [Storybook](https://storybook.js.org/) for a quick reference of project reusable components

- [LICENSE.md](LICENSE.md) this project is licensed under [MIT License](https://license.md/licenses/mit-license/)

### Software architecture

We think it's important to communicate how we are planning to build a software system or how an existing software system works. If software development team doesn't think about architecture all sort of problems can appear (inconsistent approaches to solving the same problems, deployment problems, maintenance issues, code that hard to scale, etc).

We document our software system architecture using **[C4 Model](https://c4model.com/)** approach and **[Structurizr](https://structurizr.com/)** tool.

Note: architecture diagram goes here

### Testing

Describe testing setup. Here is an [ADR draft](adr-testing.md) that I've been working on for my personal project so that you can understand better my thought process. fyi, it is incomplete.

### Automation

- Continuous integration (CI) setup
- Continuous deployment (CD) setup
- Automatically format and lint code with pre-commit
- etc.

### Monitoring

Describe setup and tools that are used to monitor project health

### Contacts

List of project helpful contacts (especially useful for new developers)
