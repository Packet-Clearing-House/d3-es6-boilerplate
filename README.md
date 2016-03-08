[![Dependency Status](https://david-dm.org/Packet-Clearing-House/d3-es6-boilerplate.svg)](https://david-dm.org/Packet-Clearing-House/d3-es6-boilerplate) [![devDependency Status](https://david-dm.org/Packet-Clearing-House/d3-es6-boilerplate/dev-status.svg)](https://david-dm.org/Packet-Clearing-House/d3-es6-boilerplate#info=devDependencies)

# D3 ES6 Project Boilerplate

Boilerplate for D3 projects with Javascript ES6.

## Boilerplate Features

- Automates building and actions using [Gulp](http://gulpjs.com/)
- Manages Browser Javascript using [Bower](http://bower.io/)
- Transpiles ES6+ automagically using [Babel](https://babeljs.io/) and uses sourcemap to better debug code.
- Local dev server with [BrowserSync](http://browsersync.io/)
- Compress assets for production with Uglify
- Lints your code using ESLint (Airbnb code style)
- Get environment _development_ or _production_ with the JS variable `ENV`
- Use Bower to get vendors Javascript libraries and combine them (here D3)

## Requirements

- [NodeJs](http://www.nodejs.org), type `npm -v` on your terminal to check if you have it.
- Gulp `npm install -g gulp`
- Bower `npm install -g bower`

## Getting Started

1. Run `npm install` in the root directory to install dependencies
2. Run `gulp` to start the local dev environment on `http://localhost:5000`
3. To have production ready files, run: `gulp dist`. All built files are located in the folder `/build/`
4. Enjoy 🍻

## Contributing

If you like this/find it useful/find a bug please open an [issue](https://github.com/Packet-Clearing-House/d3-es6-boilerplate/issues) and, better yet, submit a Pull Request!

Any and all help appreciated, thanks!
