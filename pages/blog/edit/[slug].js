/*

Todo: Enable post
Todo: Add delete button

*/
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";

function Edit() {
  const [post, setPost] = React.useState(null);
  const router = useRouter();
  const { slug } = router.query;
  React.useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`/api/blog/${slug}`, {
          responseType: "json",
        })
        .then((response) => {
          setPost(response.data);
        });
    };
    if (slug) {
      fetchData();
    }
  }, [slug]);

  return (
    <Layout>
      <div className="bxo">
        <h1 className="title">Edit article</h1>
        <h2 className="subtitle">Still in development!</h2>
        <div className="container-fluid my-5">
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="statictitle"
                  required="required"
                  defaultValue={post ? post.title : ""}
                ></input>
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
                ></textarea>
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
                ></textarea>
              </div>
            </div>
            <button className="btn btn-primary m-4" type="submit">
              Submit post
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
