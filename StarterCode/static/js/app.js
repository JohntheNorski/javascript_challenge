// from data.js
var tableData = data;

// YOUR CODE HERE!

var submit = d3.select("#filter-btn");

function updateTable(event) {

    let dateTime = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

    console.log(dateTime);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);


    let filteredArray = tableData.filter(
        key => key.datetime === dateTime &&
                key.city === city &&
                key.state === state &&
                key.country === country
    );

    console.log(filteredArray);

    d3.select("#ufo-table").select("tbody").selectAll("*").remove()

    d3.select("#ufo-table").select("tbody").selectAll("tr")
        .data(filteredArray)
        .enter()
        .append("tr")
        .html(d => `<tr><td>${d.datetime}</td>
                        <td>${d.city}</td>
                        <td>${d.state}</td>
                        <td>${d.country}</td>
                        <td>${d.shape}</td>
                        <td>${d.durationMinutes}</td>
                        <td>${d.comments}</td></tr>`)
}

submit.on("click",updateTable);

