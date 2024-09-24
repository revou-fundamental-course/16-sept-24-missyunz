function replaceName() {
    let name = prompt("Who is this?", "");
    document.getElementById("name").innerHTML = name;
}

replaceName();

document.getElementById('messageForm').addEventListener('submit', function(event) {  
    event.preventDefault(); 
 
    const name = document.getElementById('name').value;  
    const date = document.getElementById('date').value;  
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';  
    const message = document.getElementById('message').value;  

    const resultDiv = document.getElementById('result');  
    resultDiv.innerHTML = `  
        <strong>Current time:</strong> ${new Date().toLocaleString()}<br>  
        <strong>Nama:</strong> ${name}<br>  
        <strong>Tanggal Lahir:</strong> ${date}<br>  
        <strong>Jenis Kelamin:</strong> ${gender}<br>  
        <strong>Pesan:</strong> ${message}  
    `;  
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if(n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = 'none';
    }

    imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
    plusDivs(1);
}, 1000)