function solve(commands) {
    const shelfs = {};

    commands.forEach((c) => {
        if (c.includes(" -> ")) {
            const [shelfId, shelfGenre] = c.split(" -> ");
            if (!shelfs[shelfId])
                shelfs[shelfId] = {
                    id: shelfId,
                    genre: shelfGenre,
                    books: [],
                };
        } else {
            const [bookTitle, bookAuthor, bookGenre] = c.split(/: |, /g);
            const shelf = Object.values(shelfs).find(
                (s) => s.genre == bookGenre
            );
            if (shelf)
                shelf.books.push({
                    title: bookTitle,
                    author: bookAuthor,
                    genre: bookGenre,
                    toString: () => {
                        return `--> ${bookTitle}: ${bookAuthor}`;
                    }
                });
        }
    });

    Object
        .values(shelfs)
        .sort((s1, s2) => s2.books.length - s1.books.length)
        .forEach(s => {
            console.log(`${s.id} ${s.genre}: ${s.books.length}`);
            s.books
                .sort((b1, b2) => b1.title.localeCompare(b2.title))
                .forEach(b => console.log(b.toString()));
        });
}
solve([
    "1 -> history",
    "1 -> action",
    "Death in Time: Criss Bell, mystery",
    "2 -> mystery",
    "3 -> sci-fi",
    "Child of Silver: Bruce Rich, mystery",
    "Hurting Secrets: Dustin Bolt, action",
    "Future of Dawn: Aiden Rose, sci-fi",
    "Lions and Rats: Gabe Roads, history",
    "2 -> romance",
    "Effect of the Void: Shay B, romance",
    "Losing Dreams: Gail Starr, sci-fi",
    "Name of Earth: Jo Bell, sci-fi",
    "Pilots of Stone: Brook Jay, history",
]);
