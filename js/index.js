var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var btnIcon = this.querySelector(".btnIcon");
    var icon = this.querySelector(".btnIcon i");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      btnIcon.classList.remove("active");

      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      panel.style.display = "block";
      btnIcon.classList.add("active");

      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");

      panel.style.borderBottom = "1px solid #B8C6D0";
    }
  });

  var panel = acc[i].nextElementSibling;
  panel.style.display = "none";
}

// const circle = document.querySelector(".carousel");

// const handleScroll = function () {
//   const scrollTop = window.pageYOffset;
//   const parentHexa = document.querySelector("#the-parent");

//   if (scrollTop < 800) {
//     circle.classList.remove("hexa2");

//     circle.classList.add("hexa1");
//   } else if (scrollTop < 1000) {
//     circle.classList.remove("hexa1");
//     circle.classList.remove("hexa3");

//     circle.classList.add("hexa2");
//   } else if (scrollTop < 1100) {
//     circle.classList.remove("hexa2");
//     circle.classList.remove("hexa4");

//     circle.classList.add("hexa3");

//     parentHexa.classList.add("parent-curve");
//   } else if (scrollTop < 1200) {
//     circle.classList.remove("hexa3");

//     circle.classList.add("hexa4");

//     parentHexa.classList.remove("parent-curve");
//   }
// };

// window.addEventListener("scroll", handleScroll);

const circle = document.querySelector(".hexagon");

const handleScroll = function () {
  const scrollTop = window.pageYOffset;
  const parentHexa = document.querySelector("#parent");

  // if (scrollTop < 800) {
  //   circle.classList.remove("hexa2");

  //   circle.classList.add("hexa1");
  // } else if (scrollTop < 900) {
  //   circle.classList.remove("hexa1");
  //   circle.classList.remove("hexa3");

  //   circle.classList.add("hexa2");
  // } else if (scrollTop < 1000) {
  //   circle.classList.remove("hexa2");
  //   circle.classList.remove("hexa4");

  //   circle.classList.add("hexa3");
  // } else if (scrollTop < 1100) {
  //   circle.classList.remove("hexa3");
  //   circle.classList.remove("hexa5");

  //   circle.classList.add("hexa4");
  //   parentHexa.classList.add("parent-curve");
  // } else if (scrollTop < 1200) {
  //   circle.classList.remove("hexa4");

  //   circle.classList.add("hexa5");

  //   parentHexa.classList.remove("parent-curve");
  // }
};

window.addEventListener("scroll", handleScroll);

// window.addEventListener("scroll", stackCardsOnScroll);

// function stackCardsOnScroll() {
//   const cardStack = document.querySelector(".card-stack");
//   const cards = cardStack.querySelectorAll(".card");

//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   const stackTop = cardStack.offsetTop;
//   const windowHeight = window.innerHeight;

//   if (
//     scrollTop > stackTop - windowHeight &&
//     scrollTop < stackTop + cardStack.offsetHeight
//   ) {
//     const scrollPercentage =
//       (scrollTop - (stackTop - windowHeight)) / cardStack.offsetHeight;

//     cards.forEach((card, index) => {
//       card.style.transform = `translateY(${index * 100 * scrollPercentage}%)`;
//     });
//   }
// }

const lala = document.querySelectorAll(".part-21 .grid-services li button");

lala.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".part-6").scrollIntoView({
      behavior: "smooth",
    });
  });
});

const pop1 = document.querySelector("#pop-1");
const pop1Content = document.querySelector("#pop1-content");

const pop2 = document.querySelector("#pop-2");
const pop2Content = document.querySelector("#pop2-content");

const pop3 = document.querySelector("#pop-3");
const pop3Content = document.querySelector("#pop3-content");

const pop4 = document.querySelector("#pop-4");
const pop4Content = document.querySelector("#pop4-content");

const pop5 = document.querySelector("#pop-5");
const pop5Content = document.querySelector("#pop5-content");

pop1.addEventListener("mouseenter", () => {
  pop1Content.classList.add("popup-content1-show");
  document.querySelector("#dot-1-line").style.display = "block";
  document.querySelector("#dot-1-round").style.display = "block";
});
pop1.addEventListener("mouseout", () => {
  pop1Content.classList.remove("popup-content1-show");
  document.querySelector("#dot-1-line").style.display = "none";
  document.querySelector("#dot-1-round").style.display = "none";
});

