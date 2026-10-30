const deleteForms = document.querySelectorAll('.delete-form');

deleteForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        const answer = confirm('Are you sure you want to delete this chat?');

        if (!answer) {
            event.preventDefault();
        }
    });
});