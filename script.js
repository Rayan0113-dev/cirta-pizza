// Liste des produits (facile à modifier !)
const menuItems = [
    {
        name: "Margherita",
        category: "tomate",
        price: "9.50 €",
        ingredients: "Sauce tomate maison, mozzarella fior di latte, basilic frais, huile d'olive."
    },
    {
        name: "Reine (Regina)",
        category: "tomate",
        price: "11.50 €",
        ingredients: "Sauce tomate, mozzarella, jambon blanc supérieur, champignons frais."
    },
    {
        name: "Diavola (Piquante)",
        category: "tomate",
        price: "12.50 €",
        ingredients: "Sauce tomate, mozzarella, spianata piccante (saucisson piquant), poivrons, olives."
    },
    {
        name: "4 Fromages",
        category: "creme",
        price: "13.00 €",
        ingredients: "Crème fraîche, mozzarella, gorgonzola AOP, chèvre, parmesan."
    },
    {
        name: "Chèvre Miel",
        category: "creme",
        price: "12.50 €",
        ingredients: "Crème fraîche, mozzarella, fromage de chèvre, miel de fleurs, noix."
    },
    {
        name: "Tartiflette",
        category: "creme",
        price: "13.50 €",
        ingredients: "Crème fraîche, mozzarella, pommes de terre, lardons fumés, reblochon, oignons."
    },
    {
        name: "Tiramisu Maison",
        category: "desserts",
        price: "5.00 €",
        ingredients: "Recette traditionnelle au café et mascarpone."
    },
    {
        name: "Coca-Cola / Ice Tea (33cl)",
        category: "desserts",
        price: "2.50 €",
        ingredients: "Canette fraîche au choix."
    }
];

const menuGrid = document.getElementById('menu-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Fonction pour afficher les éléments du menu
function displayMenu(category) {
    menuGrid.innerHTML = ''; // On vide la grille

    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        card.innerHTML = `
            <div class="menu-card-header">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
            </div>
            <p class="ingredients">${item.ingredients}</p>
        `;
        menuGrid.appendChild(card);
    });
}

// Gestion des clics sur les boutons de filtre
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Enlever la classe 'active' de tous les boutons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Ajouter 'active' au bouton cliqué
        button.classList.add('active');
        
        // Filtrer le menu
        const category = button.getAttribute('data-category');
        displayMenu(category);
    });
});

// Afficher tout le menu au chargement de la page
displayMenu('all');
