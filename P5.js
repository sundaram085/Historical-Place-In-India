// Navbar  
const activePage = window.location.pathname;
const navLink = document.querySelectorAll('nav a')
forEach(link => {
    if(
        link.href.includes('${activePage}')){
        link.classList.add('active');
      }
    
});












// https://app.elasticemail.com/api/settings/manage-smtp
function sendEmail(){
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let phone =document.getElementById("phone").value;
    let textarea =document.getElementById("textarea").value;

    let body = "Name :" + name + 
               "<br/> email:" + email + 
               "<br/>phone Number:" + phone + 
               "<br/> message :" + textarea; 
    //  console.log(body);

    Email.send({
        SecureToken :"e3d7b4d2-6be2-4a3d-9ee5-cc8aa3fa976f",
        To : 'sundarammaurya716@gmail.com',
        From : "sundarammaurya716@gmail.com",
        Subject : "My Historical Place Form",
        Body : body
    }).then(
          message => alert("Successfully Sent The Message")
        );
}