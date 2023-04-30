
const $userInput = $("input");
const $gifSection = $("#gif-section")


function getGif(res){
    let results = res.data.length;
    if(results) {
        let randomPic = Math.floor(Math.random() * results);
        let $newSpan = $("<span>");
        let $newGif = $("<img>", {src : res.data[ randomPic ].images.original.url, class: 'pictures'});
        $newSpan.append($newGif);
        $gifSection.append($newSpan);

        let $deleteBtn = $("<button class= 'delete'>X</button>")
        $newSpan.append($deleteBtn);

        $(".delete").on("click", function(){
            $newGif.parent().remove();
        });
    }
}

$("form").on("submit", async function(e){
    e.preventDefault();
    let userSearch = $userInput.val();
    $userInput.val("");

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {params: { q: userSearch, api_key : 'ltkn9tdivQMeUs2qlu1UHFUUKdhQxIGg' }});
    getGif(response.data);
});

$('#remove-all').on("click", function(){
    $gifSection.empty();
})