pop2.addEventListener("mouseenter", () => {
  pop2Content.classList.add("popup-content2-show");
  document.querySelector("#dot-2-line").style.display = "block";
  document.querySelector("#dot-2-round").style.display = "block";
});
pop2.addEventListener("mouseout", () => {
  pop2Content.classList.remove("popup-content2-show");
  document.querySelector("#dot-2-line").style.display = "none";
  document.querySelector("#dot-2-round").style.display = "none";
});

pop3.addEventListener("mouseenter", () => {
  pop3Content.classList.add("popup-content3-show");
  document.querySelector("#dot-3-line").style.display = "block";
  document.querySelector("#dot-3-round").style.display = "block";
});
pop3.addEventListener("mouseout", () => {
  pop3Content.classList.remove("popup-content3-show");
  document.querySelector("#dot-3-line").style.display = "none";
  document.querySelector("#dot-3-round").style.display = "none";
});

pop4.addEventListener("mouseenter", () => {
  pop4Content.classList.add("popup-content4-show");
  document.querySelector("#dot-4-line").style.display = "block";
  document.querySelector("#dot-4-round").style.display = "block";
});
pop4.addEventListener("mouseout", () => {
  pop4Content.classList.remove("popup-content4-show");
  document.querySelector("#dot-4-line").style.display = "none";
  document.querySelector("#dot-4-round").style.display = "none";
});

pop5.addEventListener("mouseenter", () => {
  pop5Content.classList.add("popup-content5-show");
  document.querySelector("#dot-5-line").style.display = "block";
  document.querySelector("#dot-5-round").style.display = "block";
});
pop5.addEventListener("mouseout", () => {
  pop5Content.classList.remove("popup-content5-show");
  document.querySelector("#dot-5-line").style.display = "none";
  document.querySelector("#dot-5-round").style.display = "none";
});

// Array object containing the data
var items = [
  {
    name: "Backup and Recovery",
    title: "Title 1",
    details: [
      [
        "Automated Snapshots with Lifecycle Management",
        "Streamline data backup and retention process by automatically capturing and managing snapshots throughout their lifecycle.",
      ],
      [
        "Automated Database Backup",
        "Simplify data protection by consistently creating and organizing backups for seamless and reliable recovery.",
      ],
    ],
  },
  {
    name: "Compute",
    title: "Title 2",
    details: [
      [
        "Elastic Virtual Machines",
        "Flexible cloud-based virtual machines that adapt to changing resource demands.",
      ],
      [
        "Autoscaling",
        "Dynamic resource allocation that adjusts to meet fluctuating workload demands.",
      ],
    ],
  },
  {
    name: "Containers, Development, and Automation",
    title: "Title 3",
    details: [
      [
        "Elastic Container Service",
        "Highly scalable and flexible platform for deploying, managing, and orchestrating containerized applications effortlessly.",
      ],
      [
        "Container Registry",
        "Secure and centralized repository for storing, managing, and distributing container images.",
      ],
      [
        "Resource Orchestration Automation",
        "Streamlined management and automation of resources, optimizing efficiency and productivity across complex environments.",
      ],
      [
        "API Gateway",
        "Scalable API Gateway for managing, securing, and orchestrating API traffic.",
      ],
    ],
  },
  {
    name: "Database",
    title: "Title 2",
    details: [
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
    ],
  },
  {
    name: "Logging",
    title: "Title 2",
    details: [
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
    ],
  },
  {
    name: "Migration",
    title: "Title 2",
    details: [
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
    ],
  },
  {
    name: "Networking",
    title: "Title 2",
    details: [
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
    ],
  },
  {
    name: "Security",
    title: "Title 2",
    details: [
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
    ],
  },
  {
    name: "Storage",
    title: "Title 2",
    details: [
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
      [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate recusandae rerum id magni odio nesciunt similique saepe quia odit! Accusamus.",
      ],
    ],
  },
];

function generateList() {
  var list = document.getElementById("list");

  list.innerHTML = "";

  items.forEach(function (item, index) {
    var li = document.createElement("li");

    var circleDiv = document.createElement("div");
    circleDiv.classList.add("circle");
    li.classList.add("animate");

    li.appendChild(circleDiv);

    var label = document.createElement("span");
    label.textContent = item.name;

    li.appendChild(label);

    li.addEventListener("click", function () {
      var listItems = document.querySelectorAll("#list li");
      listItems.forEach(function (item) {
        item.classList.remove("selected");
      });

      this.classList.add("selected");

      updateDetails(index);
    });

    list.appendChild(li);

    if (index === 0) {
      li.classList.add("selected");
      updateDetails(index);
    }
  });
}

