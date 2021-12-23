//Make a new source folder for a website.
//Allow the user to enter a song title and artist.
//Call this API. 'https://api.lyrics.ovh/v1/artist/title'
//Get the lyrics.
//Display to your user!

//NOTE: .then() version
// $('.form').on('submit', function(e) {
//     e.preventDefault();
//     $('.lyrics').text('Loading...');
//     //declare variables for artist and song
//     var artistName = $('.artist').val();
//     var songTitle = $('.title').val();
//     console.log(artistName, songTitle);
//     //display url with both variables in them
//     fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
//         .then(response => response.json())
//         .then(data => {
//             $('.lyrics').text(data.lyrics)
//         });
// });

//NOTE: async/await version
async function getLyrics(){
    var artistName = $('.artist').val();
    var songTitle = $('.title').val();
    let response = await fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`);
    let songLyrics = await response.json();
    if (response.status === 200) {
        $('.lyrics').text(songLyrics.lyrics)
        } else {
        $('.lyrics').text("No lyrics found")
    }

}

$('.form').on('submit', function (e) {
    e.preventDefault();
    $('.lyrics').text('Loading...');
    getLyrics();
});
