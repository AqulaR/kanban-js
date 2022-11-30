function intoJsona(id) {
    let modal = document.getElementById("myModal1");
    let span = document.getElementsByClassName("cls1")[0];

    console.log(id);

    const btnaddtsk = document.getElementsByClassName("myBtn")
    /*btnaddtsk.forEach((elem) => {
      elem.addEventListener("click", function() {
        modal.style.display = "block";
        });
    })  */

    for (const elem of btnaddtsk) {
      elem.addEventListener("click", function() {
        modal.style.display = "block";
        });
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}     

function intoJsonb(){
    let modal = document.getElementById("myModal2");
    let span = document.getElementsByClassName("cls2")[0];

    let btnaddboard = document.getElementById("myBtn");

    btnaddboard.addEventListener("click", function() {
        modal.style.display = "block";
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}