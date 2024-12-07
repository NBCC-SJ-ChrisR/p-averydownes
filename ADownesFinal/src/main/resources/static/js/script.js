////////////////////////////////////////////////// All Crud
/////////////////////////PizzaCrust
//GET All
function getAllPizzaCrust() {
  let url = "http://localHost:8080/api/PizzaCrust";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//GET by ID
function getPizzaCrust(id) {
  let url = "http://localHost:8080/api/PizzaCrust/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
/////////////////////////PizzaSize
//GET All
function getAllPizzaSize() {
  let url = "http://localHost:8080/api/PizzaSize";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//GET by ID
function getPizzaSize(id) {
  let url = "http://localHost:8080/api/PizzaSize/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
/////////////////////////Employee
//GET All
function getAllEmployee() {
  let url = "http://localHost:8080/api/Employee";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
/////////////////////////GET by ID
function getEmployee(id) {
  let url = "http://localHost:8080/api/Employee/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
/////////////////////////PizzaTopping
//GET All
function getAllPizzaTopping() {
  let url = "http://localHost:8080/api/PizzaTopping";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//GET by ID
function getPizzaTopping(id) {
  let url = "http://localHost:8080/api/PizzaTopping/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//PUT
function updatePizzaTopping(pizzaTopping) {
  let url =
    "http://localHost:8080/api/PizzaTopping/" + pizzaTopping.pizzaTopping_id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("PUT", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(pizzaTopping));
}
//POST
function createPizzaTopping(pizzaTopping) {
  let url = "http://localHost:8080/api/PizzaTopping";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(pizzaTopping));
}
//DELETE
function deletePizzaTopping(id) {
  let url = "http://localHost:8080/api/PizzaTopping/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("DELETE", url);
  xhr.send();
}
/////////////////////////Customer
//GET All
function getAllCustomer() {
  let url = "http://localHost:8080/api/Customer";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//GET by ID
function getCustomer(id) {
  let url = "http://localHost:8080/api/Customer/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//PUT
function updateCustomer(customer) {
  let url = "http://localHost:8080/api/Customer/" + customer.customer_id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("PUT", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(customer));
}
//POST
function createCustomer(customer) {
  let url = "http://localHost:8080/api/Customer";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(customer));
}
/////////////////////////Order
//GET All
function getAllOrder() {
  let url = "http://localHost:8080/api/Order";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//GET by ID
function getOrder(id) {
  let url = "http://localHost:8080/api/Order/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//PUT
function updateOrder(order) {
  let url = "http://localHost:8080/api/Order/" + order.order_id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("PUT", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(order));
}
//POST
function createOrder(order) {
  let url = "http://localHost:8080/api/Order";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(order));
}
/////////////////////////Pizza
//GET All
function getAllPizza() {
  let url = "http://localHost:8080/api/Pizza";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//GET by ID
function getPizza(id) {
  let url = "http://localHost:8080/api/Pizza/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//POST
function createPizza(pizza) {
  let url = "http://localHost:8080/api/Pizza";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(pizza));
}
/////////////////////////PizzaToppingMap
//GET All
function getAllPizzaToppingMap() {
  let url = "http://localHost:8080/api/PizzaToppingMap";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//GET by ID
function getPizzaToppingMap(id) {
  let url = "http://localHost:8080/api/PizzaToppingMap/" + id;
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
//POST
function createPizzaToppingMap(pizzaToppingMap) {
  let url = "http://localHost:8080/api/PizzaToppingMap";
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        initializePage();
      } else if (xhr.status === 400) {
        alert("An error has occured");
        console.log(
          "400 Error: Server has rejected insert due to malformed data"
        );
      } else if (xhr.status === 404) {
        alert("An error has occured");
        console.log("404 Error: Item does not Exist.");
      } else if (xhr.status === 405) {
        alert("An error has occured");
        console.log("405 Error: Request not allowed.");
      } else if (xhr.status === 409) {
        alert("An error has occured");
        console.log("409 Error: Item already exists.");
      } else if (xhr.status === 500) {
        alert("An error has occured");
        console.log("500 Error: Internal Server Error.");
      }
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(pizzaToppingMap));
}
