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

  if (scrollTop < 800) {
    circle.classList.remove("hexa2");

    circle.classList.add("hexa1");
  } else if (scrollTop < 1000) {
    circle.classList.remove("hexa1");
    circle.classList.remove("hexa3");

    circle.classList.add("hexa2");
  } else if (scrollTop < 1100) {
    circle.classList.remove("hexa2");
    circle.classList.remove("hexa4");

    circle.classList.add("hexa3");

    parentHexa.classList.add("parent-curve");
  } else if (scrollTop < 1200) {
    circle.classList.remove("hexa3");

    circle.classList.add("hexa4");

    parentHexa.classList.remove("parent-curve");
  }
};

window.addEventListener("scroll", handleScroll);

window.addEventListener("scroll", stackCardsOnScroll);

function stackCardsOnScroll() {
  const cardStack = document.querySelector(".card-stack");
  const cards = cardStack.querySelectorAll(".card");

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const stackTop = cardStack.offsetTop;
  const windowHeight = window.innerHeight;

  if (
    scrollTop > stackTop - windowHeight &&
    scrollTop < stackTop + cardStack.offsetHeight
  ) {
    const scrollPercentage =
      (scrollTop - (stackTop - windowHeight)) / cardStack.offsetHeight;

    cards.forEach((card, index) => {
      card.style.transform = `translateY(${index * 100 * scrollPercentage}%)`;
    });
  }
}

const pop1 = document.querySelector("#pop-1");
const pop1Content = document.querySelector("#pop1-content");

const pop2 = document.querySelector("#pop-2");
const pop2Content = document.querySelector("#pop2-content");

const pop3 = document.querySelector("#pop-3");
const pop3Content = document.querySelector("#pop3-content");

const pop4 = document.querySelector("#pop-4");
const pop4Content = document.querySelector("#pop4-content");

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
  pop1Content.classList.add("popup-content2-show");
  document.querySelector("#dot-2-line").style.display = "block";
  document.querySelector("#dot-2-round").style.display = "block";
});
pop2.addEventListener("mouseout", () => {
  pop1Content.classList.remove("popup-content2-show");
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

// Array object containing the data
var items = [
  {
    name: "Backup and Recovery",
    title: "Title 1",
    details: [
      "Automated Snapshots with Lifecycle Management",
      "Automated Database Backup",
    ],
  },
  {
    name: "Compute",
    title: "Title 2",
    details: ["Elastic Virtual Machines", "Autoscaling"],
  },
  {
    name: "Containers, Development, and Automation",
    title: "Title 3",
    details: [
      "Elastic Container Service",
      "Container Registry",
      "Enterprise Message Queues",
      "Resource Orchestration Automation (native, and Terraform)",
      "API Gateway",
    ],
  },
  {
    name: "Database",
    title: "Title 2",
    details: ["Relational Database - MySQL", "Redis"],
  },
  {
    name: "Logging",
    title: "Title 2",
    details: [
      "Enterprise Log Service",
      "Enterprise Application Real-Time Monitoring",
    ],
  },
  {
    name: "Migration",
    title: "Title 2",
    details: ["Database Migration Service (SQL, and noSQL)"],
  },
  {
    name: "Networking",
    title: "Title 2",
    details: [
      "L3 and L7 Load Balancer",
      "Virtual Private Cloud",
      "NAT Gateway",
      "DNS",
    ],
  },
  {
    name: "Security",
    title: "Title 2",
    details: [
      "Firewall and Security Groups",
      "Web Application Firewall",
      "Network Traffic Detection and Response",
      "Security Operations Center",
    ],
  },
  {
    name: "Storage",
    title: "Title 2",
    details: [
      "Elastic Block Storage",
      "Object Storage",
      "Distributed File System",
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

  detailsDiv.innerHTML = "";

  var imageElement = document.createElement("img");
  imageElement.classList.add("animate");

  if (index === 1) {
    imageElement.src = "/public/images/prod1.gif";
  } else if (index === 2) {
    imageElement.src = "/public/images/prod2.gif";
  } else if (index === 3) {
    imageElement.src = "/public/images/prod3.png";
  } else if (index === 4) {
    imageElement.src = "/public/images/prod4.gif";
  } else if (index === 5) {
    imageElement.src = "/public/images/prod5.gif";
  } else if (index === 6) {
    imageElement.src = "/public/images/prod6.gif";
  } else if (index === 7) {
    imageElement.src = "/public/images/prod7.gif";
  } else if (index === 8) {
    imageElement.src = "/public/images/prod8.gif";
  } else {
    imageElement.src = "/public/images/prod1.gif";
  }
  imageElement.alt = "Title Image";

  detailsDiv.appendChild(imageElement);

  var nameElement = document.createElement("h3");
  nameElement.textContent = items[index].name;
  nameElement.classList.add("animate");

  detailsDiv.appendChild(nameElement);

  var details = items[index].details;

  var ul = document.createElement("ul");
  ul.classList.add("animate");
  ul.classList.add("details-prod");
  ul.style.listStyleType = "none";

  details.forEach(function (detail) {
    var li = document.createElement("li");
    li.textContent = detail;
    ul.appendChild(li);
    li.classList.add("animate");
    li.classList.add("details-prod-child");
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
