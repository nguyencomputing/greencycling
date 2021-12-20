
function Seller() {
    let self = this;

    this.cart = [];
    
    function Item(name, imgSrc, price) {
        this.name = name;
        this.imgSrc = imgSrc;
        this.price = price;

        this.DOM = () => {
            let element = document.createElement("div");
            let title = document.createElement("h3");
            let image = document.createElement("img");
            let pricetag = document.createElement("p");
            let btn = document.createElement("button");
            image.className = "img";
            btn.className = "button2";
            title.innerHTML = this.name;
            image.src = this.imgSrc;
            image.height = 200;
           pricetag.innerHTML = "Price: " + this.price.toLocaleString() + 'VND/kg';
            btn.innerHTML = "Sell";
            
            btn.addEventListener("click", () => self.addItem(name, price, 1));

            element.appendChild(image);
            element.appendChild(title);
            element.appendChild(pricetag);
            element.appendChild(btn);

            element.className = "card";

            return element;
        }
    }

    this.items = [
        new Item("PET Plastic", "img/bottle.png", 3500),
        new Item("Newspaper", "img/newspaper.png", 2500),
        new Item("Cardboard", "img/cardboard.png", 1000),
        new Item("Aluminium Cans", "img/can.png", 1500),
        new Item("Scrap Metal", "img/metal.png", 25000),
        new Item("Electronics", "img/electronics.png", 30000),
    ];

    this.addItem = (name, price, count) => {
        for (let item in this.cart) {
            if (this.cart[item].name == name) {
                this.cart[item].count += count;
                this.updateCart();
                return;
            }
        }
        this.cart.push({
            "name": name,
            "price": price,
            "count": count
        });
        this.updateCart();
    }

    this.changeCount = (name, count) => {
        for (let item in this.cart) {
            if (this.cart[item].name == name) {
                this.cart[item].count = count;
                this.updateCart();
                break;
            }
        }
    }

    this.remove = (name) => {
        for (let item in this.cart) {
            if (this.cart[item].name == name) {
                this.cart.splice(item, 1);
                this.updateCart();
                break;
            }
        }

    }

    this.clear = () => {
        this.cart = [];
        this.updateCart();
    };

    this.total = () => {
        let sum = 0;
        for (let item in this.cart) {
            sum += this.cart[item].price * this.cart[item].count;
        }
        return sum.toLocaleString();
    }

    this.count = () => {
        let cnt = 0;
        for (let item in this.cart) {
            cnt +=  this.cart[item].count;
        }
        return cnt;
    }

    this.updateCart = () => {
        let cnt = this.count();
        if (cnt) document.getElementById("view-items").innerHTML = "Cart (" + cnt + ")";
        else document.getElementById("view-items").innerHTML = "Cart";

        let tbody = document.getElementById("list-items");
        tbody.innerHTML = "";
        for (let i in this.cart) {
            let row = document.createElement("tr");
            let name = document.createElement("td");
            let price = document.createElement("td");
            let total = document.createElement("td");
            let count = document.createElement("input");
            let cancel = document.createElement("button");
            
            row.className = "item";
            name.innerHTML = this.cart[i].name;
            name.style.width = "120px";
            price.innerHTML = "(" + this.cart[i].price.toLocaleString() + "VND/kg)";
            total.innerHTML = (this.cart[i].price * this.cart[i].count).toLocaleString() + 'VND';
            count.value = this.cart[i].count;
            count.type = "number";
            count.min = "0";
            count.addEventListener("change", () => this.changeCount(this.cart[i].name, +count.value));
            cancel.innerHTML = "&times;";
            cancel.addEventListener("click", () => this.remove(this.cart[i].name));
            cancel.className = "close"
            
            row.appendChild(cancel);
            row.appendChild(name);
            row.appendChild(price);
            row.appendChild(count);
            row.appendChild(total);
            tbody.appendChild(row);
        }

        document.getElementById("total-price").innerHTML = "Total price: " + this.total() + 'VND';
    }

    for (let item in this.items) document.getElementById("item-container").appendChild(this.items[item].DOM());

    document.getElementById("view-items").addEventListener("click", () => document.getElementById("popup-background").style.display = "flex");

    document.getElementById("close-items").addEventListener("click", () => document.getElementById("popup-background").style.display = "none");

    document.getElementById("clear-items").addEventListener("click", this.clear);
}
(() => { new Seller(); })()
function finish() {
    swal({
        title: "Thank you!",
        text: "Thank you for contributing to a greener world!😊",
        type: "success"
    }).then(function() {
        window.location = "index.html";
    });
}

