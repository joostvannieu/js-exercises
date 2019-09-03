/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let comment, posts, comments;

    async function getSomePosts(){
        posts = await window.lib.getPosts();
        posts.forEach( function (post) {
            getSomeComments(post);
        })
    }
    async function getSomeComments(post){
        comments = await window.lib.getComments();
        comment = comments[post.id];
        if (comment !== undefined){
            post.comment = comment;
        }
        console.log(post)
    }

    document.getElementById("run").addEventListener("click", function () {
        getSomePosts();
    });
})();
