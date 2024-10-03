// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/spreadsheets"})
//         .then(function() { console.log("Đăng nhập thành công"); },
//               function(err) { console.error("Lỗi đăng nhập", err); });
// }

// function loadClient() {
//     gapi.client.setApiKey("AIzaSyBd60-10511aade4ee17aff7ec006da3716771d0354d50"); // Thay YOUR_API_KEY bằng API Key của bạn
//     return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
//         .then(function() { console.log("Tải API thành công"); },
//               function(err) { console.error("Lỗi tải API", err); });
// }

// function submitData() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
    
//     const values = [[name, email]];
//     const body = {values};

//     const request = gapi.client.sheets.spreadsheets.values.append({
//         spreadsheetId: "18xqhM8pq2_q0kxw-UyE49JzGgDCcZQc_IZfPPp31Kos", // ID của Google Sheets
//         range: "A:B", // Phạm vi bạn muốn thêm dữ liệu
//         valueInputOption: "RAW",
//         resource: body
//     });

//     request.then(function(response) {
//         console.log("Dữ liệu đã được thêm", response);
//     }, function(err) {
//         console.error("Lỗi khi thêm dữ liệu", err);
//     });
// }

// function handleClientLoad() {
//     gapi.load("client:auth2", function() {
//         gapi.auth2.init({client_id: "115998487036028065959"}); // Thay YOUR_CLIENT_ID bằng Client ID của bạn
//     });
// }

// handleClientLoad();