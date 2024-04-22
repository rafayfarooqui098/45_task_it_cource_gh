// Define the make_album function
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Make three function calls to create dictionaries representing different albums
const album1 = make_album('arijith singh', 'Ae dil hai mushkil', 12);
const album2 = make_album('Luis fonsi', 'Despacito');
const album3 = make_album('AUR', 'tu hai kahan', 16);

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
