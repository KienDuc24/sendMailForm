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
    var email = document.getElementById('email');
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

    if (nameError.style.display === "block") {
        name.style.borderColor = "red";
        name.style.backgroundColor = "rgb(243, 195, 195)";
        lbName.style.color = "rgb(151, 14, 14)";
        lbName.style.textShadow = "none";
    } else {
        name.style.borderColor = "black";
        name.style.backgroundColor = "white";
        lbName.style.color = "black";
        lbName.style.textShadow = "1px 1px 5px rgba(223, 126, 47, 0.911)";
    }
});

document.getElementById('email').addEventListener('input', function() {
    validateEmail();
    var emailError = document.getElementById('emailerror');
    var email = document.getElementById('email');
    var lbEmail = document.getElementById('lbEmail');

    if (emailError.style.display === "block") {
        email.style.borderColor = "red";
        email.style.backgroundColor = "rgb(243, 195, 195)";
        lbEmail.style.color = "rgb(151, 14, 14)";
        lbEmail.style.textShadow = "none";
    } else {
        email.style.borderColor = "black";
        email.style.backgroundColor = "white";
        lbEmail.style.color = "black";
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

        fetch('https://script.google.com/macros/s/AKfycbws1keh9hr4pNDE_WN3ZNFKE427Eo5RQiq-QzQd9JUhHS9Y81DqQNQsbe_9W13dJ0vA/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                name: name,
                mail: email
            })
        })
        .then(response => response.text())
        .then(data => {
            const done_audio = document.getElementById("done");
            done_audio.play();
            console.log(data); // Xử lý phản hồi từ Apps Script nếu cần
            alert('Dữ liệu đã được gửi thành công!');
        })
        .catch(error => { 
            console.error('Lỗi:', error);
        });

        event.preventDefault(); // Ngăn chặn gửi form nếu cần
    }
});

window.addEventListener('load', function() {
    const bg_audio = document.getElementById('backgroundMusic');
    bg_audio.volume = 0.1;
    bg_audio.play().catch(error => {
        console.log('Không thể phát nhạc:', error);
    });
});