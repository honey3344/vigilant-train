// console.log("hello man")


var indexes = 0;
var outputs = 0;


document.getElementById('studentlist').innerHTML = localStorage.getItem("itemstudent");

const addit = () => {
    // alert()
    indexes = localStorage.length;
    var valuesss = document.getElementById('fname').value;

    if ("my_sub" in localStorage) {
        var my_sub = JSON.parse(localStorage.getItem('my_sub'));
        my_sub.push({
            id: (my_sub.length) + 1,
            subject: valuesss,
            per: 0
        });
        localStorage.setItem("my_sub", JSON.stringify(my_sub))
    } else {
        var my_sub = [{
            id: 1,
            subject: valuesss,
            per: 0
        }]
        localStorage.setItem("my_sub", JSON.stringify(my_sub))
    }
    showMySubList();


    // var subject = document.getElementById('subject').innerHTML += ` <option value="${valuesss}">${valuesss}</option>`

    // localStorage.setItem("subject", subject)
    //     //in the lower code the line values use for id of the tag but there was price before
    // document.getElementById('output').innerHTML += ` <div class="top1" >
    //         <h3>${++indexes}</h3>
    //         <h3>${valuesss}</h3>
    //         <h3 id="${valuesss}">0%</h3>         
    //     </div>`;

    // var s = `<div class="top1">
    //     <h3>${indexes}</h3>
    //     <h3>${valuesss}</h3>
    //     <h3 id="${valuesss}">0%</h3>
    // </div>`;





    // localStorage.setItem()
    localStorage.setItem(indexes, s)


}

function showMySubList() {
    document.getElementById('output').innerHTML = '';
    if ("my_sub" in localStorage) {
        var my_sub = JSON.parse(localStorage.getItem('my_sub'));
        my_sub.forEach(function(e) {
            document.getElementById('output').innerHTML += ` <div class="top1" >
                <h3>${e.id}</h3>
                <h3>${e.subject}</h3>
                <h3>${e.per}%</h3>         
            </div>`;
        })


    }
}
showMySubList()
var s = 0;
var hundred = 100;
// document.getElementById('output').innerHTML = localStorage.getItem("indexes");
const gotolist = () => {
    // this line is written for adding the new line after this button

    var subject = document.getElementById('subject').value;
    var studentname = document.getElementById('studentname').value;
    var studentmarks = document.getElementById('studentmarks').value;
    // alert("is there is some student to add");
    var itemstudent = document.getElementById('studentlist').innerHTML += `<div id="top" ><h3>${++outputs}</h3>
    <h3>${studentname}</h3>
    <h3>${subject}</h3>
    <h3>${studentmarks}</h3></div><br>`

    // var itemstudent = ""
    //     itemstudent += `<div id="top" ><h3>${++outputs}</h3>
    // <h3>${studentname}</h3>
    // <h3>${subject}</h3>
    // <h3>${studentmarks}</h3></div><br>`

    localStorage.setItem("itemstudent", itemstudent);



    s += parseInt(document.getElementById('studentmarks').value);
    var total = (s / hundred * 100);
    hundred += 100;

    document.getElementById(`${subject}`).innerHTML = total;
    localStorage.setItem("total", total)
        // console.log(total);
}
console.log(localStorage.getItem("itemstudent"));

// document.getElementById('studentlist').innerHTML = localStorage.getItem("total"); //here this is importent dont remove

console.log(localStorage.getItem("total"));
for (var i = 0; i <= localStorage.length; i++) {

    if (!(localStorage.getItem(i) == null)) {
        document.getElementById('output').innerHTML += localStorage.getItem(i);
        document.getElementById('percent').innerHTML = localStorage.getItem("total");
        // document.getElementById('subject').innerHTML += localStorage.getItem("itemstudent");
    }

}



// console.log()