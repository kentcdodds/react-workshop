# React Workshop

[![Build Status][build-badge]][build]
[![Dependencies][dependencyci-badge]][dependencyci]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]

[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Thank you!

- [Create React App][create-react-app].
- [Matt Zabriskie][matt] for his [react-workshop][original-repo] upon which this one is based.
- [KADIRA][kadira] for their [react-storybook][storybook]

## Setup

You need to have the latest [`node`][node], [`yarn`][yarn], and [`git`][git] installed. Then run:

```
git clone https://github.com/kentcdodds/react-workshop.git
cd react-workshop
yarn run setup
```

### Note on yarn

If you don't have `yarn` installed and don't want to use it for some reason, you can use [`npm`][npm] as well. Instead
of `yarn run setup`, run `node ./scripts/install && npm run validate` and enjoy waiting (and hopefully things don't
break for you). May be a good idea to still run `node ./scripts/verify` to verify you have the right version of other
things too.

### All set up!

If you didn't get any errors running the setup scripts, you're ready to start the workshop! 🎉 🎊

If you want to explore a bit, there are a few things you can do:

1. go ahead and open `intro/exercises-final/01-js.html` in a browser (don't peak at the solution!). It should say `Hello World`. Go ahead and open the others if you like.
2. Then you can run `yarn run storybook` and open `http://localhost:9009` and poke around the storybook for our exercises :)
3. Then you could run the app with `yarn start`. This should pop open a window with a stopwatch which we'll be building.

### Any errors?

If you see any errors, read the output and try to follow any instructions. If that doesn't work, feel free to
[file an issue][issues] to ask for help and I'll help if I can. Good luck!

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/199035?v=3" width="100px;"/><br /><sub>Matt Zabriskie</sub>](http://twitter.com/mzabriskie)<br />[💻](https://github.com/kentcdodds/react-workshop/commits?author=mzabriskie) | [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/react-workshop/commits?author=kentcdodds) 🚇 👀 [⚠️](https://github.com/kentcdodds/react-workshop/commits?author=kentcdodds) | [<img src="https://avatars.githubusercontent.com/u/13559161?v=3" width="100px;"/><br /><sub>Jordan Nielson</sub>](https://github.com/jnielson94)<br />[💻](https://github.com/kentcdodds/react-workshop/commits?author=jnielson94) | [<img src="https://avatars.githubusercontent.com/u/1863771?v=3" width="100px;"/><br /><sub>Siddharth Kshetrapal</sub>](https://github.com/siddharthkp)<br />🚇 | [<img src="https://avatars.githubusercontent.com/u/5465958?v=3" width="100px;"/><br /><sub>Ray Gesualdo</sub>](https://github.com/raygesualdo)<br />[💻](https://github.com/kentcdodds/react-workshop/commits?author=raygesualdo) |
| :---: | :---: | :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification. Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/travis/kentcdodds/react-workshop.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/react-workshop
[dependencyci-badge]: https://dependencyci.com/github/kentcdodds/react-workshop/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/kentcdodds/react-workshop
[license-badge]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-workshop/blob/master/other/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-workshop/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/react-workshop.svg?style=social
[github-watch]: https://github.com/kentcdodds/react-workshop/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/react-workshop.svg?style=social
[github-star]: https://github.com/kentcdodds/react-workshop/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-workshop%20by%20@kentcdodds%20https://github.com/kentcdodds/react-workshop%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/react-workshop.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[create-react-app]: https://github.com/facebookincubator/create-react-app
[matt]: https://github.com/mzabriskie
[original-repo]: https://github.com/mzabriskie/react-workshop
[kadira]: https://github.com/kadirahq
[storybook]: https://github.com/kadirahq/react-storybook
[issues]: https://github.com/kentcdodds/react-workshop/issues/new
