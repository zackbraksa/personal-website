---
title: "Automating your dev workflow with VS Code tasks"
publishedAt: 2023-10-27
description: ""
slug: "automating-dev-workflow-vscode-tasks"
isPublish: true
---

# Automating your dev workflow with VS Code tasks

If, like me, you are working on multiple full-stack web projects, you probably find yourself constantly switching between VS Code workspaces. Each time you launch a workspace, you have to run multiple commands to get your different builds up and running.

While tmux and tmuxinator is a great tool to automate some of this repetitive work, you may prefer to use what is already built into VS Code.

With VS Code tasks, you can define all your "build" tasks inside a `.json` file and then run all your builds at once, in separate terminal panels, with just one command.

To begin, create a `tasks.json` file inside your `.vscode` folder. This is where we will define all the different build tasks we want to run.

```json
{
  // See <https://go.microsoft.com/fwlink/?LinkId=733558>
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Frontend Build",
      "type": "shell",
      "command": "cd frontend && npm run dev",
      "presentation": {
        "panel": "dedicated"
      }
    },
    {
      "label": "Backend Build",
      "type": "shell",
      "command": "cd backend && rails s",
      "presentation": {
        "panel": "dedicated"
      }
    }
  ]
}

```

Now that we have our tasks well defined, you can build each one by invoking the VS Code command. Select "Run Task" and choose the name of the task you want to run.

But wait, didn't we say we want to run all our build commands at once?

Ah, yes! We need to add one little extra thing to the `tasks.json` file. We need to create a compound task, which looks like this:

```json
{
      "label": "Liftoff",
      "dependsOn": ["Backend Build", "Frontend Build"]
}

```

Notice the `dependsOn` property, as you will need to update it with the labels of your tasks.

Now, your `tasks.json` should look like this:

```json
{
  // See <https://go.microsoft.com/fwlink/?LinkId=733558>
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Frontend Build",
      "type": "shell",
      "command": "cd frontend && npm run dev",
      "presentation": {
        "panel": "dedicated"
      }
    },
    {
      "label": "Backend Build",
      "type": "shell",
      "command": "cd backend && rails s",
      "presentation": {
        "panel": "dedicated"
      }
    },
    {
      "label": "Liftoff",
      "dependsOn": [
        "Backend Build",
        "Frontend Build"
      ]
    }
  ]
}

```

To complete the process, press `Cmd+Shift+P`, select `Run Task`, and choose the name of your task. In this example, the task is named `Liftoff`.

And that's all you need to automate and streamline repetitive build tasks. I hope this was helpful.

Happy coding!