 import inquirer from "inquirer";

 let writer = await inquirer.prompt([
     {
         name: "author",
         type: "list",
         message: "Which writer Book do you want?",
         choices: ["Charles Dickens" , "William Shakespeare" , "Jane Austin" , "Leo Tolstoy" , "George Orwell" , "Fyodor Dostoevsky" , "Ernest Hemingway" , "J. K. Rowling" , "James Joyce" , "Stephen King"],
     }
 ]);
 let charles_Dickens = ("Charles Dickens was an English writer and social critic who lived during the Victorian era, born on February 7, 1812, in Portsmouth, England. He is widely regarded as one of the greatest novelists of the 19th century. Dickens's works are known for their vivid characters, intricate plots, and portrayal of the social issues of his time.");
 let william_Shakespeare = ("William Shakespeare, often regarded as the greatest playwright and poet in the English language, was born in Stratford-upon-Avon, England, in April 1564 (the exact date is not known, but he was baptized on April 26). He is believed to have died on April 23, 1616. Shakespeare's works have had a profound and enduring influence on literature, theater, and the arts.");
 let jane_Austin = ("Jane Austen (1775-1817) was an English novelist known for her insightful and witty portrayals of the lives of the English gentry during the late 18th and early 19th centuries.");
 let leo_Tolstoy = ("Lev Nikolayevich Tolstoy, better known as Leo Tolstoy, was a Russian novelist, short story writer, and playwright who is considered one of the greatest authors of all time.");
// let george_Orwell = ("Eric Arthur Blair, better known as George Orwell, was a British author, journalist, and critic who is widely regarded as one of the most influential writers of the 20th century.");
// let fyodor_Dostoevsky = ("Fyodor Mikhailovich Dostoevsky (1821-1881) was a Russian novelist, short story writer, and philosopher who is considered one of the greatest writers of all time.");
// let ernest_Hemingway = ("Ernest Hemingway (1899-1961) was an American novelist, short-story writer, and journalist who is widely regarded as one of the most influential writers of the 20th century.");
// let j_K_Rowling = ("Joanne Kathleen Rowling, better known as J.K. Rowling, is a British author, screenwriter, and philanthropist.");
// let james_Joyce = ("James Augustine Aloysius Joyce (1882-1941) was a modernist writer, poet, and playwright who is widely regarded as one of the most influential and important writers of the 20th century.");
// let stephen_King = ("Stephen King is a world-renowned American author of horror, suspense, and supernatural fiction.");

if(writer.author === "Charles Dickens")
    console.log(charles_Dickens)
    {
        let charles_Dickens_Books = await inquirer.prompt([
        {
            name: "Book",
            type: "list",
            message: "Which book do you want?",
            choices: ["Oliver Twist","Nicholas Nickleby","The Old Curiosity Shop","Barnaby Rudge","Martin Chuzzlewit","Dombey and Son","David Copperfield","Bleak House","Hard Times","Great Expectations"],
        }
    ]);
    if(charles_Dickens_Books.Book === "Oliver Twist"){
        console.log(" Oliver Twist (1838) - a classic tale of poverty,crime and redemption");
    } 
    if(charles_Dickens_Books.Book === "Nicholas Nickleby"){
        console.log("Nicholas Nickleby (1839) - a story of a young man's struggles to survive in Victorian England");
    }
    if(charles_Dickens_Books.Book === "The Old Curiosity Shop"){
        console.log("The Old Curiosity Shop (1840-1841) - a novel about a young girl's journey to find her missing father");
    }
    if(charles_Dickens_Books.Book === "Barnaby Rudge"){
        console.log("Barnaby Rudge (1841) - a historical novel set during the Gordon Riots of 1780");
    }
    if(charles_Dickens_Books.Book === "Martin Chuzzlewit"){
        console.log("Martin Chuzzlewit (1843-1844) - a novel about a wealthy man's quest for love and redemption");
    }
    if(charles_Dickens_Books.Book === "Dombey and Son"){
        console.log("Dombey and Son (1846-1848) - a novel about a wealthy family's struggles and the rise of industrial");
    }
    if(charles_Dickens_Books.Book === "David Copperfield"){
        console.log("David Copperfield (1849-1850) - a semi-autobiographical novel about a young man's journey to adulthood");
    }
    if(charles_Dickens_Books.Book === "Bleak House"){
        console.log("Bleak House (1852-1853) - a novel about the complexities of the English justice system and the decay of social norms");
    }
    if(charles_Dickens_Books.Book === "Hard Times"){
        console.log("April 1854 Novel, Social commentary, Industrial fiction Coketown, a fictional industrial town in northern England, during the mid-19th century");
    }
    if(charles_Dickens_Books.Book === "Great Expectations"){
        console.log("Great Expectations is a coming-of-age story that follows the life of Pip, an orphan boy who is given the opportunity to rise from his humble beginnings and become a gentleman.");
    }
}

