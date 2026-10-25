
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let a = '<form id="form">';

        for (let i = 0; i < this.fields.length; i++) {
            a += this.fields[i].label + ": ";
            a += '<input type="' + this.fields[i].type +
                 '" id="f' + i + '"><br><br>';
        }

        a += '<button type="submit">Submit</button></form>';

        document.getElementById("box").innerHTML = a;

        document.getElementById("form").onsubmit = (e) => {
            e.preventDefault();
            console.log(this.getFormData());
            document.getElementById("result").innerText =
                JSON.stringify(this.getFormData());
        };
    }

    getFormData() {
        let a = {};

        for (let i = 0; i < this.fields.length; i++) {
            a[this.fields[i].label] =
                document.getElementById("f" + i).value;
        }

        return a;
    }
}

let fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

let a = new FormBuilder(fields);
a.createForm();
