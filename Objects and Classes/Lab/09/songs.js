function solve(input) {
    input.shift();
    const playListToShow = input.pop();
    const allSongs = processSongs(input);

    if (playListToShow != "all") {
        printSongsNames(getSongsFromPlaylist(allSongs, playListToShow));
        return;
    }

    printSongsNames(allSongs);

    function processSongs(songsData) {
        const songs = [];
        songsData.forEach((song) => {
            const [playList, name, time] = song.split("_");
            songs.push({ playList, name, time });
        });
        return songs;
    }

    function getSongsFromPlaylist(songs, playList) {
        return songs.filter((e) => e.playList == playList);
    }

    function printSongsNames(songs) {
        for (const song of songs) {
            console.log(`${song.name}`);
        }
    }
}
solve([
    3,
    "favourite_DownTown_3:14",
    "favourite_Kiss_4:16",
    "favourite_Smooth Criminal_4:01",
    "favourite",
]);
solve([
    4,
    "favourite_DownTown_3:14",
    "listenLater_Andalouse_3:24",
    "favourite_In To The Night_3:58",
    "favourite_Live It Up_3:48",
    "listenLater",
]);
solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