if(writer.author === "William Shakespeare")  { 
    console.log(william_Shakespeare)
let william_Shakespeare_Book = await inquirer.prompt([
    {
        name: "Book",
        message: "Which Book do you want?",
        type: "list",
        choices: ["Romeo and Juliet","Hamlet","Macbeth","A Midsummer Night's Dream","Othello","King lear","The Tempest","Julius Caesar","The Merchant of Venice","As You Like It"],
    }
])


    if(william_Shakespeare_Book.Book === "Romeo and Juliet"){
        console.log("Romeo and Juliet (1595-1596) - A tragic love story about two young lovers from feuding families who fall in love and ultimately die in each other's arms.");
    }
    if(william_Shakespeare_Book.Book === "Hamlet"){
        console.log("Hamlet (1599-1602) - A tragedy that explores the themes of ambition, madness, and mortality, as Prince Hamlet seeks to avenge his father's murder.");
    }
    if(william_Shakespeare_Book.Book === "Macbeth"){
        console.log("Macbeth (1605-1606) - A dark and haunting play about a Scottish nobleman who rises to power and commits a series of murders, only to be haunted by his own guilt and paranoia.");
    }
    if(william_Shakespeare_Book.Book === "A Midsummer Night's Dream"){
        console.log("A Midsummer Night's Dream (1595-1596) - A lighthearted comedy that explores the magical world of fairies and the mischief they can cause, as well as the absurdities of love and relationships.");
    }
    if(william_Shakespeare_Book.Book === "Othello"){
        console.log("Othello (1603-1604) - A tragic play about a Moorish general who becomes the victim of deceit and manipulation, leading to a devastating downfall.")
    }
    if(william_Shakespeare_Book.Book === "King Lear"){
        console.log("King Lear (1605-1606) - A tragedy that explores the themes of aging, power, and mortality, as an aging king decides to divide his kingdom among his three daughters and faces the consequences of his actions.");
    }
    if(william_Shakespeare_Book.Book === "The Tempest"){
        console.log("The Tempest (1611-1612) - A play that combines elements of comedy, romance, and fantasy, as a sorcerer named Prospero seeks to reconcile with his enemies and regain his rightful place as the Duke of Milan.");
    }
    if(william_Shakespeare_Book.Book === "Julius Caesar"){
        console.log("Julius Caesar** (1599-1602) - A historical drama that explores the themes of power, ambition, and betrayal, as Julius Caesar's assassination sets off a chain of events that changes the course of Roman history.");
    }
    if(william_Shakespeare_Book.Book === "The Merchant of Venice"){
        console.log("The Merchant of Venice (1596-1597) - A comedy that explores the themes of love, money, and prejudice, as a young man named Bassanio seeks to woo his beloved Portia while navigating the complexities of Jewish-Christian relations in Venice.");
    }
    if(william_Shakespeare_Book.Book === "As You Like It"){
        console.log("As You Like It (1599-1600) - A comedy that explores the themes of love, identity, and social hierarchy, as a young woman named Rosalind disguises herself as a man to escape an arranged marriage and finds herself in a series of comedic misadventures.");
    }
}

