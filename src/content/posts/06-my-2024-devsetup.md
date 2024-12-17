---
title: "2024 dev environment"
publishedAt: 2024-12-20
description: "How I've overhauled my dev environment (and why)"
slug: "my-dev-environment"
isPublish: false
isDraft: true
---

*tl;dr I switched from tmux/tmuxinator and iTerm2 to Zellij and Wezterm.*

## Old setup

I've seen people stick with the same dev setup for years, others change it every month. I'm somewhere in the middle. I recently tweaked mine—here's what I changed and why.

I've started on Sublime Text and Xcode since forever (well 2012 to be exact), and only moved to VSCode in 2023.

Same goes iTerm2, it's what I installed on my Mac when I got it. and I've been using it since.

Alongside iTerm2, I've been using tmux and tmuxinator to create project-specific layouts. So I'd hit a command like `tmuxinator start foo` and it would open a new tmux session with all the Node.js or Rails commands running in different panes.

It's especially handy if you're working on a monorepo and need to have different tabs for frontend, backend, some other services and so on.

Pretty handy when you're working on different projects and need to switch between them from time to time.

But recently I grew frustrated with tmux and tmuxinator. Maybe it's tmuxinator or maybe I'm doing something wrong.

Plus, iTerm2 is becoming a pain to configure (and re-configure) through the GUI. Especially that I've been moving more of my config to dotfiles (You never know when your laptop would die or get stolen, dotfiles makes it easy to spin up a new machine and have it configured exactly the way you want it).

So that pretty much sums up my pain points.

## New setup

So to replace tmux and tmuxinator, I went with Zellij. DHH recommended it a few times in his tweets. So I gave it a shot. And it does the job.

It replaces both tmux and tmuxinator. And it doesn't everything I need.

As for iTerm2, I looked at few options but settled on WezTerm. It's fast, but most importantly it's scriptable using Lua.

## Wezterm

Well I usually run one Wezterm window with a single pane (although it does support tabs, splits and all the crazy other stuff you can expect from a modern terminal emulator). And then I run Zellij inside it which kinda handles all the multi-tab, multi-pane, attach and detach shenanigans.

My Wezterm config lives in `~/.config/wezterm/wezterm.lua`, I mostly customized the font, font size, window style and added few mouse and keyboard bindings.

```lua
-- Example WezTerm config
local wezterm = require 'wezterm'

return {
  font = wezterm.font("JetBrains Mono", { weight = "Medium" }),
  keys = {
    { key = "n", mods = "CTRL", action = wezterm.action.SpawnCommandInNewTab({args = {"code ."}}) },
  },
}
```

## Zellij

As for Zellij, I'm using the standard config, copied it to `~/.config/zellij/config.kdl`, and defined few layouts for the 4-5 projects I'm usually working on.

```lua
// Example Zellij layout
layout {
    name "foo"
    pane size=1 { command "npm run dev" }
    pane size=2 { command "rails s" }
}
```

You can use Zellij CLI to open a new session with a layout name `zellij --layout path/to/layout` or if you're lazy like me, you can define aliases in my `zshrc` for each project.

```bash
# ~/.zshrc
alias jj="zellij"
alias jjfoo="zellij --layout ~/.config/zellij/layouts/foo.kdl"
alias jjbar="zellij --layout ~/.config/zellij/layouts/bar.kdl"
```

Why `jj` for Zellij CLI? Well, I tried `zj` but I kept missing the `z`. 🤦‍♂️ So I just went with `jj`.
