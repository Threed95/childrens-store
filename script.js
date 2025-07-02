const items = [{
        title: "Водный игровой центр Intex Little Dino ",
        description: "Водный игровой центр для ребенка станет настоящим приключением.",
        tags: ["2+"],
        price: 105,
        img: "./img/dinoland.png",
        rating: 4.9,
    },
    {
        title: "Водный игровой центр Intex Территория сладостей",
        description: "Надувной игровой центр Территория сладостей без всяких сомнений понравится любому ребенку. ",
        tags: ["3+"],
        price: 280.70,
        img: "./img/swim-sweets.jpg",
        rating: 4.8,
    },
    {
        title: "Пазлы для детей Противоположности Животные Небо и вода",
        description: "Увлекут ребёнка в увлекательное путешествие по миру животных.",
        tags: ["4+"],
        price: 26.70,
        img: "./img/baby-puzzle.png",
        rating: 5.0,
    },
    {
        title: "Бейби Пазлы для малышей Животные Африки",
        description: "Отличный выбор для развития мелкой моторики и логического мышления у детей.",
        tags: ["2+"],
        price: 19.99,
        img: "./img/puzzle.png",
        rating: 4.9,
    },
    {
        title: "Пазлы для детей и взрослых Муравейник",
        description: "Этот красочный пазл для детей перенесёт вашего малыша в загадочное подземное царство.",
        tags: ["6+"],
        price: 22.39,
        img: "./img/3-puzzle.png",
        rating: 4.8,
    },
    {
        title: "Детский надувной игровой центр Intex Крокодил",
        description: "Водный игровой центр Крокодил - отличное решение для водных забав вашему малышу.",
        tags: ["3+"],
        price: 147,
        img: "./img/third.jpg",
        rating: 4.9,
    },
    {
        title: "Бассейн надувной Intex Кит",
        description: "Басейн кит станет отличным развлечением для вашего ребенка в жаркую погоду!",
        tags: ["2+"],
        price: 98,
        img: "./img/1-intex.jpg",
        rating: 4.9,
    },
    {
        title: "Бассейн надувной Intex Аквариум",
        description: "Отличное решение для хорошо проведенного времени на свежем воздухе.",
        tags: ["3+"],
        price: 98,
        img: "./img/intex.jpg",
        rating: 4.8,
    },
    {
        title: "Конструктор Макси, Зоопарк, 138 элементов, Полесье",
        description: "Конструкт познакомит малыша с увлекательным миром животных, позволяя придумывать различные игровые сценарии.",
        tags: ["3+"],
        price: 163,
        img: "./img/polesie.jpg",
        rating: 4.9,
    },
    {
        title: "Конструктор Макси, полицейский участок, 94 элемента, Полесье",
        description: "Отличный выбор для развития вашего ребенка и создания увлекательной игровой среды.",
        tags: ["3+"],
        price: 127.24,
        img: "./img/polesie-2.jpg",
        rating: 4.7,
    },
    {
        title: "Конструктор LEGO DUPLO Creative Play Поезд с цифрами — учимся считать, 23 детали.",
        description: "Набор поезд с цифрами знакомит малышей с цифрами.",
        tags: ["1+"],
        price: 78.71,
        img: "./img/train.jpg",
        rating: 3.9,
    },
    {
        title: "Большие точечные маркеры для творчества и рисования, 8 шт.",
        description: "Набор точечных маркеров - это идеальный инструмент для развития творческих способностей вашего ребенка.",
        tags: ["1+"],
        price: 63.18,
        img: "./img/4-toy.jpg",
        rating: 4.5,
    },

    {
        title: "Пальчиковые краски для малышей, 4 цвета Brauberg Kids",
        description: "Пальчиковые краски помогут раскрыть творческое начало малыша с первых лет жизни. ",
        tags: ["1+"],
        price: 9.22,
        img: "./img/paint.jpg",
        rating: 4.8,
    },

    {
        title: "Большая водная раскраска Синий трактор ТМ Умка",
        description: "Раскраска порадует юных художников интересными иллюстрациями с краткими комментариями к ним.",
        tags: ["1+"],
        price: 9.85,
        img: "./img/6-toy.jpg",
        rating: 4.9,
    },

    {
        title: "Магнитный конструктор 62 детали с каруселью и колесами",
        description: "Магнитный конструктор для детей – настоящая находка для маленьких исследователей и их родителей!",
        tags: ["2+"],
        price: 70.02,
        img: "./img/7-toy.jpg",
        rating: 4.8,
    },

    {
        title: "Обучающие сказки в стихах. МОЗАИКА kids. Художник Любовь Еремина",
        description: "Наслаждайтесь вместе с малышом рисунками, которые хочется разглядеть во всех подробностях!",
        tags: ["2+"],
        price: 30.12,
        img: "./img/8-toy.jpg",
        rating: 4.9,
    },

];

let toys = [...items];

const containersItem = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");


function renderItems(arr) {
    containersItem.innerHTML = "";
    nothingFound.textContent = "";
    arr.forEach((item) => {
        containersItem.append(makeCard(item));
    })
    if (!arr.length) {
        nothingFound.textContent = "Ничего не найдено";
    }
}

function sortByAlphabet(a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
}

renderItems(toys.sort((a, b) => sortByAlphabet(a, b)));


function makeCard(shopItem) {
    const { title, description, tags, price, img, rating } = shopItem;
    const item = itemTemplate.content.cloneNode(true);
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector(".price").textContent = `${price}Р`;
    item.querySelector("img").src = img;

    const ratingContainer = item.querySelector(".rating");
    for (let i = 0; i < rating; i++) {
        const star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star");
        ratingContainer.append(star);
    }

    const tagsContainer = item.querySelector(".tags");
    tags.forEach((tag) => {
        const element = document.createElement("span");
        element.textContent = tag;
        element.classList.add("tag");
        tagsContainer.append(element);
    })
    return item;
}

const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
        case "expensive":
            {
                toys.sort((a, b) => b.price - a.price);
                break;
            }
        case "cheap":
            {
                toys.sort((a, b) => a.price - b.price);
                break;
            }
        case "rating":
            {
                toys.sort((a, b) => a.rating - b.rating);
                break;
            }
        case "alphabet":
            {
                toys.sort((a, b) => sortByAlphabet(a, b));
                break;
            }
    }
    renderItems(toys);
})