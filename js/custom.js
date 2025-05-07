// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function copiarPix() {
    const chave = "(21) 98846-3718";
    navigator.clipboard.writeText(chave).then(() => {
        const botao = document.querySelector(".copy-btn");
        botao.innerText = "Copiado!";
        setTimeout(() => botao.innerText = "Copiar", 2000);
    });
}

function scrollToBottom() {
    const destino = document.getElementById("fim-redes");
    if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
    }
}
const produtos = [
    { nome: "Amendoim", preco: 2.00, img: "images/amendoim.png", tipo: "doce" },
    { nome: "Fini", preco: 1.50, img: "images/fini.png", tipo: "doce" },
    { nome: "Pirulito", preco: 0.75, img: "images/pirulito.png", tipo: "doce" },
    { nome: "Paçoca", preco: 0.50, img: "images/paçoca.png", tipo: "doce" },
    { nome: "Mentos", preco: 2.00, img: "images/mentos.png", tipo: "doce" },
    { nome: "Tortuguita", preco: 1.50, img: "images/tortuguita.png", tipo: "doce" },
    { nome: "Bala", preco: 0.15, img: "images/bala.png", tipo: "doce" },
    { nome: "Pingo de Leite", preco: 1.00, img: "images/pingo_de_leite.png", tipo: "doce" },
    { nome: "Pé de Moça", preco: 1.50, img: "images/pe_de_moca.png", tipo: "doce" },
    { nome: "Café Espresso", preco: 3.00, img: "images/espressso.png", tipo: "bebida" },
    { nome: "Nescau", preco: 3.00, img: "images/nescau.png", tipo: "bebida" },
    { nome: "Galak", preco: 3.00, img: "images/galak.png", tipo: "bebida" },
    { nome: "Chococcino", preco: 4.50, img: "images/chococcino.png", tipo: "bebida" },
    { nome: "Capuccino", preco: 4.50, img: "images/cappucino.png", tipo: "bebida" },
    { nome: "Café com Leite", preco: 3.00, img: "images/cafe_com_leite.png", tipo: "bebida" }
];

function criarCards(tipo, containerId) {
    const container = document.getElementById(containerId);
    let delay = 0;
    produtos.filter(p => p.tipo === tipo).forEach(p => {
        const el = document.createElement("div");
        el.className = "card fade-in";
        el.style.animationDelay = `${delay}s`;
        el.innerHTML = `
        <img src="${p.img}" alt="${p.nome}" />
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
      `;
        el.onclick = () => modal.classList.remove("hidden");
        container.appendChild(el);
        delay += 0.1;
    });
}

criarCards("bebida", "grid-bebidas");
criarCards("doce", "grid-doces");

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
closeBtn.onclick = () => modal.classList.add("hidden");
window.onclick = (e) => {
    if (e.target === modal) modal.classList.add("hidden");
};