# Teamlyf

This is the repo for Teamlyf

## Getting Started

1. First clone the repo

```bash
git clone https://github.com/TeamLyf/Teamlyf-Frontend-Next.git
```

2. Install dependencies:

```sh
npm install
```

3. Run Next App locally:

```sh
npm run dev
```

4. Open URL in the browser:

```
http://localhost:3000

```

## Types

As you know by now that this is a typescript based project. Please all types must be created separately in the `type` or `@types` directly outside of the componentss folder. If your components require a custom type, create them inside a folder called `types` or `@types` and export it to be used somewhere else.

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **main** -> **dont touch** this branch, this is what is running in production.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/TeamLyf/Teamlyf-Frontend-Next.git`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/TeamLyf/Teamlyf-Frontend-Next.git.web.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg `TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b LYF-001/Feat/Sign-Up-from`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin dev`.
8. Push changes to your new branch, run `git push -u origin LYF-001/Feat/Sign-Up-from`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.

# Merging

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |
