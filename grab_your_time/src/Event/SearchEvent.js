import React from "react";
// import { render } from "react-dom";
import _ from "lodash";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import myEventList from "./myEventsList"
import moment from 'moment'

const rawData = myEventList

const requestData = (pageSize, page, sorted, filtered) => {
  return new Promise((resolve, reject) => {
    // You can retrieve your data however you want, in this case, we will just use some local data.
    let filteredData = rawData;

    // You can use the filters in your request, but you are responsible for applying them.
    if (filtered.length) {
      filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        return filteredSoFar.filter(row => {
          return (row[nextFilter.id] + "").includes(nextFilter.value);
        });
      }, filteredData);
    }
    // You can also use the sorting in your request, but again, you are responsible for applying it.
    const sortedData = _.orderBy(
      filteredData,
      sorted.map(sort => {
        return row => {
          if (row[sort.id] === null || row[sort.id] === undefined) {
            return -Infinity;
          }
          return typeof row[sort.id] === "string"
            ? row[sort.id].toLowerCase()
            : row[sort.id];
        };
      }),
      sorted.map(d => (d.desc ? "desc" : "asc"))
    );

    // You must return an object containing the rows of the current page, and optionally the total pages number.
    const res = {
      rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(filteredData.length / pageSize)
    };
    resolve(res)
    // Here we'll simulate a server response with 500ms of delay.
  });
};

export default class SearchEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pages: null,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData(state, instance) {
    // Whenever the table model changes, or the user sorts or changes pages, this method gets called and passed the current table model.
    // You can set the `loading` prop of the table to true to use the built-in one or show you're own loading bar if you want.
    // Request the data however you want.  Here, we'll use our mocked service we created earlier
    requestData(
      state.pageSize,
      state.page,
      state.sorted,
      state.filtered
    ).then(res => {
      // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
      this.setState({
        data: res.rows,
        pages: res.pages,
      });
    });
  }
  render() {
    const { data, pages } = this.state;
    return (
      <div>
        <ReactTable
          columns={[
            {
              Header: "類別",
              accessor: "title"
            },
            {
              Header: "內容",
              accessor: "desc"
            },
            {
              Header: "StartTime",
              id: "startTime",
              accessor: data => moment(data.startstart).format('YYYY/MM/DD HH:mm')
              ,
              filterable: false
            },
            {
              Header: "EndTime",
              id: "endTime",
              accessor: data => moment(data.end).format('YYYY/MM/DD HH:mm')
              ,
              filterable: false
            }
          ]}
          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          data={data}
          pages={pages} // Display the total number of pages
          onFetchData={this.fetchData} // Request new data when things change
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        {/* <Tips />
        <Logo /> */}
      </div>
    );
  }
}
