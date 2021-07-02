"use strict";

/*
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (content) {
    this.text = content;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let something = new AttachedPost("Marin", "Text text", "01.07.2021");
console.log(something);
something.makeTextHighlighted();
something.edit("Text2");
console.log(something);
*/

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(content) {
        this.text = content;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let something = new AttachedPost("Marin", "Text text", "01.07.2021");
console.log(something);
something.makeTextHighlighted();
something.edit("Text2");
console.log(something);
