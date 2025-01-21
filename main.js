const reviewBoxes = document.querySelectorAll('.review-box');
reviewBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
        box.style.transition = 'transform 0.3s';
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});

/* Appointment */

let appointment = null;
function showAppointment() {
    document.getElementById('appointment').style.display = 'block';
}

function closeAppointment() {
    document.getElementById('appointment').style.display = 'none';
}

function submitAppointment(event) {
    event.preventDefault();
    if (appointment) {
        alert("You can only create one appointment.");
        return false;
    }
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    appointment = { name, email, phone, date };
    displayAppointment();
    document.getElementById('appointmentForm').reset();
}

function displayAppointment() {
    const list = document.getElementById('appointmentList');
    list.innerHTML = '<li>"Name: ' + appointment.name + ', Email: ' + appointment.email + ', Phone: ' + appointment.phone + ', Date: ' + appointment.date + '"</li>';
    document.getElementById('detail').style.display = 'block';
    document.getElementById('updateBtn').style.display = 'inline-block';
    document.getElementById('deleteBtn').style.display = 'inline-block';
}

function updateAppointment() {
    if (appointment) {
        document.getElementById('name').value = appointment.name;
        document.getElementById('email').value = appointment.email;
        document.getElementById('phone').value = appointment.phone;
        document.getElementById('date').value = appointment.date;
        closeAppointment();
        showAppointment();
        appointment = null;
        document.getElementById('detail').style.display = 'none';
        document.getElementById('updateBtn').style.display = 'none';
        document.getElementById('deleteBtn').style.display = 'none';
    } 
}

function deleteAppointment() {
    if (appointment) {
        appointment = null;
        document.getElementById('appointmentList').innerHTML = '';
        document.getElementById('updateBtn').style.display = 'none';
        document.getElementById('deleteBtn').style.display = 'none';
        document.getElementById('detail').style.display = 'none';
        alert("Your appointment has been deleted.");
    } 
}