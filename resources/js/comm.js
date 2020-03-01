window.addEventListener("DOMContentLoaded", function() {
  function scroll() {
    var wsTop = $(window).scrollTop();
    var gnbOffset = $("#gnb").offset().top;

    //if (this.type) {
    console.log(this.event.type);
    //}

    // if (window.event.type == "scroll") {
    //   console.log("스크롤 이벤트 발생");
    // } else if (this.event.type == "load") {
    //   console.log("로드 발생");
    // }
    //console.log();

    if (wsTop >= $("header > p").height()) {
      $("#gnb").addClass("fixed");
    } else {
      $("#gnb").removeClass("fixed");
    }
  }

  $(window).scroll(function() {
    scroll();
  });

  //scroll();

  let list = document.getElementById("gnb");
  let items = list.querySelectorAll("li");

  // 각 아이템에 이벤트 리스너를 등록합니다.
  // for (let item of items) {
  //   item.addEventListener("click", function() {
  //     alert("you clicked on item: " + item.innerHTML);
  //   });
  // }

  // list.addEventListener("click", function(e) {
  //   console.log(e.target);
  //   console.log(e.target.nodeName);

  //   if (e.target && e.target.nodeName == "LI") {
  //     alert("li 선택");
  //   }
  // });

  function siblings(t) {
    var children = t.parentElement.children;
    var tempArr = [];

    for (var i = 0; i < children.length; i++) {
      tempArr.push(children[i]);
    }

    return tempArr.filter(function(e) {
      return e != t;
    });
  }

  document.querySelector("#gnb").addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "LI") {
      e.target.setAttribute("class", "active");

      for (i = 0; i <= siblings(e.target).length; i++) {
        console.log(siblings(e.target));
      }
    }
  });
});
