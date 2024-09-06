import { NextApiHandler } from 'next';
import RSS from 'rss';

import { notesApi } from '../../lib/notesApi';
import { publicationApi } from '../../lib/publicationApi';

const rss: NextApiHandler = async (req, res) => {
  const feed = new RSS({
    title: 'Yuqi Zhao',
    site_url: 'https://yuqiweb.com',
    feed_url: 'https://yuqiweb.com/rss.xml',
  });

  const allPosts = await notesApi.getNotes();
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://yuqiweb.com/blogs/${post.slug}`,
      date: post.publishedAt,
      description: post.description,
    });
  });

  const allPublications = await publicationApi.getNotes();
  allPublications.map((post) => {
    feed.item({
      title: post.title,
      url: `https://yuqiweb.com/publications/${post.slug}`,
      date: post.year,
      description: post.author,
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(feed.xml({ indent: true }));
  res.end();
};

export default rss;
