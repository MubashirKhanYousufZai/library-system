import inquirer from "inquirer";
// let writer = await inquirer.prompt([
//     {
//         name: "author",
//         type: "list",
//         message: "Which writer Book do you want?",
//         choices: ["Charles Dickens" , "William Shakespeare" , "Jane Austin" , "Leo Tolstoy" , "George Orwell" , "Fyodor Dostoevsky" , "Ernest Hemingway" , "J. K. Rowling" , "James Joyce" , "Stephen King"],
//     }
// ]);
// let charles_Dickens = ("Charles Dickens was an English writer and social critic who lived during the Victorian era, born on February 7, 1812, in Portsmouth, England. He is widely regarded as one of the greatest novelists of the 19th century. Dickens's works are known for their vivid characters, intricate plots, and portrayal of the social issues of his time.");
// let william_Shakespeare = ("William Shakespeare, often regarded as the greatest playwright and poet in the English language, was born in Stratford-upon-Avon, England, in April 1564 (the exact date is not known, but he was baptized on April 26). He is believed to have died on April 23, 1616. Shakespeare's works have had a profound and enduring influence on literature, theater, and the arts.");
// let jane_Austin = ("Jane Austen (1775-1817) was an English novelist known for her insightful and witty portrayals of the lives of the English gentry during the late 18th and early 19th centuries.");
// let leo_Tolstoy = ("Lev Nikolayevich Tolstoy, better known as Leo Tolstoy, was a Russian novelist, short story writer, and playwright who is considered one of the greatest authors of all time.");
// let george_Orwell = ("Eric Arthur Blair, better known as George Orwell, was a British author, journalist, and critic who is widely regarded as one of the most influential writers of the 20th century.");
// let fyodor_Dostoevsky = ("Fyodor Mikhailovich Dostoevsky (1821-1881) was a Russian novelist, short story writer, and philosopher who is considered one of the greatest writers of all time.");
// let ernest_Hemingway = ("Ernest Hemingway (1899-1961) was an American novelist, short-story writer, and journalist who is widely regarded as one of the most influential writers of the 20th century.");
// let j_K_Rowling = ("Joanne Kathleen Rowling, better known as J.K. Rowling, is a British author, screenwriter, and philanthropist.");
// let james_Joyce = ("James Augustine Aloysius Joyce (1882-1941) was a modernist writer, poet, and playwright who is widely regarded as one of the most influential and important writers of the 20th century.");
// let stephen_King = ("Stephen King is a world-renowned American author of horror, suspense, and supernatural fiction.");
let charles_Dickens_Books = await inquirer.prompt([
    {
        name: "Book",
        type: "list",
        message: "Which book do you want?",
        choices: ["Oliver Twist", "Nicholas Nickleby", "The Old Curiosity Shop", "Barnaby Rudge", "Martin Chuzzlewit", "Dombey and Son", "David Copperfield", "Bleak House", "Hard Times", "Great Expectations"],
    }
]);
if (charles_Dickens_Books.Book === "Oliver Twist") {
    console.log(" Oliver Twist (1838) - a classic tale of poverty,crime and redemption");
}
if (charles_Dickens_Books.Book === "Nicholas Nickleby") {
    console.log("Nicholas Nickleby (1839) - a story of a young man's struggles to survive in Victorian England");
}
if (charles_Dickens_Books.Book === "The Old Curiosity Shop") {
    console.log("The Old Curiosity Shop (1840-1841) - a novel about a young girl's journey to find her missing father");
}
if (charles_Dickens_Books.Book === "Barnaby Rudge") {
    console.log("Barnaby Rudge (1841) - a historical novel set during the Gordon Riots of 1780");
}
if (charles_Dickens_Books.Book === "Martin Chuzzlewit") {
    console.log("Martin Chuzzlewit (1843-1844) - a novel about a wealthy man's quest for love and redemption");
}
if (charles_Dickens_Books.Book === "Dombey and Son") {
    console.log("Dombey and Son (1846-1848) - a novel about a wealthy family's struggles and the rise of industrial");
}
if (charles_Dickens_Books.Book === "David Copperfield") {
    console.log("David Copperfield (1849-1850) - a semi-autobiographical novel about a young man's journey to adulthood");
}
if (charles_Dickens_Books.Book === "Bleak House") {
    console.log("Bleak House (1852-1853) - a novel about the complexities of the English justice system and the decay of social norms");
}
if (charles_Dickens_Books.Book === "Hard Times") {
    console.log("April 1854 Novel, Social commentary, Industrial fiction Coketown, a fictional industrial town in northern England, during the mid-19th century");
}
if (charles_Dickens_Books.Book === "Great Expectations") {
    console.log("Great Expectations is a coming-of-age story that follows the life of Pip, an orphan boy who is given the opportunity to rise from his humble beginnings and become a gentleman.");
}
``;
