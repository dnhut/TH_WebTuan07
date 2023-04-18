//bai 11
function checkage(){
        if (ageinput.value == 0){
           document.getElementById("result").innerHTML="So you are happy";
        }
        else if (ageinput.value <0 || ageinput.value >200)
            {
              document.getElementById("result").innerHTML=" lying";
            }
            else {
              document.getElementById("result").innerHTML="That's a good age";
            }


}
		
//bai 13
function checkFirstChar() {
    // Lấy giá trị của chuỗi từ ô input
    var inputString = document.getElementById("inputString").value;
  
    // Kiểm tra xem chuỗi có độ dài lớn hơn 0 hay không
    if (inputString.length > 0) {
      var firstChar = inputString.charAt(0); // Lấy ký tự đầu tiên của chuỗi
  
      // Kiểm tra xem ký tự đầu tiên có phải là ký tự hoa hay không
      if (firstChar === firstChar.toUpperCase()) {
        document.getElementById("result").innerHTML = "Ký tự đầu tiên là ký tự hoa.";
      } else {
        document.getElementById("result").innerHTML = "Ký tự đầu tiên không phải là ký tự hoa.";
      }
    } else {
      document.getElementById("result").innerHTML = "Vui lòng nhập chuỗi.";
    }
  }
  //bai 14
  function checkcredit(cre) {
    var cardFormat = /^(\d{4}-){3}\d{4}$/; // Biểu thức chính quy kiểm tra định dạng số thẻ tín dụng
    return cardFormat.test(cre); // Kiểm tra chuỗi số thẻ tín dụng với biểu thức chính quy
}
function checkcard() {
  var card = document.getElementById("inputcredit").value;
  if (checkcredit(card)) {
      document.getElementById("result").innerHTML = "Creditcard hop le";
  } else {
    document.getElementById("result").innerHTML = "Creditcard khong hop le";
  } 
  }

//bai 15

    function check(emailAddress) {
        var dinhdang = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return dinhdang.test(emailAddress);
    }

    function kiemTraEmail() {
        var email = document.getElementById("emailInput").value;
        if (check(email)) {
            document.getElementById("result").innerHTML = "Email hop le.";
        } else {
          document.getElementById("result").innerHTML = "Email khong hop le.";
        } 
        }
    
