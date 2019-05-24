# React Workshop

[![Build Status][build-badge]][build]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]

[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

<a href="https://app.codesponsor.io/link/PKGFLnhDiFvsUA5P4kAXfiPs/kentcdodds/react-workshop" rel="nofollow"><img src="https://app.codesponsor.io/embed/PKGFLnhDiFvsUA5P4kAXfiPs/kentcdodds/react-workshop.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

## Thank you!

- [Create React App][create-react-app].
- [Matt Zabriskie][matt] for his [react-workshop][original-repo] upon which this one is based.
- [React Docs](http://facebook.github.io/react). Some examples have been lifted from there.

## Note

This repository has been used to teach React several times and has been updated a few times as well.
If you're following along from [this recording](https://www.youtube.com/watch?v=VZaQfb2y6BI),
then you can get to the right spot by running `git checkout aca94d7` before running the setup script. 

## Setup

You need to have the latest [`node`][node], [`npm`][npm], and [`git`][git] installed. Then run:

```
git clone https://github.com/kentcdodds/react-workshop.git
cd react-workshop
npm run setup
```

### All set up!

If you didn't get any errors running the setup scripts, you're ready to start the workshop! 🎉 🎊

If you want to explore a bit, there are a few things you can do:

1. go ahead and open `intro/exercises-final/01-js.html` in a browser (don't peak at the solution!). It should say `Hello World`. Go ahead and open the others if you like.
2. Then you can run `yarn run storybook` and open `http://localhost:9009` and poke around the storybook for our exercises :)
3. Then you could run the app with `yarn start`. This should pop open a window with a stopwatch which we'll be building.

### Any errors?

If you see any errors, read the output and try to follow any instructions. If that doesn't work, feel free to
[file an issue][issues] to ask for help and I'll help if I can. Good luck!

## Outline

### Intro

1. Bare-bones React rendering - [`intro/exercises/01-js.html`](https://github.com/kentcdodds/react-workshop/blob/master/intro/exercises/01-js.html)
2. React rendering with JSX - [`intro/exercises/02-jsx.html`](https://github.com/kentcdodds/react-workshop/blob/master/intro/exercises/02-jsx.html)
3. Custom React Components - [`intro/exercises/03-components.html`](https://github.com/kentcdodds/react-workshop/blob/master/intro/exercises/03-components.html)
4. Re-rendering - [`intro/exercises/04-re-rendering.html`](https://github.com/kentcdodds/react-workshop/blob/master/intro/exercises/04-re-rendering.html)

### Concepts

1. Props - [`src/exercises/01-props.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/01-props.js)
2. PropTypes - [`src/exercises/02-prop-types.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/02-prop-types.js)
3. Styling - [`src/exercises/03-styling.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/03-styling.js)
4. Composition - [`src/exercises/04-composition.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/04-composition.js)
5. Component API - [`src/exercises/05-component-api.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/05-component-api.js)
6. State - [`src/exercises/06-state.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/06-state.js)
7. Uncontrolled Form - [`src/exercises/07-uncontrolled-form.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/07-uncontrolled-form.js)
8. Controlled Form - [`src/exercises/08-controlled-form.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/08-controlled-form.js)
9. Data Fetching - [`src/exercises/09-data-fetching.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/09-data-fetching.js)
10. Higher Order Components - [`src/exercises/10-hoc.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/10-hoc.js)
11. Render Callback - [`src/exercises/11-render-props.js`](https://github.com/kentcdodds/react-workshop/blob/master/src/exercises/11-render-props.js)

### Testing

Check out [react-jest-workshop](https://github.com/kentcdodds/react-jest-workshop)

### Architecture/Applications

Check out [react-github-profile](https://github.com/kentcdodds/react-github-profile)

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://twitter.com/mzabriskie"><img src="https://avatars.githubusercontent.com/u/199035?v=3" width="100px;" alt="Matt Zabriskie"/><br /><sub><b>Matt Zabriskie</b></sub></a><br /><a href="https://github.com/kentcdodds/react-workshop/commits?author=mzabriskie" title="Code">💻</a></td><td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/react-workshop/commits?author=kentcdodds" title="Code">💻</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#review-kentcdodds" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/kentcdodds/react-workshop/commits?author=kentcdodds" title="Tests">⚠️</a></td><td align="center"><a href="https://github.com/jnielson94"><img src="https://avatars.githubusercontent.com/u/13559161?v=3" width="100px;" alt="Jordan Nielson"/><br /><sub><b>Jordan Nielson</b></sub></a><br /><a href="https://github.com/kentcdodds/react-workshop/commits?author=jnielson94" title="Code">💻</a></td><td align="center"><a href="https://github.com/siddharthkp"><img src="https://avatars.githubusercontent.com/u/1863771?v=3" width="100px;" alt="Siddharth Kshetrapal"/><br /><sub><b>Siddharth Kshetrapal</b></sub></a><br /><a href="#infra-siddharthkp" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td><td align="center"><a href="https://github.com/raygesualdo"><img src="https://avatars.githubusercontent.com/u/5465958?v=3" width="100px;" alt="Ray Gesualdo"/><br /><sub><b>Ray Gesualdo</b></sub></a><br /><a href="https://github.com/kentcdodds/react-workshop/commits?author=raygesualdo" title="Code">💻</a></td><td align="center"><a href="https://github.com/IgorKonovalov"><img src="https://avatars2.githubusercontent.com/u/8154172?v=3" width="100px;" alt="Igor Konovalov"/><br /><sub><b>Igor Konovalov</b></sub></a><br /><a href="https://github.com/kentcdodds/react-workshop/commits?author=IgorKonovalov" title="Code">💻</a></td><td align="center"><a href="https://twitter.com/karlhorky"><img src="https://avatars2.githubusercontent.com/u/1935696?v=4" width="100px;" alt="Karl Horky"/><br /><sub><b>Karl Horky</b></sub></a><br /><a href="https://github.com/kentcdodds/react-workshop/commits?author=karlhorky" title="Documentation">📖</a></td></tr></table>

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
[issues]: https://github.com/kentcdodds/react-workshop/issues/new
