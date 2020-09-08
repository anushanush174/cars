const carModel = [
    "Model",
    "Brand",
    "Date",
    "Horsepower",
    "Transmission",
    "Class",
];
carModel.push("ADD");
carModel.push("Edit");
let body = document.getElementsByTagName("body")[0];
let div = document.createElement("div");
div.setAttribute("id", "tableDiv");
let divPagination = document.createElement("div");
divPagination.setAttribute("id", "paginationDiv");
body.appendChild(div);
body.appendChild(divPagination);
let table = document.createElement("table");
table.setAttribute("id", "table");
const notesOnPage = 10;
let car = JSON.parse(localStorage.getItem("carList"));
let ul;
const pageStart = 0;
let pageEnd = pageStart + notesOnPage;

let model;
let brand;
let date;
let horsepower;
let transmission;
let clas;
let editButton;

createTable(car.slice(0, notesOnPage));

function createTable(cars) {
    let title = document.createElement("tr");

    for (let i = 0; i < carModel.length; i++) {
        let th = document.createElement("th");
        if (i < carModel.length - 2) {
            th.setAttribute("draggable", "true");
            th.setAttribute("ondragover", "onDragOver()");
            th.setAttribute("ondrop", "onDrop(event)");
            th.setAttribute("ondragstart", "onDragStart(${i}, event)");
        } else if (i < carModel.length - 1) {
            th.setAttribute("onclick", "createRow()");
        }
        th.innerText = (carModel[i]);
        title.appendChild(th);
    }

    table.appendChild(title);

    for (let i = 0; i < cars.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j <= carModel.length - 1; j++) {

            let td = document.createElement("td");
            cars[i].ADD = "Delete";
            cars[i].Edit = "edit";

            td.innerText = cars[i][carModel[j]];

            tr.appendChild(td);

            if (j === carModel.length - 1) {
                td.addEventListener("click", function () {
                    editRows(cars[pageStart + i], pageStart + i);
                })
            }
        }
        table.appendChild(tr);
    }
    div.appendChild(table);

    divPagination.innerHTML = "";
    createPagination();
    deleteRows();

    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[carModel.length - 1].onclick = function () {
            let editForm = document.getElementById("formEditCarID")
            if (editForm.style.display === "block") {
                editForm.style.display = "none";
            } else {
                editForm.style.display = "block";
            }
        }
    }
}

function createPagination() {
    let amountPages = Math.ceil(car.length / notesOnPage);

    let ul = document.createElement("ul");
    ul.setAttribute("id", "pagination");

    let items = [];
    for (let i = 1; i <= amountPages; i++) {
        let li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
        items.push(li);
    }

    for (let item of items) {
        item.addEventListener("click", function () {
            let active = document.querySelector("#pagination li.active");
            if (active) {
                active.classList.remove("active");
            }
            this.classList.add("active");

            let pageNum = +this.innerHTML;

            pageStart = (pageNum - 1) * notesOnPage;
            pageEnd = pageStart + notesOnPage;
            let notes = car.slice(pageStart, pageEnd);
            table.innerHTML = "";
            createTable(notes);
        })
    }
    divPagination.appendChild(ul);
}

function deleteRows() {
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[carModel.length - 2].onclick = function () {
            let question = confirm("Do you want to delete this row?");
            if (question === true) {
                let index = this.parentNode.rowIndex;
                table.deleteRow(index);
                car.splice(index - 1, 1);

                localStorage.setItem("carList", JSON.stringify(car));
                // table.innerHTML = "";
                // createTable(car);
            }
        }
    }
}

function addRows() {
    model = document.getElementById("model");
    brand = document.getElementById("brand");
    date = document.getElementById("date");
    horsepower = document.getElementById("horsepower");
    transmission = document.getElementById("transmission");
    clas = document.getElementById("clas");

    let newCar = {
        Model: model.value,
        Brand: brand.value,
        Date: date.value,
        Horsepower: horsepower.value,
        Transmission: transmission.value,
        Class: clas.value,
    };

    car.unshift(newCar);
    table.innerHTML = "";
    createTable(car.slice(0, notesOnPage));
    document.getElementById("formAddCar").style.display = "none";

    model.value = "";
    brand.value = "";
    date.value = "";
    horsepower.value = "";
    transmission.value = "";
    clas.value = "";
}

function onDragStart(index, event) {
    event.dataTransfer.setData("index", index);
}

function onDragOver() {
    event.preventDefault();
}

function onDrop(event) {
    let data = event.dataTransfer.getData("index");
    dragAndDropArray(carModel, data, carModel.indexOf(event.target.innerHTML));
}

function dragAndDropArray(arr, arg1, arg2) {
    let del = arr.splice(arg1, 1).toString();
    arr.splice(arg2, 0, del);
    table.innerHTML = "";
    createTable(car.slice(0, notesOnPage));
}

function createRow() {
    let form = document.getElementById("formAddCar");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

function editRows(data, position) {
    console.log(data)
    model = document.getElementById("modelEdit");
    brand = document.getElementById("brandEdit");
    date = document.getElementById("dateEdit");
    horsepower = document.getElementById("horsepowerEdit");
    transmission = document.getElementById("transmissionEdit");
    clas = document.getElementById("clasEdit");
    editButton = document.getElementById("editButtonId");
    editButton.setAttribute("onclick", "saveEditedValues(${position})");

    model.value = data.Model;
    brand.value = data.Brand;
    date.value = data.Date;
    horsepower.value = data.Horsepower;
    transmission.value = data.Transmission;
    clas.value = data.Class;
}

function saveEditedValues(index) {
    let editedModel = {
        Model: model.value,
        Brand: brand.value,
        Date: date.value,
        Horsepower: horsepower.value,
        Transmission: transmission.value,
        Class: clas.value,
    };

    car[index] = editedModel;
    table.innerHTML = "";
    createTable(car.slice(pageStart, pageEnd));
    document.getElementById("formEditCarID").style.display = "none";
}

function searchIntoTable() {
    let searchInput = document.getElementById("searchInputId")

    let filteredCarList = car.filter(item => {
        console.log(item)

        for (let obj in car) {
            car[obj].match(searchInput.value)
        }
    })

    localStorage.setItem("carList", JSON.stringify(filteredCarList))
    createTable()
}