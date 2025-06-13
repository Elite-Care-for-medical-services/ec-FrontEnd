# Work flow
1. create a new branch once starting the work on a new part of feature of the project (you do the command on your machine)
```sh
git checkout -b <new bracnch name>
```
to check if you are on the new branch
```sh
git branch
```
2. do your firsy push with
```sh
git push -u origin <new branch name>
```
after that you will be able to push regularly with `git push`
3. after you finish your work, you do the pull request and wait for the branch to be merged
4. if the branch is merged successfully, delete the branch from your local machine with
```sh
git branch -d <branch name>
```
if you want to forcefully delete a branch regardless if it was merged or not, do
```sh
git branch -D <branch name>
```
