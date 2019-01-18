import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const emailAddress = 'ako+test15@veronym.com';
    const subscriptionPlan = 'ESSENTIAL';
    const paymentType = "MONTHLY;"
    fetch("http://localhost:3001/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailAddress, subscriptionPlan, paymentType })
    })
      .then((res) => console.log(res))
      .catch(error => alert(error));
  };

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div
              className="content"
              style={{ marginLeft: "100px", marginTop: "50px" }}
            >
              <h1 className="has-text-weight-bold is-size-2">
                Awesome security, easy wow 
              </h1>
              <h3>
                Mr Gravity recommends 
                <br />
                Very much.
              </h3>
            </div>
          </div>
          <div className="container">
            <div
              className="content"
              style={{ marginLeft: "100px", marginTop: "50px" }}
            >
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

                <div className="field" style={{display: 'flex'}}>
                  <div className="control" style={{marginRight: '15px'}}>
                    <input
                      label ="Tets"
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                      style={{ width: "300px" }}
                    />
                  </div>
                  <div className="field">
                  <button
                    className="button is-link"
                    type="submit"
                    style={{ background: "#004d9b" }}
                  >
                    Get started
                  </button>
                </div>
                </div>


              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