if(writer.author === "Jane Austin"){
    console.log(jane_Austin)
let jane_Austin_Book = await inquirer.prompt([
    {
        name: "Book",
        message: "Which Book do you want?",
        type: "list",
        choices: ["Pride and Prejudice","Sense and Sensibility","Emma","Mansfield Park","Noethanger Abbey","Persuasion","Lady Susan","The Watson","Sandition","First Impressions"],
    }
])
    if(jane_Austin_Book.Book === "Pride and Prejudice"){
        console.log("Pride and Prejudice (1813) - Considered by many to be her masterpiece, this classic novel follows Elizabeth Bennet and Mr. Darcy as they navigate love, family, and societal expectations.");
    }
    if(jane_Austin_Book.Book === "Sense and Sensibility"){
        console.log("Sense and Sensibility (1811) - This novel explores the lives of two sisters, Elinor and Marianne Dashwood, as they navigate love, heartbreak, and social pressures.");
    }
    if(jane_Austin_Book.Book === "Emma"){
        console.log("Emma (1816) - The story follows the titular character, Emma Woodhouse, a young woman who attempts to play matchmaker for her friends, but ultimately learns valuable lessons about love, class, and relationships.")
    }
    if(jane_Austin_Book.Book === "Mansfield Park"){
        console.log("Mansfield Park (1814) - This novel is set in the early 19th century and follows Fanny Price, a young woman who navigates the complexities of her wealthy relatives' household and the arrival of a new suitor.");
    }
    if(jane_Austin_Book.Book === "Mansfield Park"){
        console.log("Mansfield Park(1817) - A Gothic romance that parodies the genre, this novel follows Catherine Morland, a young woman who becomes embroiled in a mystery at Northanger Abbey.");
    }
    if(jane_Austin_Book.Book === "Persuasion"){
        console.log("Persuasion (1817) - This novel tells the story of Anne Elliot, a young woman who was persuaded to reject a proposal of marriage years earlier. When the former suitor returns, Anne must confront her past decisions and re-evaluate her feelings.");
    }
    if(jane_Austin_Book.Book === "Lady Susan"){
        console.log("Lady Susan (1871) - A lesser-known work by Austen, this epistolary novel follows the cunning and manipulative Lady Susan Vernon as she navigates a complex web of relationships and social expectations.");
    }
    if(jane_Austin_Book.Book === "The Watson"){
        console.log("The Watsons (1803-1805) - An unfinished novel, The Watsons follows a young woman named Emma Watson as she navigates her relationships with her family and suitors.");
    }
    if(jane_Austin_Book.Book === "Sandition"){
        console.log("Sanditon (1817) - Another unfinished novel, Sanditon follows the story of Charlotte Heywood, a young woman who becomes involved in a mysterious scheme involving real estate and romance.");
    }
    if(jane_Austin_Book.Book === "Firsy Impressions"){
        console.log("First Impressions (1796-1797) - An early draft of Pride and Prejudice, First Impressions showcases Austen's early writing skills and provides an interesting glimpse into the evolution of her most famous novel.");
    }
}
if(writer.author === "leo_Tolstoy"){
    console.timeLog(leo_Tolstoy);
let leo_Tolstoy_Book = await inquirer.prompt([
    {
        name: "Book",
        message: "Which Book do you want?",
        type: "list",
        choices: ["War and Peace","Anna Karenina","Resurrection","The Death of Ivan Ilyich","The Kreutzer Sonata","The Power of Darkness","The Cossacks","Sebastopol Sketches","Childhood","Hadji Murad"],
    }
])

    if(leo_Tolstoy_Book.Book === "War and peace"){
    console.log("War and Peace (1865-1869) - Tolstoy's masterpiece, this novel follows the lives of several aristocratic Russian families during the Napoleonic Wars, exploring themes of love, family, loyalty, and power.");
    }
    if(leo_Tolstoy_Book.Book === "Anna Karenina"){
        console.log("Anna Karenina (1875-1877) - A tragic love story about an affair between Anna Karenina, a beautiful and passionate woman, and Count Vronsky, a wealthy and charming officer. The novel explores themes of love, morality, and the constraints of societal expectations.");
    }
    if(leo_Tolstoy_Book.Book === "Resurrection"){
        console.log("(1899) - A novel that explores themes of redemption, forgiveness, and the human condition through the story of Prince Dmitri Olsufyev, a young man who is forced to confront his past mistakes.");
    }
    if(leo_Tolstoy_Book.Book === "The Death of Ivan Ilyich"){
        console.log("(1886) - A novella that explores the themes of mortality, meaning, and the search for purpose in life through the story of Ivan Ilyich, a middle-aged man who is forced to re-examine his life after a sudden and unexpected death.");
    }
    if(leo_Tolstoy_Book.Book === "The Kreutzer Sonata"){
        console.log("(1889) - A novella that explores the themes of marriage, love, and betrayal through the story of a couple whose relationship is destroyed by the wife's infidelity.");
    } 
    if(leo_Tolstoy_Book.Book === "The Power of Darkness"){   
    console.log("(1886) - A play that explores the themes of morality, family dynamics, and the destructive power of unchecked emotions through the story of a family torn apart by greed and deception.");
    }
    if(leo_Tolstoy_Book.Book === "The Cossacks"){
        console.log("(1863) - A novella that explores the themes of identity, loyalty, and war through the story of a young nobleman who joins the Cossacks and becomes embroiled in a conflict with his own family.");
    }
    if(leo_Tolstoy_Book.Book === "Sebastopol Sketches"){
        console.log("(1855) - A collection of short stories that explore the experiences of Russian soldiers during the Siege of Sebastopol during the Crimean War.");
    }
    if(leo_Tolstoy_Book.Book === "Childhood"){
        console.log("(1852) - A semi-autobiographical novel that explores the themes of childhood, nostalgia, and the search for meaning through the story of a young boy's experiences growing up in rural Russia.");
    }
    if(leo_Tolstoy_Book.Book === "Hadji Murad"){
        console.log("(1896) - A novella that explores the themes of war, identity, and mortality through the story of a Chechen warrior who fights against the Russian Empire.");
    }
}
