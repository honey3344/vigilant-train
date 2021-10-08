const addit = () => {
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
}

function showMySubList() {
    document.getElementById('output').innerHTML = '';
    document.getElementById('subject').innerHTML = '';
    if ("my_sub" in localStorage) {
        var my_sub = JSON.parse(localStorage.getItem('my_sub'));
        my_sub.forEach(function(e) {
            document.getElementById('output').innerHTML += ` <div class="top1" >
                <h3>${e.id}</h3>
                <h3>${e.subject}</h3>
                <h3>${e.per}%</h3>         
            </div>`;

            document.getElementById('subject').innerHTML += `<option value="${e.id}">${e.subject}</option>`
        })


    }
}
showMySubList();

function gotolist() {
    var subject = document.getElementById('subject').value;
    var studentname = document.getElementById('studentname').value;
    var studentmarks = document.getElementById('studentmarks').value;

    if ("my_student" in localStorage) {
        var my_student = JSON.parse(localStorage.getItem('my_student'));
        my_student.push({
            id: (my_student.length) + 1,
            studentname: studentname,
            studentmarks: studentmarks,
            subject: subject,
        });
        localStorage.setItem("my_student", JSON.stringify(my_student))
    } else {
        var my_student = [{
            id: 1,
            studentname: studentname,
            studentmarks: studentmarks,
            subject: subject,
        }]
        localStorage.setItem("my_student", JSON.stringify(my_student))
    }
    showMyStudentList()

}

function showMyStudentList() {
    document.getElementById('studentlist').innerHTML = '';
    var mark = {};
    if ("my_student" in localStorage) {
        var my_student = JSON.parse(localStorage.getItem('my_student'));
        my_student.forEach(function(e) {

            var my_sub = JSON.parse(localStorage.getItem('my_sub'));
            for (const prop in mark) {
                var index = my_sub[my_sub.findIndex(x => Number(x.id) == (e.subject))].subject
            }

            document.getElementById('studentlist').innerHTML += `<div id="top" ><h3>${e.id}</h3><h3>${e.studentname}</h3><h3>${index}</h3><h3>${e.studentmarks}</h3></div><br>`
            if (mark[e.subject]) {
                mark[e.subject] = {
                    studentmarks: Number(mark[e.subject].studentmarks) + Number(e.studentmarks),
                    count: Number(mark[e.subject].count) + 1
                };
            } else {
                mark[e.subject] = { studentmarks: Number(e.studentmarks), count: 1 };
            }
        })

        if ("my_sub" in localStorage) {
            var my_sub = JSON.parse(localStorage.getItem('my_sub'));
            for (const prop in mark) {
                let index = my_sub.findIndex(x => Number(x.id) == (prop))
                var per = (mark[prop].studentmarks / (mark[prop].count * 100)) * 100
                my_sub[index].per = per;
            }
            localStorage.setItem("my_sub", JSON.stringify(my_sub))
        }
        showMySubList();

    }
}
showMyStudentList()



var a = {
    name: 'deepak',
    lname: 'chouhan',
    salary: function() {
        return 50000;
    }
}

console.log(a.salary);
document.write(a.salary());
// console.log(a.name + " " + a.lname);