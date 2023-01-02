import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Header from '../components/header'
import Publications from '../components/publications'
type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const researchPosts = allPosts.filter(post => post.type === 'publication')
  return (
    <>
      <Layout>
        <Head>
          <title>Eric Rawn Portfolio</title>
        </Head>
        <Header/>
        <Container>
          {allPosts.length > 0 && <Publications posts={researchPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'secondImage',
    'excerpt',
    'type'
  ])

  return {
    props: { allPosts },
  }
}
