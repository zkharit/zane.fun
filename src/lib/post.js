import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import showdown from 'showdown';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostPaths() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
 
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      }
    }
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const converter = new showdown.Converter();
  const text = matterResult.content;
  const contentHtml = converter.makeHtml(text);

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}