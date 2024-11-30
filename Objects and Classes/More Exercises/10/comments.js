function solve(commands) {
    const users = [];
    const articles = {};

    commands.forEach((c) => {
        if (c.startsWith("user ")) {
            users.push(c.split("user ")[1]);
        } else if (c.startsWith("article ")) {
            const name = c.split("article ")[1];
            articles[name] = { name, comments: [] };
        } else {
            const [username, articleName, commentTitle, comentContent] =
                c.split(/ posts on |: |, /g);
            if (!users.includes(username) || !articles[articleName]) return;
            articles[articleName].comments.push(
                toComment(username, commentTitle, comentContent)
            );
        }
    });

    Object
        .values(articles)
        .sort((a1, a2) => {
            const a1CommentsL = a1.comments.length;
            const a2CommentsL = a2.comments.length;
            return a1CommentsL < a2CommentsL ? 1 : a1CommentsL == a2CommentsL ? 0 : -1;
        })
        .forEach(a => {
            console.log(`Comments on ${a.name}`);
            a.comments
                .sort((c1, c2) => c1.user.localeCompare(c2.user))
                .forEach(c => console.log(c.toString()));
        });

    function toComment(username, commentTitle, comentContent) {
        return {
            user: username,
            title: commentTitle,
            content: comentContent,
            toString: () => {
                return `--- From user ${username}: ${commentTitle} - ${comentContent}`;
            }
        };
    }
}

solve([
    "user aUser123",
    "someUser posts on someArticle: NoTitle, stupidComment",
    "article Books",
    "article Movies",
    "article Shopping",
    "user someUser",
    "user uSeR4",
    "user lastUser",
    "uSeR4 posts on Books: I like books, I do really like them",
    "uSeR4 posts on Movies: I also like movies, I really do",
    "someUser posts on Shopping: title, I go shopping every day",
    "someUser posts on Movies: Like, I also like movies very much",
]);
