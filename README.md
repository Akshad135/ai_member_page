# Collaboration Guide

## Forking and Cloning the Repository

1. Navigate to the main page of the repository on GitHub.
2. Click on the 'Fork' button in the top-right corner. This creates a copy of the repository in your GitHub account.
3. Now, clone the forked repository to your local machine. Go to your GitHub account, open the forked repository, click on the 'Code' button and then click the 'copy to clipboard' icon.
4. Open a terminal on your local machine and run the following git command:

```bash
git clone https://github.com/aivitbhopal/New-Website-dev-repo.git
```

## Setting Up the Project on your local device

1. Navigate to the cloned repository on your local machine.

```bash
cd New-Website-dev-repo
```

2. Install the project dependencies by using npm :

```bash
npm install
```

3. Switch the branch by using the branch command to specify the feature :

```bash
git branch <branch-name>
```

Replace `<branch-name>` with a descriptive name (e.g., feature/navbar).

4. Start working on the project :

Here you can start working on contributing to the project.

5. Committing Changes:

```bash
git add .
```

```bash
git commit -m "Commit Message"
```

Replace commit message with a short description of the work.

6. Pushing Changes:

```bash
git push origin <branch-name>
```

`<branch-name>` should be the current branch you are working on.

### Note:

Dont forget to use `git pull` to keep your code updated with the main branch of the repo :

```bash
git pull origin main
```
