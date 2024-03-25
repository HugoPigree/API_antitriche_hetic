
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            try {
                const response = await fetch('http://localhost:3000/api/v1/eleve', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nameInput: formData.get('nameInput') })
                });
                const data = await response.json();
                console.log(data); // Afficher la réponse du serveur
                // Rediriger l'utilisateur vers une autre page ou effectuer une autre action après l'ajout réussi
            } catch (error) {
                console.error(error);
                // Gérer les erreurs de manière appropriée
            }
        });
    });

