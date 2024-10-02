function validateName() {
    var name = document.getElementById('name');
    var nameError = document.getElementById('nameerror');
    let nameIsValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Vui lòng nhập họ tên.";
        nameError.style.display = 'block';
        nameIsValid = false;
    } else if (!/^[\p{L}\s]+$/u.test(name.value)) {
        nameError.textContent = "Tên chỉ bao gồm chữ cái hoa và thường.";
        nameError.style.display = 'block';
        nameIsValid = false;
    } else {
        nameError.textContent = "";
        nameError.style.display = 'none';
    }

    return nameIsValid; // Trả về giá trị hợp lệ
}

function validateEmail() {
    var email = document.getElementById('email'); // Đảm bảo lấy đúng ID
    var emailError = document.getElementById('emailerror');
    let emailIsValid = true;

    if (email.value.trim() === "") {
        emailError.textContent = "Vui lòng nhập email.";
        emailError.style.display = 'block';
        emailIsValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        emailError.textContent = "Sai cú pháp email.";
        emailError.style.display = 'block';
        emailIsValid = false;
    } else {
        emailError.textContent = "";
        emailError.style.display = 'none';
    }

    return emailIsValid; // Trả về giá trị hợp lệ
}

// Kiểm tra tính hợp lệ khi người dùng nhập
document.getElementById('name').addEventListener('input', function() {
    validateName();
    var nameError = document.getElementById('nameerror');
    var name = document.getElementById('name');
    var lbName = document.getElementById('lbName');

    if (nameError.style.display === "block"){
        name.style.borderColor ="red";
        name.style.backgroundColor="rgb(243, 195, 195)";
        lbName.style.color="rgb(151, 14, 14)";
        lbName.style.textShadow = "none";
    } else {
        name.style.borderColor ="black";
        name.style.backgroundColor="white";
        lbName.style.color="black";
        lbName.style.textShadow = "1px 1px 5px rgba(223, 126, 47, 0.911)";
    }
});

document.getElementById('email').addEventListener('input', function() { // Đảm bảo lấy đúng ID
    validateEmail();
    var emailError = document.getElementById('emailerror');
    var email = document.getElementById('email');
    var lbEmail = document.getElementById('lbEmail');

    if (emailError.style.display === "block"){
        email.style.borderColor ="red";
        email.style.backgroundColor="rgb(243, 195, 195)";
        lbEmail.style.color="rgb(151, 14, 14)";
        lbEmail.style.textShadow = "none";
    } else {
        email.style.borderColor ="black";
        email.style.backgroundColor="white";
        lbEmail.style.color="black";
        lbEmail.style.textShadow = "1px 1px 5px rgba(223, 126, 47, 0.911)";
    }
});


// Kiểm tra tính hợp lệ khi gửi form
document.getElementById('emailForm').addEventListener('submit', async function(event) {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (!isNameValid || !isEmailValid) {
        event.preventDefault(); // Ngăn chặn gửi form nếu không hợp lệ
    } else {
        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwvZeSGp7xvcJF5-4qNb3y28-VCMlT2Wxl8BWPIET1a0ANA6pE8i-pPJM0qjyz59wJcKw/exec?email=buiduckien24@gmail.com&name=Kiên' + encodeURIComponent(email) + '&name=' + encodeURIComponent(name));

            // Kiểm tra nếu phản hồi không thành công
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }

            const result = await response.text();
            alert(result); // Hiển thị phản hồi
        } catch (error) {
            console.error("Error:", error);
            alert("Có lỗi xảy ra khi gửi dữ liệu: " + error.message);
        }

        event.preventDefault(); // Ngăn chặn gửi form nếu cần
    }
});