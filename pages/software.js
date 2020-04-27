import React from 'react';
import ReactTable from 'react-table';
import axios from 'axios';
import Head from 'next/head';

import Sources from '../components/Sources';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Architecture from '../components/Architecture';

const columns = [
  {
    Header: 'Title',
    accessor: 'html_url',
    Cell: (e) => <a href={e.value}> {e.value.replace('https://github.com/JuzouSatoru2/','')} </a>
  },
  {
    Header: 'Description',
    accessor: 'description'
  },
  {
    Header: 'Language',
    accessor: 'language'
  },
  {
    Header: 'Created at',
    accessor: "created_at",
    Cell: (e) => <div>{e.value.split('T')[0]}</div>
  },
  {
    Header: 'Open issue',
    accessor: "open_issues_count"
  }
  ,
  {
    Header: 'Size (kb)',
    accessor: "size"
  }
];

export default class software extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tableData: [{
          "html_url": '',
          "description": '',
          "language": '',
          "created_at": '',
          "open_issues_count": '',
          "size": ''
      }]
    };
  }

  componentDidMount() {
        axios.get("https://api.github.com/users/JuzouSatoru2/repos", {
            responseType: 'json'
        }).then((response) => {
            this.setState({ tableData: response.data });
        });
  }

  render () {
    const { tableData } = this.state;
    return (
    <div>
      <Head>
        <link rel="stylesheet" href="/static/css/react-table.css"></link>
        <link async rel="stylesheet" href="/static/css/projects.min.css" type="text/css" />
        </Head>
      <Sources></Sources>
      <Header></Header>
      <div className="bxo">
      <h1 className="title">Software Repository</h1>
      <ReactTable
        data={tableData}
        columns={columns}
        defaultPageSize={10}
      />
      </div>
      <Architecture></Architecture>
      <Footer></Footer>
    </div>
    );
  }
}
