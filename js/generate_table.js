function generate_table() {
    //var body = document.getElementById("table-container");  
    var table = document.getElementById("game-base");
    var tableBody = document.createElement("tbody");  
    var rows = 50;
    var cols = 100;
    var size = 10;
    for (var i = 0; i < rows; i++) 
    {
        var row = document.createElement("tr");

        for (var j = 0; j < cols; j++) 
        {
            var cell = document.createElement("td");
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    
    table.appendChild(tableBody);
    body.appendChild(table);
    //table.setAttribute("width", 50*size);
    //table.setAttribute("height", rows*size)
}