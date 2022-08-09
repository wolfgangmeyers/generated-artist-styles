const artists = [
    "A.B. Frost",
    "Aaron Douglas",
    "Aaron Miller",
    "Adam Paquette",
    "Adam Rex",
    "Agnes Lawrence Pelton",
    "Ahmed Karahisari",
    "Akihiko Yoshida",
    "Alan Pollack",
    "Albert Bierstadt",
    "Albert Dorne",
    "Albert Joseph Pénot",
    "Albert Namatjira",
    "Alberto Giacometti",
    "Alberto Vargas",
    "Albrecht Dürer",
    "Aldus Manutius",
    "Aleksander Gierymski",
    "Aleksi Briclot",
    "Alesso Baldovinetti",
    "Alex Grey",
    "Alex Horley-Orlandelli",
    "Alex Katz",
    "Alex Ross",
    "Alex Toth",
    "Alexander Sharpe Ross",
    "Alfred Charles Parker",
    "Alfred Freddy Krupa",
    "Allen Tupper True",
    "Alphonse Mucha",
    "Amos Sewell",
    "Amy Weber",
    "Anato Finnstark",
    "Andrew Loomis",
    "Andrew Robinson",
    "Andrew Wyeth",
    "André François",
    "André Masson",
    "Andy Warhol",
    "Anish Kapoor",
    "Anita Kunz",
    "Anna Haifisch",
    "Anna Mary Robertson Moses",
    "Anna and Elena Balbusso",
    "Anni Albers",
    "Ansel Adams",
    "Anson Maddocks",
    "Anthony Palumbo",
    "Anthony S Waters",
    "Anton Otto Fischer",
    "Antonio Mancini",
    "Aquirax Uno",
    "Archibald Motley, Jr.",
    "Arcimboldo",
    "Arnie Swekel",
    "Art Spiegelman",
    "Artemisia Gentileschi",
    "Arthur Burdett Frost",
    "Arthur Garfield Dove",
    "Arthur Rackham",
    "Aubrey Beardsley",
    "Aurél Bernáth",
    "Austin Briggs",
    "Austin English",
    "Ayako Rokkaku",
    "Ayami Kojima",
    "Ayshia Taşkın",
    "Banksy",
    "Barbara Nessim",
    "Barron Storey",
    "Bascove",
    "Bastien L. Deharme",
    "Bayard Wu",
    "Beatrix Potter",
    "Beksinski",
    "Ben Stahl",
    "Ben Thompson",
    "Ben Zoeller",
    "Benjamin Franklin",
    "Benjamin Marra",
    "Bernard D’Andrea",
    "Bernie D’Andrea",
    "Bikash Bhattacharjee",
    "Bill Sienkiewicz",
    "Bill Ward",
    "Bill Watterson",
    "Bob Eggleton",
    "Bob Ross",
    "Bob Singer",
    "Boris Vallejo",
    "Bourgeois",
    "Brad Holland",
    "Brenda Chamberlain",
    "Brian 'Chippy' Dugan",
    "Brian Bolland",
    "Brian Fies",
    "Brian Froud",
    "Brian Snøddy",
    "Bridget Riley",
    "Brigette Barrager",
    "Brom",
    "Bruce Timm",
    "Bunny Yeager",
    "Cam Sykes",
    "Camille Corot",
    "Camille Pissarro",
    "Canaletto",
    "Caravaggio",
    "Carl Barks",
    "Carl Critchlow",
    "Carla Wyzgala",
    "Carles Delclaux Is",
    "Carlos Saenz de Tejada",
    "Caroline Mytinger",
    "Cedric Peyravernay",
    "Chagall",
    "Charles Addams",
    "Charles Dana Gibson",
    "Charles Marion Russell",
    "Charles Martin",
    "Charles Schulz",
    "Charlotte Harding",
    "Chase Stone",
    "Chippy",
    "Chris Cold",
    "Chris Rahn",
    "Chris Rallis",
    "Chris Spollen",
    "Chris Ware",
    "Christian August Lorentzen",
    "Christopher Moeller",
    "Christopher Rush",
    "Christopher Williams",
    "Christopher Wren",
    "Cindy Sherman",
    "Claire Hummel",
    "Clara Miller Burd",
    "Clara Peeters",
    "Claude Monet",
    "Cliff Childs",
    "Clint Cearley",
    "Coby Whitmore",
    "Coles Phillips",
    "Cornelis Bisschop",
    "Craig Mullins",
    "Craig Thompson",
    "Cricorps Grégoire",
    "Cynthia Sheppard",
    "Cézanne",
    "D. Alexander Gregory",
    "Daarken",
    "Dai Jin",
    "Dali",
    "Dalí",
    "Damien Hirst",
    "Dan Content",
    "Dan Frazier",
    "Dan Luvisi",
    "Dan Scott",
    "Dan Smith",
    "Daniel Gelon",
    "Daniel Ljunggren",
    "Daniel Merriam",
    "Darek Zabrocki",
    "Daren Bader",
    "Darrell Riche",
    "Dave Allsop",
    "Dave Arredondo",
    "Dave Dorman",
    "Dave Gibbons",
    "Dave Kendall",
    "Dave McKean",
    "Dave Melvin",
    "David Begbie",
    "David Firth",
    "David Macaulay",
    "David Martin",
    "David Palumbo",
    "David Small",
    "Dean Cornwell",
    "Delaunay",
    "Derf",
    "Diane Dillon",
    "Dick Bickenbach",
    "Dicky Doyle",
    "Diego Gisbert Llorens",
    "Diego Velázquez",
    "Domirinic Fegallia",
    "Don Arday",
    "Donato Giancola",
    "Dong Kingman",
    "Dorothea Tanning",
    "Dorothy Hood",
    "Doug Wildey",
    "Douglas Shuler",
    "Dr. Seuss",
    "Drew Tucker",
    "Dürer",
    "E. Simms Campbell",
    "E.H. Shepard",
    "Earle Bergey",
    "Earnst Haeckel",
    "Ed Benedict",
    "Ed Roth",
    "Edgar Degas",
    "Edmund Dulac",
    "Edmund F. Ward",
    "Edvard Munch",
    "Edward Gorey",
    "Edward Hopper",
    "Edward Kemble",
    "Edward Lear",
    "Edward P. Beard Jr.",
    "Edward Sorel",
    "Edwin Austin Abbey",
    "Edwin Deakin",
    "Edwin Georgi",
    "Egon Schiele",
    "El Greco",
    "Elaine Duillo",
    "Eleanor Vere Boyle",
    "Elizabeth Murray",
    "Elizabeth Shippen Green",
    "Elwood H. Smith",
    "Emanuel Schongut",
    "Emma Ríos",
    "Emory Douglas",
    "Epsylon Point",
    "Eric Auld",
    "Eric Dinyer",
    "Eric Peterson",
    "Ernst",
    "Ernst Fuchs",
    "Etienne Delessert",
    "Eugene Leroy",
    "Eugeniusz Zak",
    "Eugène Delacroix",
    "Evaline Ness",
    "Everett Raymond Kinstler",
    "Everett Shinn",
    "Exekias",
    "Eyvind Earle",
    "F Scott Hess",
    "Fairfield Porter",
    "Fede Galizia",
    "Felix Octavius Carr Darley",
    "Feng Zhu",
    "Fiona Stephenson",
    "Fitz Henry Lane",
    "Frances Jetter",
    "Francesco Furini",
    "Francis Bacon",
    "Francis Souza",
    "Francisco Goya",
    "Franciszek Starowieyski",
    "Frank Frazetta",
    "Frank Miller",
    "Frank Schoonover",
    "Frank Xavier Leyendecker",
    "Franklin Booth",
    "Franklin Carmichael",
    "Franz Vohwinkel",
    "Fred Ludekens",
    "Fred Marcellino",
    "Fred Williams",
    "Frederick McCubbin",
    "Frida Kahlo",
    "Fuyuko Matsui",
    "Gabor Szikszai",
    "Galen Dara",
    "Gary Panter",
    "Gaudi",
    "Gaugin",
    "George Abe",
    "George B. Bridgman",
    "George Cruikshank",
    "George Inness",
    "George Luks",
    "Georges Seurat",
    "Georgia O'Keeffe",
    "Giacomo Balla",
    "Giger",
    "Gil Elvgren",
    "Gilles Beloeil",
    "Gillis Rombouts",
    "Giorgio de Chirico",
    "Giorgione",
    "Giovanni Battista Gaulli",
    "Giuseppe Camuncoli",
    "Glen Angus",
    "Gloria Stoll Karn",
    "Gordon Browne",
    "Grandma Moses",
    "Greg Hildebrandt",
    "Greg Rutkowski",
    "Greg Spalenka",
    "Greg Staples",
    "Gregorio Lazzarini",
    "Gregory Manchess",
    "Grzegorz Rutkowski",
    "Gu Hongzhong",
    "Guillermo del Toro",
    "Guo Xi",
    "Gustaf Tenggren",
    "Gustav Doré",
    "Gustav Klimt",
    "Gustave Dore",
    "Gwen John",
    "H.R. Giger",
    "H.R. Millar",
    "Haddon Sundblom",
    "Hanna-Barbera",
    "Hannah Höch",
    "Hans Hinterreiter",
    "Harold von Schmidt",
    "Harriet Powers",
    "Harrison Fisher",
    "Harry Beckhoff",
    "Harry Haenigsen",
    "Harvey Dunn",
    "Harvey Kurtzman",
    "Heather Hudson",
    "Heinz Edelman",
    "Henri Matisse",
    "Henri Rousseau",
    "Henry Moore",
    "Henry Raleigh",
    "Hideyuki Kikuchi",
    "Hieronim Bosch",
    "Hilma af Klint",
    "Hiromu Arakawa",
    "Hisui Sugiura",
    "Hokusai",
    "Howard Chandler Christy",
    "Howard Knotts",
    "Howard Lyon",
    "Howard Pyle",
    "Ian Miller",
    "Ignacy Witkiewicz",
    "Igor Kieryluk",
    "Igor Morski",
    "Ilya Kuvshinov",
    "Ilya Repin",
    "Irene and Laurette Patten",
    "Isaac Levitan",
    "Israel Tsvaygenbaum",
    "Istvan Banyai",
    "Itō Jakuchū",
    "Ivan Aivazovsky",
    "Ivan Bilibin",
    "Ivan Shishkin",
    "Iwao Takamoto",
    "Izzy Medrano",
    "J. Frederick Smith",
    "J.C. Leyendecker",
    "Jacek Yerka",
    "Jack Kirby",
    "Jackson Pollock",
    "Jacques Hérold",
    "Jacqui Morgan",
    "Jaime Jones",
    "James Gillray",
    "James Gurney",
    "James Jean",
    "James Jonathan Jeffries",
    "James Montgomery Flagg",
    "James Paick",
    "James Ryman",
    "James Warhola",
    "James Wood",
    "Jamie Hewlett",
    "Jan Brett",
    "Jan Kip",
    "Jan Miense Molenaer",
    "Jan van Eyck",
    "Janet Fish",
    "Jason A. Engle",
    "Jason Chan",
    "Jason Felix",
    "Jasper Johns",
    "Jay Hambidge",
    "Jean Cunningham",
    "Jean Giraud",
    "Jean Metzinger",
    "Jean-Michel Basquiat",
    "Jeff A. Menges",
    "Jeff Koons",
    "Jeff Miracola",
    "Jeffrey Smith",
    "Jennifer Janesko",
    "Jerry Eisenberg",
    "Jerry Pinkney",
    "Jesper Ejsing",
    "Jesper Myrfors",
    "Jessie Willcox Smith",
    "Jim Burns",
    "Jim Lee",
    "Jim Murray",
    "Jim Nelson",
    "Jim Steranko",
    "Jimmy Ernst",
    "Joan Miró",
    "Joan Snyder",
    "Joan Tuset",
    "Joaquín Sorolla",
    "Jodorowsky",
    "Joe Bowler",
    "Joe Shuster",
    "Joe Sorren",
    "Joe de Mers",
    "Joel Shapiro",
    "Johan Grenier",
    "Johann Bodin",
    "Johann Kretzschmer",
    "Johannes Helgeson",
    "Johannes Vermeer",
    "Johannes Voss",
    "John Atherton",
    "John Atkinson Grimshaw",
    "John Avon",
    "John Backderf",
    "John Broadley",
    "John Carpenter",
    "John Frederick Kensett",
    "John French Sloan",
    "John George Sowerby",
    "John Harris",
    "John Henry Kingsley",
    "John J Park",
    "John La Gatta",
    "John Martin",
    "John Matson",
    "John Philip Falter",
    "John Romita Jr",
    "John Wilson",
    "Jon Foster",
    "Jon Whitcomb",
    "Jonathan Solter",
    "Jordan Grimmer",
    "Jorge Jacinto",
    "Joseph Bowler",
    "Joseph Clement Coll",
    "Joseph Cornell",
    "Joseph Keppler",
    "Josh Bayer",
    "Joyce Ballantyne Brand",
    "Juan Giménez",
    "Juan Gris",
    "Julian Allen",
    "Jung Park",
    "Junji Ito",
    "Justin Sweet",
    "Józef Mehoffer",
    "Kadir Nelson",
    "Kahlo",
    "Kaja Foglio",
    "Kandinsky",
    "Kanzan Shimomura",
    "Karl Kopinski",
    "Karl Thiart",
    "Kate Greenaway",
    "Katsushika Ōi",
    "Kawanabe Kyōsai",
    "Kay Nielsen",
    "Kazimir Malevich",
    "Keith Haring",
    "Kelly Mckernan",
    "Keren Katz",
    "Kev Walker",
    "Kinuko Craft",
    "Klimt",
    "Kogan Gengei",
    "Konstantin Vasilyev",
    "Konstantinas Ciurlionis",
    "Kusama",
    "Kyle Lambert",
    "Ladrönn",
    "Lale Westvind",
    "Lars Grant-West",
    "Laura Muntz Lyall",
    "Laurel Burch",
    "Laurie Lipton",
    "Lee Loughridge",
    "Lena Alexander",
    "Leo Lionni",
    "Leo and Diane Dillon",
    "Leonardo da Vinci",
    "Leonora Carrington",
    "Li Chevalier",
    "Li Di",
    "Li Tang",
    "Li Tiefu",
    "Lichtenstein",
    "Lin Tinggui",
    "Lisa Frank",
    "Lisa Yuskavage",
    "Liza Donnelly",
    "Loic Zimmerman",
    "Lorraine Fox",
    "Louis Comfort Tiffany",
    "Louis Glackens",
    "Louis Janmot",
    "Louise Bourgeois",
    "Luca Zontini",
    "Lucas Graciano",
    "Lucian Freud",
    "Ludwig Bemelmans",
    "Luis Paret y Alcazar",
    "Luis Royo",
    "Luma Rouge",
    "Lyle Tuttle",
    "Lynda Benglis",
    "Lynn Pauley",
    "Lyubov Popova",
    "M.C. Escher",
    "MC Escher",
    "Mabel Rollins Harris",
    "Mac Conner",
    "Maciej Kuciara",
    "Magali Villeneuve",
    "Maginel Wright Enright Barney",
    "Makoto Aida",
    "Makuzu Kōzan",
    "Malczewski",
    "Malevich",
    "Malvin Gray Johnson",
    "Manjit Bawa",
    "Marc Bell",
    "Marc Simonetti",
    "Marc Tetro",
    "Marcel Duchamp",
    "Margaret Brundage",
    "Margaret Keane",
    "Margaret Macdonald Mackintosh",
    "Margareta Sterian",
    "Marianne North",
    "Marie-Gabrielle Capet",
    "Mario Cooper",
    "Mark English",
    "Mark Poole",
    "Mark Ryden",
    "Mark Tedin",
    "Mark Zug",
    "Marshall Arisman",
    "Martin Johnson Heade",
    "Martin Schongauer",
    "Maruyama Ōkyo",
    "Mary Blair",
    "Mary Cassatt",
    "Mary Hallock Foote",
    "Mary Jane Begin",
    "Masamune Shirow",
    "Mathias Kollros",
    "Mati Klarwein",
    "Matt Cavotta",
    "Matt Stewart",
    "Matthew D. Wilson",
    "Matthias Weischer",
    "Mattise",
    "Maurice Esteve",
    "Max Ernst",
    "Max Gubler",
    "Maxfield Parrish",
    "Małgorzata Serwatka",
    "Mead Schaeffer",
    "Melissa A. Benson",
    "Melissa Benson",
    "Micha Klein",
    "Michael Sutfin",
    "Michael Whelan",
    "Michelangelo",
    "Michelangelo Buonarotti",
    "Mikalojus Konstantinas Čiurlionis",
    "Mike Bierek",
    "Mike Mignola",
    "Milton Caniff",
    "Milton Glaser",
    "Miwa Komatsu",
    "Miyamoto",
    "Mondrian",
    "Monet",
    "Mort Künstler",
    "Munch",
    "Murakami",
    "Murray Tinkelman",
    "Mustafa Rakim",
    "Mœbius",
    "N.C. Wyeth",
    "Nancy Stahl",
    "Narayan Shridhar Bendre",
    "Natasha Tan",
    "Nathalie Rattner",
    "Neal Adams",
    "Ned M. Seidler",
    "Neil Blevins",
    "Neil Boyle",
    "Nelson Alexander Ross",
    "Neysa McMein",
    "Nicolette Macnamara",
    "Niko Henrichon",
    "Nil Gleyen",
    "Nils Hamm",
    "Noah Bradley",
    "Norman Lewis",
    "Norman Rockwell",
    "Norman Saunders",
    "O'Keeffe",
    "Odilon Redon",
    "Ohara Koson",
    "Olga Rozanova",
    "Olha Darchuk",
    "Olivia de Berardinis",
    "Osamu Tezuka",
    "Pablo Carpio",
    "Pablo Picasso",
    "Pablo Rey",
    "Paolo Parente",
    "Pat Oliphant",
    "Paul Bril",
    "Paul Cezanne",
    "Paul Davis",
    "Paul Gauguin",
    "Paul Klee",
    "Paulus Decker",
    "Paweł Kluza",
    "Pearl Frush",
    "Penny Patricia Poppycock",
    "Pete Venters",
    "Peter Fiore",
    "Peter Helck",
    "Peter Madsen",
    "Peter Max",
    "Peter Mohrbacher",
    "Peter Paul Rubens",
    "Peter Rockwell",
    "Peter Wells",
    "Peter de Seve",
    "Peter de Sève",
    "Phil Foglio",
    "Phillip Peter Price",
    "Pia Fries",
    "Picasso",
    "Pierre Bonnard",
    "Pierre Mion",
    "Piet Mondrian",
    "Pieter Bruegel",
    "Pieter Claesz",
    "Piranesi",
    "Pollock",
    "Pruett Carter",
    "Qu Leilei",
    "Quinton Hoover",
    "R.O. Blechman",
    "Ralph Horsley",
    "Ralph McQuarrie",
    "Randolph Caldecott",
    "Randy Gallegos",
    "Randy Post",
    "Randy Vargas",
    "Raphael",
    "Raymond Swanland",
    "Rebecca Guay",
    "Reginald Richard Redford",
    "Rei Kamoi",
    "Rembrandt",
    "Remedios Varo",
    "Ren Xun",
    "Rene Magritte",
    "Renoir",
    "Reuben Nakian",
    "Ric Estrada",
    "Richard Doyle",
    "Richard Hess",
    "Richard Kane Ferguson",
    "Richard Randolph Rubenstein",
    "Richard Rockwell",
    "Richter",
    "Rick Griffin",
    "Riusuke Fukahori",
    "Rob Alexander",
    "Rob Gonsalves",
    "Robbie Trevino",
    "Robert Beatty",
    "Robert Childress",
    "Robert Crumb",
    "Robert Fawcett",
    "Robert M. Cunningham",
    "Robert Maguire",
    "Robert McGinnis",
    "Robert Peak",
    "Robert Weaver",
    "Roberto da Matta",
    "Robt. L. Williams",
    "Rockwell Kent,",
    "Roger Ballen",
    "Rolf Armstrong",
    "Ron Spears",
    "Ron Spencer",
    "Rose O’Neill",
    "Ross Tran",
    "Roz Chast",
    "Rube Goldberg",
    "Rudolf Freund",
    "Rudolph Belarski",
    "Russell Patterson",
    "Ruth Deckard",
    "Ruth Sanderson",
    "Ryan Barger",
    "Ryan Pancoast",
    "Ryan Stegman",
    "Ryan Yee",
    "Salvador Dali",
    "Salvador Dalí",
    "Sam Spratt",
    "Sandro Botticelli",
    "Sarah Gough Adamson",
    "Sarah Morris",
    "Sarper Baran",
    "Saul Steinberg",
    "Saul Tepper",
    "Scott Gustafson",
    "Scott M. Fischer",
    "Scott Samuel Summers",
    "Seb McKinnon",
    "Shaddy Safadi",
    "Sheikh Hamdullah",
    "Sheilah Beckett",
    "Shekhar Gurera",
    "Shog Janit",
    "Sidney Richard Percy",
    "Siegfried Haas",
    "Simon Bisley",
    "Sir John Tenniel",
    "Slawomir Maniak",
    "Sonia Delaunay",
    "Stan Galli",
    "Stan and Jan Berenstain",
    "Stanisław Wyspiański",
    "Stevan Dohanos",
    "Steve Argyle",
    "Steve Brodner",
    "Steve Dillon",
    "Steve Ditko",
    "Steve Prescott",
    "Steven Belledin",
    "Steven James Petruccio",
    "Studio Ghibli",
    "Sunil Das",
    "Susan Heidi",
    "Susy Pilgrim Waters",
    "Svetlin Velinov",
    "Syd Mead",
    "Sydney Prior Hall",
    "T. S. Sullivant",
    "Takashi Murakami",
    "Takato Yamamoto",
    "Takeshi Obata",
    "Tamara Lempicka",
    "Taravat Jalali Farahani",
    "Taro Okamoto",
    "Tatsuyuki Tanaka",
    "Ted DeGrazia",
    "Teresa Fasolino",
    "Terese Nielsen",
    "Terry Redlin",
    "Thomas Blackshear",
    "Thomas Crane",
    "Thomas Dalziel",
    "Thomas Fogarty",
    "Thomas Kinkade",
    "Thomas Kluge",
    "Thomas M. Baxa",
    "Thomas Nast",
    "Thomas Rowlandson",
    "Thomas Scholes",
    "Thornton Oakley",
    "Thota Vaikuntham",
    "Tim Hildebrandt",
    "Tim and Greg Hildebrandt",
    "Titian",
    "Titus Lunter",
    "Todd Lockwood",
    "Tom La Padula",
    "Tom Lovell",
    "Tom Wänerstrand",
    "Tomasz Jedruszek",
    "Tomek Setowski",
    "Tomer Hanuka",
    "Tomi Ungerer",
    "Tomokazu Matsuyama",
    "Tony DiTerlizzi",
    "Tony Sart",
    "Tony Szczudlo",
    "Tuomas Korpi",
    "Tyler Edlin",
    "Tyler Jacobson",
    "Utagawa Kuniyoshi",
    "Van Gogh",
    "Vermeer",
    "Victo Ngai",
    "Victor Adame Minguez",
    "Victor Moscoso",
    "Victor Moscoso,",
    "Victor Mosquera",
    "Vincent Di Fate",
    "Vincent Proce",
    "Vint Lawrence",
    "Violet Oakley",
    "Virginia Lee Burton",
    "Vladimir Kush",
    "Vladimir Tretchikoff",
    "Volkan Baga",
    "Wally Wood",
    "Walt Reed",
    "Walter Beach Humphrey",
    "Walter Crane",
    "Walter Humphrey",
    "Warhol",
    "Warren Mahy",
    "Wassily Kandinsky",
    "Wayne England",
    "Wayne Reynolds",
    "Weiwei",
    "Wendell Minor",
    "Wes Wilson",
    "Wesley Burt",
    "Whitney Darrow, Jr.",
    "Whitney Sherman",
    "Wifredo Lam",
    "Will Eisner",
    "Willard Mullin",
    "William Blake",
    "William Glackens",
    "William Michael Harnett",
    "William Steig",
    "William Stout",
    "William Turner",
    "Willian Murai",
    "Willie Ito",
    "Winona Nelson",
    "Winsor McCay",
    "Wojciech Siudmak",
    "Wylie Beckert",
    "Yasar Vurdem",
    "Yasutomo Oka",
    "Yayoi Kusama",
    "Yayou Kusama",
    "Yeong-Hao Han",
    "Yoshitaka Amano",
    "Yoshitoshi ABe",
    "Yue Minjun",
    "Yukimasa Ida",
    "Yuko Shimizu",
    "Yuko Tatsushima",
    "Yumihiko Amano",
    "Yves Tanguy",
    "Zacharias Martin Aagaard",
    "Zack Stella",
    "Zdzislaw Beksinski",
    "Zhang Zeduan",
    "Zhou Wenjing",
    "Zoltan Boros",
    "Zoë Mozert",
    "Édouard Detaille",
    "Édouard Manet"
]

export default artists;
