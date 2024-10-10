function submitFeedback() {
    // Get values from input fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Display a thank you message
    alert('Thank you for your valuable feedback');

    // Display user info on the page
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Show the hidden section with user information
    document.getElementById('userInfo').style.display = 'block';
}

// Add onclick event to submit button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Add keypress event for 'Enter' key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
 });
