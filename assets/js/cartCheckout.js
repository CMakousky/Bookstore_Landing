//Modal Settings
const modal = new bootstrap.Modal(document.getElementById('cartCheckoutModal'));
const closeModal = document.getElementsByClassName('close');
//const btn = document.getElementById("myBtn");
const closeBtn = document.getElementById("closeBtn");

//Close the Modal when the user clicks outside of the Modal Window
window.onclick = function (event) {
    if (event.target === closeModal) {
        modal.hide();
    }
};

//Close the Modal when the user clicks the "X" button
// btn.onclick = function () {
//     // modal.style.display = "close";
//     //console.log("click");
//     modal.hide();
// };

//Close the Modal Window when the user clicks the "Close" button
closeBtn.onclick = function () {
    // modal.style.display = "close";
    //console.log("click");
    modal.hide();
};

const cartCheckoutButton = document.querySelector("#cartCheckoutButton");

cartCheckoutButton.addEventListener('click', function(){
    $('#cartCheckoutModal').modal('show');
});