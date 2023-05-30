# Helpers

## Installation and Setup

### Clone the repository and install dependencies

```git clone https://github.com/michaellinhardt/npm-backend-helpers/ && cd npm-backend-helpers && npm install```

### Set up the Git pre-push hook

This project uses a Git pre-push hook to automatically increment the patch version in package.json before each push.

To set up the hook, create a file named pre-push in the .git/hooks directory of your local repository:

```touch .git/hooks/pre-push```

Add the following line to the file pre-push:

```#!/bin/sh

# Get the name of the current branch
current_branch=$(git symbolic-ref --short HEAD)

# Only run npm version patch if the current branch is main
if [ "$current_branch" = "main" ]; then
  npm version patch -m "Auto bump version to %s - pre-push hook"
fi```

Save and close the file.

Finally, make the pre-push file executable:

```chmod +x .git/hooks/pre-push```
