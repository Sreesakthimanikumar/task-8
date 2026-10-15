let bookings=[];
function book(){
    let movie = document.getElementById("movie");
    let time = document.getElementById("time").value;
    let email = document.getElementById("email").value;
let tickets = Number(document.getElementById("tickets").value);
    if (movie.value == 0 || time == "" ||
        !email.includes("@") || tickets <= 0 ||
        !Number.isInteger(tickets)) {
        document.getElementById("message").innerText =
            "Enter valid details";
        return;
    }
    let name = movie.options[movie.selectedIndex].text;
    let total = Number(movie.value) * tickets;
    bookings.push(name + " - " + time +
        " - " + tickets + " tickets - ₹" + total);
    document.getElementById("total").innerText =
        "Total: ₹" + total;
    document.getElementById("message").innerText =
        "Booking successful";
    showBookings();
}
function showBookings() {
    let search = document.getElementById("search").value.toLowerCase();
    let result = "";
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].toLowerCase().includes(search)) {
            result += "<p>" + bookings[i] +
                ' <button onclick="cancel(' + i +
                ')">Cancel</button></p>';
            count++;
        }
    }
    document.getElementById("bookings").innerHTML =
        result || "No bookings found";
    document.getElementById("count").innerText = bookings.length;
}
function cancel(i) {
    bookings.splice(i, 1);
    showBookings();
}
function resetForm() {
    document.getElementById("movie").value = "0";
    document.getElementById("time").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tickets").value = "";
    document.getElementById("total").innerText = "Total: ₹0";
    document.getElementById("message").innerText = "";
}

