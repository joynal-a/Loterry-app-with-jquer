(function ($) {
    "use strict";
    $(document).ready(function () {

            let names = [];
          
            $("#addButton").click(function() {
              const name = $("#nameInput").val().trim();
              if (name !== "") {
                names.push(name);
                $("#nameList").append(`<li>${name}</li>`);
                $("#nameInput").val("");
              }
            });
          
            $("#lotteryButton").click(function() {
              if (names.length > 0) {
                const randomIndex = Math.floor(Math.random() * names.length);
                const winner = names[randomIndex];
                $("#winner").text(`Winner: ${winner}`);
              }
            });

          



    });

}(jQuery));