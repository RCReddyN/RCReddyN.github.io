function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sumRow(a){
    let sum = [];
    for(let i=0; i<4; i++){
        let s = 0;
        for(let j =0; j<4; j++){
            s+=a[i][j];
        }
        sum.push(a);
    }
}

function sumCol(a){
    let sum = [];
    for(let i=0; i<4; i++){
        let s = 0;
        for(let j =0; j<4; j++){
            s+=a[j][i];
        }
        sum.push(a);
    }
}

function generate(){
    let a = [];
    for(let i=0; i<4; i++){
        let b = []
        for(let j=0; j<4; j++){
            b.push(0);
        }
        a.push(b);
    }
    let date = document.getElementById("dateq").value;
    datearr = date.split("-");

    row = [parseInt(datearr[2]),
        parseInt(datearr[1]),
        parseInt(datearr[0].substring(0,2)),
        parseInt(datearr[0].substring(2,4))];

    let sum = 0
    for(let i=0; i<row.length; i++){
        sum += row[i];
    }


    for(let i=0; i<row.length; i++){
        a[0][i]= row[i];
    }

    a[3][1] = Math.floor((a[0][0] + a[0][3])/2) + getRandomInt((a[0][0] + a[0][3])/4);
    a[3][2] = a[0][0] + a[0][3] - a[3][1];

    a[3][0] = Math.floor((a[0][1] + a[0][2])/2) + getRandomInt((a[0][1] + a[0][2])/4);
    a[3][3] = a[0][1] + a[0][2] - a[3][0];

    a[1][2] = Math.floor((a[0][0] + a[3][3])/2) + getRandomInt((a[0][0] + a[3][3])/4);
    a[2][1] = a[0][0] + a[3][3] - a[1][2];

    a[1][1] = sum - (a[0][1] + a[2][1] + a[3][1]);
    a[2][2] = a[0][3] + a[3][0] - a[1][1];

    a[1][0] = getRandomInt(a[2][1] + a[2][2]);
    a[1][3] = (a[2][1] + a[2][2]) - a[1][0];

    a[2][0] = sum - (a[0][0] + a[1][0] + a[3][0]);
    a[2][3] = (a[1][1] + a[1][2]) - a[2][0];

    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            document.getElementById(i+""+j).innerHTML = a[i][j];
        }
    }
}