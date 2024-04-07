window.addEventListener("load", function () {

  function parseTicket(_per) {

    if (_per === "뮤지컬") {
      // ticketXhttp.open("GET", "ticketdata.json");
      fetch("ticketdata.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    } else if (_per === "클래식") {
      // ticketXhttp.open("GET", "ticketdata1.json");
      fetch("ticketdata1.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    } else if (_per === "연극") {
      // ticketXhttp.open("GET", "ticketdata2.json");
      fetch("ticketdata2.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    } else if (_per === "서커스/마술") {
      // ticketXhttp.open("GET", "ticketdata3.json");
      fetch("ticketdata3.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    } else if (_per === "국악") {
      // ticketXhttp.open("GET", "ticketdata4.json");
      fetch("ticketdata4.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    } else if (_per === "대중음악") {
      // ticketXhttp.open("GET", "ticketdata5.json");
      fetch("ticketdata5.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    } else if (_per === "무용") {
      // ticketXhttp.open("GET", "ticketdata6.json");
      fetch("ticketdata6.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    } else if (_per === "아동") {
      // ticketXhttp.open("GET", "ticketdata7.json");
      fetch("ticketdata7.json")
          .then(res => res.json())
          .then(result => makeTicketSlide(result))
          .catch(err => console.log(err));
    }
    // ticketXhttp.send();
  }

  parseTicket("뮤지컬");

  let ticketSwiper;

  function makeTicketSlide(_data) {
    let swTicketHtml = ``;
    for (let i = 0; i < _data.ticket_total; i++) {
      let obj = _data[`ticket_${i + 1}`];
      let temp = `
          <div class="swiper-slide">
            <a href="${obj.link}" class="ticket-link">
              <div class="ticket-img">
                <img src="images/${obj.pic}" alt="${obj.title}" />
                <span class="ticket-rank">${obj.rank}</span>
              </div>
              <div class="ticket-info">
                <ul class="ticket-info-list">
                  <li>
                    <span class="ticket-title"><b>${obj.title}</b></span>
                  </li>
                  <li>
                    <span class="ticket-hall">${obj.hall}</span>
                  </li>
                  <li>
                    <span class="ticket-date">${obj.date}</span>
                  </li>
                </ul>
              </div>
            </a>
          </div>
        `;
      swTicketHtml += temp;
    }
    const swTicketWrapper = document.querySelector(
        ".sw-ticket .swiper-wrapper"
    );
    swTicketWrapper.innerHTML = swTicketHtml;

    let ticketSwiper = new Swiper(".sw-ticket", {
      slidesPerView: "auto",
      spaceBetween: 10,
      navigation: {
        nextEl: ".ticket .sw-next",
        prevEl: ".ticket .sw-prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 27,
        },
      },
    });
  }

  const btns = document.querySelectorAll(".ticket .btns a");
  let cateName = ["뮤지컬","클래식","연극","서커스/마술","국악","대중음악","무용","아동"]
  for(let i = 0; i < cateName.length; i++){
    btns[i].onclick = function (event) {
      event.preventDefault();
      parseTicket(cateName[i]);
      for(let j = 0; j < btns.length; j++){
        btns[j].classList.remove("btns-active")
      }
      //포커스 적용
      this.classList.add("btns-active");
    };
  }
  btns[0].classList.add("btns-active");
});
