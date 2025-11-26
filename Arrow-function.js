const user = {
    name: "Gitesh",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const user2 = {
    name: "Gitesh",
    showName() {
        console.log(this.name);
    }
};

user2.showName();
