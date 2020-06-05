import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout from '../../../components/Layout';

function Show() {
  const [post, setPost] = React.useState(null);
  const router = useRouter();
  const { slug } = router.query;
  React.useEffect(() => {
    const fetchData = async () => {
      axios.get(`/api/blog/${slug}`, {
        responseType: 'json'
    }).then((response) => {
      setPost(response.data); 
    });
    };
    if (slug) {
      fetchData();
    }
  }, [slug]);

  return (
    <Layout>
     <div className="container">
    <h1 className="mb-1">{post ? post.title : null}</h1>
    <div className="text-muted mb-2">
      {post ? new Date(post.createdAt).toLocaleDateString("en" , { year: 'numeric', month: 'long', day: 'numeric' }) : null}
    </div>
    <Link href="/blog"><a className="btn btn-secondary">All Articles</a></Link>
    <div dangerouslySetInnerHTML={{__html: post ? post.sanitizedHtml : ''}}></div>
  </div>
    </Layout>
  );
}

export default Show;