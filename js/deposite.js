document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeFeild = document.getElementById('deposite-feild');
    const depositeAmount = depositeFeild.value;
    
    const depositeTotalElement = document.getElementById("deposite-total");
    const depositeTotalAmount = depositeTotalElement.innerText;
    depositeTotalElement.innerText = depositeAmount;


    depositeFeild.value = '';
})