//bai 16
function check(ipaddress) {
  var format = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return format.test(ipaddress);
}
  function checkip(){
    var input = document.getElementById("ipInput").value;
  if (check(input)) {
    document.getElementById("result").innerHTML = "IP hợp lệ";
  } else {
    document.getElementById("result").innerHTML = "IP không hợp lệ";
  }
}
function check(urladdress) {
  var format = /^(?:(?:http|https):\/\/)?(?:[\w-]+\.)+[\w]{2,6}(?:\/[\w-./?%&=]*)?$/;
  return format.test(urladdress);
}
function checkURL() {
  var input = document.getElementById("urlInput").value;
  if (check(input)) {
    document.getElementById("result").innerHTML = "URL hợp lệ";
  } else {
    document.getElementById("result").innerHTML = "URl không hợp lệ";
  }
}
function checkzip(codezip) {
  var format = /^\d{5}(?:-\d{1,4})?$/;
  return format.test(codezip);
}
function checkzipcode() {
  var input = document.getElementById("zipInput").value;
  if (checkzip(input)) {
    document.getElementById("result").innerHTML = "ZIPCODE hợp lệ";
  } else {
    document.getElementById("result").innerHTML = "ZIPCODE không hợp lệ";
  }
}
//bai 17
function Username() {
  var Account = document.getElementById("Account").value;
  var result = document.getElementById("resultAccount");
  
  if (Account.length < 6) {
    result.innerHTML += "<p>Tên đăng nhập quá ngắn tối thiểu 6 kí tự</p>";
      return false;
  }
  
  if (!/^[0-9a-zA-Z]+$/.test(Account)) {
    result.innerHTML = "Tên đăng nhập chỉ được chứa chữ cái và số.";
      return false;
  }
  result.innerHTML = "";
  return true;
}
function checkPassword() {
  // Hàm validatePassword() được gọi khi giá trị của trường mật khẩu thay đổi
  var password = document.getElementById("Password").value; // Lấy giá trị của trường mật khẩu
  var resultElement = document.getElementById("resultPassword"); // Lấy phần tử HTML để hiển thị kết quả
  
  if (password.length === 0) { // Kiểm tra mật khẩu có rỗng hay không
      resultElement.innerHTML = "Vui lòng nhập mật khẩu."; // Nếu rỗng, hiển thị thông báo lỗi
      return false; // Trả về false để ngăn chặn việc submit form
  }
  
  if (/[^a-zA-Z0-9]/.test(password)) { // Sử dụng biểu thức chính quy để kiểm tra mật khẩu có chứa kí tự đặc biệt hay không
      resultElement.innerHTML = "Mật khẩu không được chứa kí tự đặc biệt."; // Nếu có chứa kí tự đặc biệt, hiển thị thông báo lỗi
      return false; // Trả về false để ngăn chặn việc submit form
  }
  
  resultElement.innerHTML = ""; // Nếu không có lỗi, hiển thị thông báo mật khẩu hợp lệ
  return true; // Trả về true để cho phép submit form
}
function checkName() {
  var name = document.getElementById("Name").value; // Lấy giá trị của trường mật khẩu
  var resultElement = document.getElementById("resultName"); // Lấy phần tử HTML để hiển thị kết quả
  if (name.length === 0) { // Kiểm tra mật khẩu có rỗng hay không
    resultElement.innerHTML = " Tên không để trống"; // Nếu rỗng, hiển thị thông báo lỗi
    return false; 
}
resultElement.innerHTML = "Tên hợp lệ"; // Nếu không có lỗi, hiển thị thông báo mật khẩu hợp lệ
return true; // Trả về true để cho phép submit form
}
function checkAddress() {
  var address = document.getElementById("Address").value; // Lấy giá trị của trường mật khẩu
  var resultElement = document.getElementById("resultAddress"); // Lấy phần tử HTML để hiển thị kết quả
  if (address.length === 0) { // Kiểm tra mật khẩu có rỗng hay không
    resultElement.innerHTML = "Địa chỉ không để trống"; // Nếu rỗng, hiển thị thông báo lỗi
    return false; 
}
if (/[^a-zA-Z0-9]/.test(address)) { // Sử dụng biểu thức chính quy để kiểm tra mật khẩu có chứa kí tự đặc biệt hay không
  resultElement.innerHTML = "Địa chỉ không được chứa kí tự đặc biệt."; // Nếu có chứa kí tự đặc biệt, hiển thị thông báo lỗi
  return false; // Trả về false để ngăn chặn việc submit form
}
resultElement.innerHTML = "Tên hợp lệ"; // Nếu không có lỗi, hiển thị thông báo mật khẩu hợp lệ
return true; // Trả về true để cho phép submit form
}
function checkPhone(){
  var phone = document.getElementById("Phone").value; // Lấy giá trị của trường mật khẩu
  var resultElement = document.getElementById("resultPhone"); // Lấy phần tử HTML để hiển thị kết quả
  if (phone.length === 0 ) { // Kiểm tra mật khẩu có rỗng hay không
    resultElement.innerHTML = "Số điện thoại không để trống"; // Nếu rỗng, hiển thị thông báo lỗi
    return false; 
}
if (/[^a-zA-Z0-9]/.test(phone)) { // Sử dụng biểu thức chính quy để kiểm tra mật khẩu có chứa kí tự đặc biệt hay không
  resultElement.innerHTML = "Số điện thoại không được chứa kí tự đặc biệt."; // Nếu có chứa kí tự đặc biệt, hiển thị thông báo lỗi
  return false; // Trả về false để ngăn chặn việc submit form
}
if (phone.length > 10 ) { 
  resultElement.innerHTML = "Số điện thoại không quá 10 số"; // Nếu rỗng, hiển thị thông báo lỗi
  return false; 

} else {
resultElement.innerHTML = "Số điện thoại hợp lệ"; // Nếu không có lỗi, hiển thị thông báo mật khẩu hợp lệ
return true; 
}
}// Trả về true để cho phép submit form
function check(emailAddress) {
  var dinhdang = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return dinhdang.test(emailAddress);
}
function checkEmail() {
  var email = document.getElementById("Email").value;
  if (check(email)) {
      document.getElementById("resultEmail").innerHTML = "Email hop le.";
  } else {
    document.getElementById("resultEmail").innerHTML = "Email khong hop le.";
  } 
  }

// bai 19
function bgcColor() {
    docBody = document.getElementsByTagName("body") [0];
    myBodyElements = docBody.getElementsByTagName("p");
    mypl= myBodyElements[0];
    mypl.style.background ="rgb(255,0,0)";
    myp2 = myBodyElements [1] ;
    myp2.style.background ="rgb(255,255,0)";
}





