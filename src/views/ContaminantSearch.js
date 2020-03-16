import React, { useState, useEffect } from "react";



const ContaminantSearch = (props) => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [tableData, setTableData] = useState([]);

    const getResults = () => {
        fetch('./data/Test-Results.csv')
            .then((response) => {

                let reader = response.body.getReader();

                // read() returns a promise that resolves
                // when a value has been received
                reader.read().then((fileData) => {

                    // value for fetch streams is a Uint8Array
                    const rawData = fileData.value;

                    let utf8decoder = new TextDecoder();

                    let rows = utf8decoder.decode(rawData).split('\n');

                    let results = []

                    for (let i = 1; i < rows.length; i++) {
                        let currentRow = rows[i].split(',');

                        const category = () => {
                            let field = currentRow[5];
                            if (currentRow[6]) {
                                field += currentRow[6] + currentRow[7];
                            }
                            return field;
                        }

                        let newRecord = {
                            'Contaminant': currentRow[0],
                            'Challenge': currentRow[1],
                            'Filtered': currentRow[2],
                            'Removal': currentRow[3],
                            'Model': currentRow[4],
                            'Category': category()
                        };

                        results.push(newRecord);

                    }

                    // Read some more, and call this function again
                    setResults(results)
                    setTableData(results)
                    return

                });


            });


    }

    const changeQuery = e => {
        e.preventDefault();
        setQuery(e.target.value);

        filterResults(e.target.value);

    }


    const filterResults = (searchTerm) => {
        console.log(searchTerm);
        const searchResults = [];
        for (let i = 0; i < results.length; i++) {
            let result = results[i];
            console.log(result);

            if (
                result.Contaminant.toUpperCase().indexOf(searchTerm.toUpperCase())> -1 ||
                result.Model.toUpperCase().indexOf(searchTerm.toUpperCase())> -1 ||
                result.Category.toUpperCase().indexOf(searchTerm.toUpperCase())> -1
            ) {
                searchResults.push(result);
            }

        }
        console.log(searchResults);
        setTableData(searchResults);

    }


    useEffect(() => {
        getResults()


    }, []);

    return (
        <div>
            <div id="search">
                <label>Search:</label>
                <input type='text' value={query} onChange={changeQuery} />
            </div>
            <div id="resultsTable">
                <table>
                    <thead>
                        <tr>
                            <td>Contaminant</td>
                            <td>Challenge Water</td>
                            <td>Filtered Water</td>
                            <td>Removal Rate</td>
                            <td>Filter</td>
                            <td>Category</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((datum, i) => {

                            return (
                                <tr key={i}>
                                    <td>{datum.Contaminant}</td>
                                    <td>{datum.Challenge}</td>
                                    <td>{datum.Filtered}</td>
                                    <td>{datum.Removal}</td>
                                    <td>{datum.Model}</td>
                                    <td>{datum.Category}</td>

                                </tr>
                            );

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContaminantSearch;