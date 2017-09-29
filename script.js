$(document).ready(function () {
    $('form').submit(function () {
        event.preventDefault();
        let first = $("#firstName").val();
        let last = $("#lastName").val();
        let description = $("#description").val();
        $("#cardsContainer").append(
            `
                <div class="card mx-auto" my-description="${description}">
                    <div class="card-body">
                        <h4 class="card-title">${first} ${last}</h4>
                        <h6 class="card-subtitle mb-2">Click for description!</h6>
                    </div>
                </div>
            `
        );
        $("#cardsContainer").on("click", ".card", function () {
            let description = $(this).attr("my-description");
            $(this).children(".card-body").html(`<p class="card-text">${description}</p>`);

        })
    });
});