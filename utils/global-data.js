import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export const GAMES_PATH = path.join(process.cwd(), 'pages/games');
export const postFilePaths = fs
  .readdirSync(GAMES_PATH)
  .filter((path) => /\.js?$/.test(path));

export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Zeusmos';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Zeusmos\'s Garbage Opinions';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Play to improve';

  return {
    name,
    blogTitle,
    footerText,
  };
};


export const getGames = () => {
  let posts = postFilePaths.map((filePath) => {
    return path.parse(filePath).name;
  });


  return posts;
};
