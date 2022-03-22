document.querySelector('#signup-form .actions ul li:last-child a').onclick = () => {
    //input
    let arrInput = document.querySelectorAll('#signup-form input, #signup-form select');
    console.log('arrInput', arrInput);
    let thongTin = {};
    for (let input of arrInput){
        let {id, value} = input;
        console.log(id,value);
        thongTin = {...thongTin, [id]:value};
    }
    console.log('thông tin', thongTin);

    let contentHTML = '';
    for (let key in thongTin) {
        contentHTML += `
            <tr>
                <td>${key}</td>
                <td>${thongTin[key]}</td>
            </tr>
        `
    }

    document.querySelector('#showInfo').innerHTML = contentHTML;
}

    