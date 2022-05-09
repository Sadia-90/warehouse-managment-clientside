import React from 'react';

const Blogs = () => {
    return (
        <div className='bg-primary text-center'>
            <h1>Question & Answer</h1>
            <div>
                <h3>1.  Difference between javascript and nodejs</h3>

                <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses.JavaScript is normally following Java Programming language standard. Whereas node JS is written in C++ and provides a V8 engine base browser.</p>
            </div>
            <div>
           <h3> When should I use nodejs and when should I use mongodb</h3>
            <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is so much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers.There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. Thats why we use nodeJS</p>
            </div>
            <div>
                <h3>Differences between sql and nosql databases.</h3>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work</h3>
                <p>JWT is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            </div>

        </div>
    );
};

export default Blogs;