function updateDetails(index) {
  var detailsDiv = document.getElementById("details");
  var lottiePlayer = document.createElement("lottie-player");

  lottiePlayer.setAttribute("background", "transparent");
  lottiePlayer.setAttribute("speed", "1");
  lottiePlayer.setAttribute("style", "width: 150px; height: 150px;");
  lottiePlayer.setAttribute("loop", "");
  lottiePlayer.setAttribute("autoplay", "");

  detailsDiv.innerHTML = "";

  if (index === 0) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets8.lottiefiles.com/packages/lf20_cioqsmkr.json"
    );
  } else if (index === 1) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets1.lottiefiles.com/packages/lf20_frJ5A7.json"
    );
  } else if (index === 2) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets9.lottiefiles.com/packages/lf20_7c0ljscf.json"
    );
  } else if (index === 3) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets5.lottiefiles.com/packages/lf20_bewdaxyv.json"
    );
  } else if (index === 4) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets8.lottiefiles.com/packages/lf20_cioqsmkr.json"
    );
  } else if (index === 5) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets5.lottiefiles.com/packages/lf20_yYOpBn.json"
    );
  } else if (index === 6) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets2.lottiefiles.com/packages/lf20_YcYNEzLKJQ.json"
    );
  } else if (index === 7) {
    lottiePlayer.setAttribute(
      "src",
      "https://assets2.lottiefiles.com/packages/lf20_BXCRXXXRJK.json"
    );
  } else {
    lottiePlayer.setAttribute(
      "src",
      "https://assets3.lottiefiles.com/private_files/lf30_Sjku9h.json"
    );
  }

  // detailsDiv.appendChild(lottiePlayer);

  var nameElement = document.createElement("h3");
  nameElement.textContent = items[index].name;
  nameElement.classList.add("animate");

  // detailsDiv.appendChild(nameElement);

  var details = items[index].details;

  var ul = document.createElement("ul");
  ul.classList.add("animate");
  ul.classList.add("details-prod");
  ul.style.listStyleType = "none";

  details.forEach(function (detail) {
    var li = document.createElement("li");
    // li.textContent = detail[0];
    ul.appendChild(li);
    li.classList.add("animate");
    li.classList.add("details-prod-child");

    var img = document.createElement("img");
    var title = document.createElement("h5");
    var desc = document.createElement("p");

    title.textContent = detail[0];
    desc.textContent = detail[1];
    img.src = "/public/icons/accord1.png";

    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(desc);

    title.classList.add("product-title");
    img.classList.add("product-img");
    img.alt = "product-img";
  });

  detailsDiv.appendChild(ul);
}

generateList();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hide");
    } else {
      entry.target.classList.add("hide");
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animate");
hiddenElements.forEach((el) => observer.observe(el));

const logoItems = document.querySelectorAll(".part-9 ul li.logo");
const active = document.querySelector(".part-9 ul");
const descriptions = document.querySelectorAll(".part-9 .main-list div p");
const headers = document.querySelectorAll(".part-9 .main-list div h5");

function expandItem() {
  logoItems.forEach((item) => {
    if (item === this) {
      active.classList.add("expand");
      item.classList.add("expanded");

      descriptions.forEach((desc) => {
        if (item.id === desc.className) {
          desc.classList.add("show-desc");
        } else {
          desc.classList.remove("show-desc");
        }
      });

      headers.forEach((desc) => {
        if (item.id === desc.className) {
          desc.style.transform = "rotate(0deg)";
          desc.style.marginBottom = "50px";
        }
      });
    } else {
      item.classList.remove("expanded");

      descriptions.forEach((desc) => {
        if (item.id === desc.className) {
          desc.style.display = "none";
        }
      });

      headers.forEach((desc) => {
        if (item.id === desc.className) {
          desc.style.transform = "rotate(90deg)";
          desc.style.marginBottom = "100px";
        }
      });
    }
  });
}

logoItems.forEach((item) => {
  item.addEventListener("click", expandItem);
});

// Auto sliding for slideshow
document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("carouselExampleIndicators");
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000,
    wrap: true,
  });
});
