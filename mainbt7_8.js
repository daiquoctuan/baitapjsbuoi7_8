// 1. tạo biến nhập số
var nhapso = [];
function nhapso_n() {
    var number = document.getElementById('nhapso_n').value * 1;
    nhapso.push(number);
    document.getElementById('mang').innerHTML = nhapso;

    if (nhapso.length === 0) {
        alert("vui lòng nhập số")
    }
    // console.log(nhapso)
}

//2. đếm bao nhiêu số dương
function soduong() {
    var demsoduong = 0;
    for (var i = 0; i < nhapso.length; i++) {
        var item = nhapso[i];
        if (item >= 0) {
            demsoduong++
        }
    }
    var resultsoduong = "Có: " + demsoduong + " số dương"
    document.getElementById('bnsoduong').innerHTML = resultsoduong;
}

// 3. tổng số dương

function tongsoduong() {

    var tongsoduong = 0;
    for (var i = 0; i < nhapso.length; i++) {
        var tongduong = nhapso[i]
        if (tongduong >= 0) {
            tongsoduong = tongsoduong + tongduong
        }
    }
    var resulttongduong = "Tổng số dương là: " + tongsoduong;
    document.getElementById('infotongsoduong').innerHTML = resulttongduong;
}


//4.  tìm số nhỏ nhất
function sonhonhat() {
    var min = nhapso[0];
    for (var i = 0; i < nhapso.length; i++) {
        var snn = nhapso[i];
        if (snn < min) {
            min = snn;
        }
    }
    var resultsonhonhat = "Số nhỏ nhất là: " + min;
    document.getElementById('sonhonhat').innerHTML = resultsonhonhat;

}
// 5. tìm số dương nhỏ nhất
function soduongNN() {
    var maxduongnn = '';
    var mang_1 = [];
    for (var i = 0; i < nhapso.length; i++) {
        var soduongnn = nhapso[i];
        if (soduongnn > 0) {
            maxduongnn = soduongnn;
            mang_1.push(maxduongnn)
        }
    }
    var minduong = mang_1[0];
    for (var j = 0; j < mang_1.length; j++) {
        var mangduongnho = mang_1[j];
        if (mangduongnho < minduong) {
            minduong = mangduongnho;
        }
    }
    if (mang_1.length === 0) {
        mang_1 += "-1"
        document.getElementById('soduongnn').innerHTML = mang_1;
    } else {
        var resultsoduongnn = "Số dương nhở nhất là: " + minduong;
        document.getElementById('soduongnn').innerHTML = resultsoduongnn;
    }



}


// tìm số chẳn cuối cùng
function sochancuoi() {
    var soChanCuoi = '';
    var mangChan = [];


    for (var i = 0; i < nhapso.length; i++) {
        var soChan = nhapso[i];
        if (soChan % 2 === 0 && soChan > 0) {
            soChanCuoi = soChan;
            mangChan.push(soChanCuoi)
        }
    }
    if (mangChan.length === 0) {
        mangChan += "-1"
        document.getElementById('sochancuoimang').innerHTML = mangChan;
    } else {
        var resultchancuoi = "Số chẳn cuối cùng là: " + mangChan.pop();
        document.getElementById('sochancuoimang').innerHTML = resultchancuoi;
    }


}
// đổi chỗ

function doivitri() {

    var index_1 = document.getElementById('vitri_1').value * 1;
    var index_2 = document.getElementById('vitri_2').value * 1;

    console.log(index_1)
    console.log(index_2)


    var doi = nhapso[index_1];
    nhapso[index_1] = nhapso[index_2];
    nhapso[index_2] = doi;
    console.log(nhapso)
    var resultdoicho = `Mảng đã đổi chỗ: ${nhapso}`;
    document.getElementById('doicho').innerHTML = resultdoicho;
}


// sắp xếp tăng dần
function sapxep() {
    for (var i = 0; i < nhapso.length - 1; i++) {
        for (j = i + 1; j < nhapso.length; j++) {
            if (nhapso[i] > nhapso[j]) {
                var item = nhapso[i];
                nhapso[i] = nhapso[j];
                nhapso[j] = item;

            }
        }
    }console.log(nhapso)
var resultdoisapxep = `Mảng tăng dần: ${nhapso}`;
document.getElementById('sapxep').innerHTML = resultdoisapxep ;
}