import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import Layout from '../../components/Layout';

export default class blog extends React.Component {
  constructor(props) {
    super(props);
    this.formatDate = this.formatDate.bind(this);
    this.state = {
      articles: [{
        "id": "",
        "createdAt": "",
        "title": "",
        "description": "",
        "markdown": "",
        "slug": "",
        "sanitizedHtml": ""
      }]
    };
  }

  componentDidMount() {
    axios.get("/api/blog", {
      responseType: 'json'
    }).then((response) => {
      this.setState({ articles: response.data });
    });
  }

  formatDate(string) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString("en", options);
  }

  render() {
    const { articles } = this.state;
    return (
      <Layout>
        <div className="container">
          <h1 className="mb-4">Blog articles</h1>
          {articles.map((article) => (
            <div className="card mt-4" key={article.title}>
              <div className="card-body">
                <h4 className="card-title">{article.title}</h4>
                <div className="card-subtitle text-muted mb-2">
                  {this.formatDate(article.createdAt)}
                </div>
                <div className="card-text mb-2">{article.description}</div>
                <Link href={"blog/show/" + article.slug}><a className="btn btn-primary">Read More</a></Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}