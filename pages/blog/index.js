import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import Layout from '../../components/Layout';

export default function blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('/api/blog', {
        responseType: 'json',
      })
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  function formatDate(string) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString('en', options);
  }

  return (
    <Layout>
      <div className="container">
        <h1 className="mb-4">Blog articles</h1>
        {articles.map((article) => (
          <div className="card mt-4" key={article.title}>
            <div className="card-body">
              <h4 className="card-title">{article.title}</h4>
              <div className="card-subtitle text-muted mb-2">
                {formatDate(article.createdAt)}
              </div>
              <div className="card-text mb-2">{article.description}</div>
              <Link href={'blog/show/' + article.slug}>
                <a className="btn btn-primary">Read More</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
