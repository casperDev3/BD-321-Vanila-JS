var Constanst;
(function (Constanst) {
    Constanst["baseURL"] = "https://fakestoreapi.com";
})(Constanst || (Constanst = {}));
function getAllProducts(endpoint) {
    return fetch("".concat(Constanst.baseURL, "/").concat(endpoint))
        .then(function (res) { return res.json(); })
        .then(function (json) { return json; });
}
function displayProducts(data) {
    console.log(data[0]);
    var html = "";
    data.map(function (item) {
        var id = item.id, title = item.title;
        html += "<h1>".concat(title, "</h1>");
    });
    document.querySelector(".area").innerHTML = html;
}
// start point
document.addEventListener('DOMContentLoaded', function () {
    getAllProducts("products").then(function (data) { displayProducts(data); });
});
