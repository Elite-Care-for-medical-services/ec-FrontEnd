# Project 0#
---
This is a project that aims to introduce the team to the general workflow that will be followed withing our development process.
## Key points to keep in mind:
* The main language across Front/Back end will be [TS](https://www.typescriptlang.org/).
* The main run time that will be used on both ends will be [bun](https://bun.sh/).
* Front end framework will be [React](https://react.dev/).
* Bacn end framwork will be [Espress.js](https://expressjs.com/).
* Any further additions to the used frameworks is up to the team members after providing a clear explanation on why/how this addition will benefit the project.
## How to start:
1. first let's make sure you have bun installed on your machine:
for windows:
```sh
powershell -c "irm bun.sh/install.ps1|iex"
```
for linux based systems:
```sh
curl -fsSL https://bun.sh/install | bash 
```
2. then, we will clone the repo:
```sh
git clone https://github.com/Elite-Care-for-medical-services/ec-FrontEnd.git
```
if you want to clone with an access token:
```sh
git clone https://<TOKEN>@github.com/Elite-Care-for-medical-services/ec-FrontEnd.git
```
3. install all dependencies after cloning the repo:
```sh
cd ec-FrontEnd
bun install
```
4. if you want to install any extra packages, use the command:
```sh
bun add <package name>
```
5. if you want to run the app, use one of the following commands:
```sh
bun dev
bun run dev
```
or if you want to run a script from your `package.json` file:
```sh
bun run <script name>
```
## Best practices/Rules to follow:
* DO NOT WORK OR COMMIT ANY WORK TO THE MAIN BRANCH. Create your own pranch, do your thing, push your changes, and then open a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to merge your changes to the main branch.
* Use **Prettier** default settings across your code for unified formatting across the code base, to avoid conflicts during the CI process.
* Commit to the Scrum flow configured in the [notion](https://www.notion.so/20fab7877c3f80688d3dc0f1884b5e2b?v=20fab7877c3f809f8630000c3e03da68) workspace.
* Write your testing cases and scripts throughout the development process.
* Consult when stuck, consult when stuck, consult when stuck.
* Keep your commit messages discriptive and clean to help reviews when going back to old commits.