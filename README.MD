# Code Editor App

This project contains a code editor app built with React, Next.js and Monaco Editor.

## Getting Started

To run the app locally:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the dev server
4. Open `http://localhost:3000` to view the app

## Code Editor Component

The main code editor component is located at `frontend/src/app/Editorx/page.tsx`. 

It uses the `@monaco-editor/react` package to render the Monaco code editor.

Some key props configured:

- `theme` - sets the theme to dark
- `defaultLanguage` - sets the default language to JavaScript
- `defaultValue` - provides initial code in the editor
- `onChange` - callback when code is edited

The editor is wrapped in a page component along with a top navigation bar.

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/) 
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)

## License

[MIT](https://choosealicense.com/licenses/mit/)