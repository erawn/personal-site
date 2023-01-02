import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'
import { pdfjs } from 'react-pdf';
const postDirectory = join(process.cwd(), "_posts")

export function getPostSlugs(postDir) {
  return fs.readdirSync(postDir)
}

export function setPDFWorker(){
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
  const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js');

  fs.copyFileSync(pdfWorkerPath, './dist/pdf.worker.js');
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
 
  const slugs = getPostSlugs(postDirectory)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllImages(folder: string) {
  const imgDirectory = join(process.cwd(), folder)
  const images = fs.readdirSync(imgDirectory)
  const imgs = images.filter((img) => {return (img.includes('jpg') || img.includes('gif') || img.includes('png') || img.includes('jpeg')) })
  const fullPaths = imgs.map((img) => {return "/assets/artifacts/" + img})
  return fullPaths
}