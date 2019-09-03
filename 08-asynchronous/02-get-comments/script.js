/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let posts, comment;
    document.getElementById("run").addEventListener("click", function () {
        //combined = {id, title, content, author, comment:[content, author]};
        window.lib.getPosts(function (error, posts) {
            posts.forEach(function (post) {
                window.lib.getComments(null, function (error, comments) {
                    //console.log(`Article: ${Object.entries(post)}`);
                    comment = comments[post.id];
                    if (comment !== undefined) {
                        //console.log(`Comment: ${Object.entries(comment)}`);
                        post.comment= comment;
                        console.log(post);
                    }
                })
            })
        });
    })
})();
