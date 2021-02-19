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

    let filteredArray = tableData

    console.log(dateTime);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);

    if (dateTime.length != 0) {filteredArray = filteredArray.filter(key => key.datetime === dateTime);}
    console.log(filteredArray);
    console.log(city.length);
    if (city.length != 0) {filteredArray = filteredArray.filter(key => key.city === city);}
    console.log(filteredArray);
    if (state.length != 0) {filteredArray = filteredArray.filter(key => key.state === state);}
    if (country.length != 0) {filteredArray = filteredArray.filter(key => key.country === country);}
    if (shape.length != 0) {filteredArray = filteredArray.filter(key => key.shape === shape);}

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

