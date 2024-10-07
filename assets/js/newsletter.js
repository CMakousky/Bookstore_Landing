function sendMessage(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    } else {
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}

function validateNewsletter(){
    var newsletterEmail = document.getElementById('newsletter-email');
    const newsletterSuccess = document.getElementById('newsletter-success');
    const newsletterDanger = document.getElementById('newsletter-danger');

    if(newsletterEmail.value === ''){
        newsletterDanger.style.display = 'block';
    } else {
        setTimeout(() => {
            newsletterEmail.value = '';
        }, 2000);

        newsletterSuccess.style.display = 'block';
    }

    setTimeout(() => {
        newsletterDanger.style.display = 'none';
        newsletterSuccess.style.display = 'none';
    }, 4000);
}