document.getElementById('mail').addEventListener('keydown', handleKeyDown);
document.getElementById('name').addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        document.getElementById('emailForm').dispatchEvent(new Event('submit'));
    }
}

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm(); // Gọi hàm validateForm để kiểm tra
});

function validateForm() {
    const mail = document.getElementById('mail');
    const name = document.getElementById('name');
    const emailError = document.getElementById('emailerror');
    const nameError = document.getElementById('nameerror');
    let isValid = true;

    // Kiểm tra tên
    if (name.value.trim() === "") {
        nameError.textContent = "Vui lòng nhập họ tên.";
        isValid = false;
    } else if (!/^[\p{L}\s]+$/u.test(name.value)) {
        nameError.textContent = "Tên chỉ bao gồm chữ cái hoa và thường.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Kiểm tra email
    if (mail.value.trim() === "") {
        emailError.textContent = "Vui lòng nhập email.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value)) {
        emailError.textContent = "Sai cú pháp email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (isValid) {
        // Thực hiện hành động khi form hợp lệ
        window.alert("Form hợp lệ!");
        // Có thể gửi dữ liệu đến server tại đây
    }
}