# Photographer gallery 📸 [![GitHub](https://img.shields.io/apm/l/npm?color=blue)](https://github.com/mounirhnf/photographer-gallery/blob/master/LICENSE.md)
A minimal, ready to use gallery template for photographers who are looking to expand their reach into the digital world.
# Preview 🖼️

<h2 align="center">
  <img src="https://github.com/mounirhnf/photographer-gallery/blob/main/example/example.gif" alt="preview" width="600px" />
  <br>
</h2>

# Features 💡
⚡️ Fast and Reliable\
⚡️ Modern and esthetically pleasing UI\
⚡️ Great UX Design\
⚡️ Fully responsive\
⚡️ Optimized for search engines\
⚡️ Comprehensive and well written code\
⚡️ Well organized project structure
# Technologies 🛠️
- [ReactJs](https://reactjs.org/) - Javascript UI Library
- [NextJs](https://nextjs.org/) - NodeJs Framwork for creating server-side and static web applications
- [Redux](https://redux.js.org/) - State manager for Javascript apps
- [TypeScript](https://www.typescriptlang.org/) - Javascript on steroids
- [SCSS](https://sass-lang.com/) - CSS with superpowers
- [Webpack](https://webpack.js.org/concepts/) - Module bundler
- [React Icons](https://react-icons.github.io/react-icons/) - Component based icons for ReactJs
# Usage 🚀
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
## Prerequisites 📋
You'll need [Node.js](https://nodejs.org/en/download/) and [NPM](http://npmjs.com) installed on your computer

```
node@v12.13.0 or higher
npm@7.16.0 or higher
git@2.24.0 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM

```
yarn@v1.22.10 or higher
```
## How To Use 🔧
From your command line, first clone the repository into your local machine:
```bash
# Clone this repository
$ git clone https://github.com/mounirhnf/photographer-gallery

# Then go into the repository
$ cd photographer-gallery
```

Install the dependencies:
```bash
# Install with NPM
$ npm install

# Install with YARN
$ yarn install
```
Lastly launch the Project:
```bash
# Launch with NPM
$ npm run dev

# Launch with YARN
$ yarn dev
```
Once you complete these steps, you should find you app running on this url `http://localhost:3000/`
# Updating The Gallery 👨🏻‍💻
**NOTE**: This template contains comprehensive and well written code, So if you are familliar with the stack used here it should be easy to change the template to your liking, but I can provide some instructions on how to update the gallery
## Gallery Data 💾:
The gallery's data is staticly defined in the `src/resources/gallery.json`.\
To update the gallery you need to follow the structure of a gallery item wich is  defined as follows:
### Definition:
```typescript
{
  "id": number;
  "title": string;
  "url": string;
  "group": string[];
  "loader": [string, number, number];
}
```
### Example:
```typescript
{
  "id": 1;
  "title": "Photo of a lake";
  "url": "/img/gallery/lake-photo.jpg";
  "group": ['nature', 'water', 'lake'];
  "loader": ['#000000', 600, 500];
}
```
- The `url` property contains the path to the correponding image in the
public folder
- The `group` property contains the category that this image belongs to, it is important to get a correct filtering
- The `loader` property contains data that is used in the UI to provide a smooth loading feedback for the image before it loads, it is an array of three properties wich correspond to the `accent-color`, `height` and `width` of the image
# Author ✍️
**Mounir Hanafi** - [www.mounirhanafi.com](https://mounirhanafi.com)
# Licence 📄
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Acknowledgments 🎁
I was motivated to create this project because I wanted to contribute with something useful for the dev community 💚
