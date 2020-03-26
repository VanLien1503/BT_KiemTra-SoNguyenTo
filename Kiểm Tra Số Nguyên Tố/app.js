function checkPrime() {
    let check=true;
let input=parseInt(document.getElementById("input").value);
if (input<2){
    alert("Nhập lại số bạn cần kiểm tra")
    return;
}
for (let i=2;i<input-1;i++){
    if (input % i===0){
        check=false;
    }
}
    if (check==true){
        document.getElementById("resule").innerHTML=input+"&nbsp"+"Là Số Nguyên Tố"
    }
    else {
        document.getElementById("resule").innerHTML=input+"&nbsp"+"Khong Số Nguyên Tố"

    }
}