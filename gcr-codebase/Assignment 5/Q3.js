
let user = {
    name: "Amit",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

user.showName = function() {
    console.log(this.name);
};

user.showName();
