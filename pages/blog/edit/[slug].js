import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import cookies from 'js-cookie';

import Layout from '../../../components/Layout';

function Edit() {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [mark, setMark] = useState(null);
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`/api/blog/${slug}`, {
          responseType: 'json',
          headers: {
            Authorization: `${cookies.get('bearerKey')}`,
          },
        })
        .then((response) => {
          setPost(response.data);
          setTitle(response.data.title);
          setDesc(response.data.description);
          setMark(response.data.markdown);
        });
    };
    if (slug) {
      fetchData();
    }
  }, [slug]);

  const submitEdit = () => {
    axios.patch(
      `/api/blog/${post._id}`,
      { title: title, description: desc, markdown: mark },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${cookies.get('bearerKey')}`,
        },
      }
    );
    router.push(`/blog/show/${slug}`);
  };

  const deletePost = () => {
    axios.delete(`/api/blog/${post._id}`);
    router.push(`/blog`);
  };

  return (
    <Layout>
      <div className="bxo">
        <h1 className="title">Edit article</h1>
        <div className="container-fluid my-5">
          <form onSubmit={submitEdit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="statictitle"
                  required="required"
                  defaultValue={post ? post.title : ''}
                  onChange={(e) => setTitle(e.target.value)}></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="staticdescription"
                  required="required"
                  defaultValue={post ? post.description : null}
                  onChange={(e) => setDesc(e.target.value)}></textarea>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Markdown</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="staticMarkdown"
                  required="required"
                  rows="7"
                  defaultValue={post ? post.markdown : null}
                  onChange={(e) => setMark(e.target.value)}></textarea>
              </div>
            </div>
            <button className="btn btn-primary m-4" type="submit">
              Submit post
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={deletePost}>
              Delete post
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .bxo {
          text-align: center;
        }

        .title {
          font-size: 1.9em;
          text-align: left;
          padding: 10px;
        }

        .subtitle {
          font-size: 1.4em;
          text-align: left;
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
}

export default Edit;
