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

                        const model = (type) => {
                            let img;
                            let listing;
                            if (type === 'Pitcher Filter') {
                                img = './img/PitcherFilter.jpg';
                                listing = 'https://www.clearlyfiltered.com/products/clean-water-pitcher-replacement-filter';

                            }
                            if (type === 'Bottle Filter') {
                                img = './img/BottleFilter.jpg';
                                listing = 'https://www.clearlyfiltered.com/products/stainless-steel-filter-bottle-replacement-filter';
                            }
                            if (type === 'UTS') {
                                img = './img/UTS.jpg';
                                listing = 'https://www.clearlyfiltered.com/products/3-stage-under-the-sink-filter-unit';
                            }

                            return ({
                                'Name': type,
                                'Img': img,
                                'Listing': listing
                            });
                        }

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
                            'Model': model(currentRow[4]),
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
                result.Contaminant.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1 ||
                result.Model.Name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1 ||
                result.Category.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
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
                <label>Filter: </label>
                <input type='text' value={query} onChange={changeQuery} />
            </div>
            <div id="resultsTable">
                <table>
                    <thead>
                        <tr>
                            <th>Contaminant Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((datum, i) => {
                            console.log(datum.Model);

                            return (
                                <tr key={i}>
                                    <td>
                                        <div>{datum.Contaminant}</div>
                                        <div><img className='prodImg' alt='' src={datum.Model.Img} /></div>
                                        <div>
                                            <table className='contam-results'>
                                                <thead>
                                                    <tr>
                                                        <td>Pre Filter</td>
                                                        <td>Post Filter</td>
                                                        <td>%</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                   
                                                    <tr>
                                                        <td>{datum.Challenge}</td>
                                                        <td>{datum.Filtered}</td>
                                                        <td>{datum.Removal}</td>
                                                    </tr>
                                                </tbody>
                                            </table>



                                        </div>


                                    </td>

                                    {/* <td>{datum.Challenge}</td>
                                    <td>{datum.Filtered}</td>
                                    <td>{datum.Removal}</td>
                                    <td><img className='prodImg' alt='' src={datum.Model.Img}/></td> */}
                                    {/* <td>{datum.Category}</td> */}

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