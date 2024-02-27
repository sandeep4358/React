import DataTable from "react-data-table-component";
import axios, { Post } from "axios";
import { useEffect, useState } from "react";

const CountiesTables = () => {
  const [countires, setCountires] = useState([]);
  const [search, setSearch] = useState();
  const [filterdCountires, setFilterdCountires] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      console.log(response);
      setCountires(response.data);
      setFilterdCountires(response.data); // intially needed to show complete data.
    } catch (error) {
      console.log(error);
    }
  };
  /** below will hold the data column  */
  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => <img src={row.flag} alt="" width={50} height={50} />,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-primary"
          onclick={() => alert(row.alpha2Code)}
        >
          Edit
        </button>
      ),
    },
  ];
  useEffect(() => {
    console.log("useEffect called...");
    getCountries();
  }, []);

  useEffect(() => {
    const result = countires.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterdCountires(result);
  }, [search]);

  return (
    <DataTable
      title="Country List"
      columns={columns}
      data={filterdCountires}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={<button className="btn btn-sm btn-info">Export</button>}
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search Here"
          className="form-control w-25"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      }
      subHeaderAlign="left"
    />
  );
};

export default CountiesTables;
