import React, { useState, createContext } from 'react'


export const CourseData = createContext()
export const MyCourseProvider = ({ children }) => {
    const [courseList, setCourseList] = useState([{
        MyCourse: [

            { 
                id: 1,
                img: "https://uploads.sololearn.com/uploads/courses/1014.png",
                rating: 5,
                name: 'HTML/CSS',
                course_soni: 50,
                CourseKorildi: 10,
                title: 'Kursni davom ettirish',
                active: true,
                // { 
                    // id: 1,
                    show: false, 
                    title: "Elements and Structure", 
                    text: "Write and run your very first Swift program!", 
                    quiz: "hello world", project: "Block Letters", 
                    article: "Running Hello World Locally (Xcode & Terminal)", 
                    lesson: "Hello world" 
                // }
            },
            {
                id: 2,
                img: "https://uploads.sololearn.com/uploads/courses/1024.png",
                rating: 5,
                name: 'JavaScript',
                course_soni: 40,
                CourseKorildi: 1,
                title: 'Kursni davom ettirish',
                active: true
            },
            {
                id: 3,
                img: "data:image/jpeg;base64,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",
                rating: 5,
                name: 'Java',
                course_soni: 25,
                CourseKorildi: 8,
                title: 'Kursni davom ettirish',
                active: true
            },
            {
                id: 4,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'Go',
                course_soni: 100,
                CourseKorildi: 25,
                title: 'Kursni davom ettirish',
                active: true
            },
            {
                id: 5,
                img: "https://uploads.sololearn.com/uploads/courses/1073.png",
                rating: 5,
                name: 'Python',
                course_soni: 120,
                CourseKorildi: 18,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 6,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'C++',
                course_soni: 70,
                CourseKorildi: 30,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 7,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'C#',
                course_soni: 50,
                CourseKorildi: 45,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 8,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'SQL',
                course_soni: 50,
                CourseKorildi: 0,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 9,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'R',
                course_soni: 50,
                CourseKorildi: 50,
                title: 'Kursni davom ettirish',
                active: true
            },
            {
                id: 10,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'React + Redux',
                course_soni: 50,
                CourseKorildi: 0,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 11,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'Kotlin',
                course_soni: 50,
                CourseKorildi: 40,
                title: 'Kursni davom ettirish',
                active: false  
            },
            {
                id: 12,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'C',
                course_soni: 50,
                CourseKorildi: 40,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 13,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'PHP',
                course_soni: 50,
                CourseKorildi: 40,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 14,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'Ruby',
                course_soni: 50,
                CourseKorildi: 40,
                title: 'Kursni davom ettirish',
                active: false
            },
            {
                id: 15,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo7BMrLxPwGEZWudZFlwvfumqPaT96y_OIg&usqp=CAU",
                rating: 5,
                name: 'Swift',
                course_soni: 50,
                CourseKorildi: 40,
                title: 'Kursni davom ettirish',
                active: false
            },
        ],
        MyTest: [
            { 
                id: 1,
                img: 'https://uploads.sololearn.com/uploads/courses/1014.png',
                title: 'Html/CSS',
                text: " HTML - bu statik veb-sahifalar va veb-ilovalarni yaratish uchun ishlatiladigan belgilash tili. CSS - bu belgilash tilida yozilgan hujjatlar taqdimoti uchun javob beradigan uslublar jadvali tili.",
                testText:"Ushbu BEPUL kurs sizga HTML yordamida veb-sahifani loyihalashni o'rgatadi. Bir qator amaliy mashqlarni bajaring va haqiqiy HTML kodini yozishda mashq qiling.         ",
                data: [
                    {
                        id: 1,
                        name: 'Html',
                        price: 'free'
                    }
                ],
                event: [
                    { id: 1, show: false, title: "Elements and Structure", text: "Learn about HTML elements and structure, the building blocks of websites.", quiz: "Introduction to HTML", quiz2: "", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Introduction to HTML" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 2,
                img: 'https://uploads.sololearn.com/uploads/courses/1024.png',
                title: 'JavaScript',
                text: "  Bu dastur 1995-yili dekabrda Live Script nomi bilan atala boshlangan edi. JavaScripning rasmiy nomi esa Ecmas script bo'lar edi. Tez orada JavaScriptga o'zgartirildi. JavaScript bu webni  geperma tilini sahifalarini klent tomonidan ko'rish senariyalarini boshqarish tilidir. JavaScript tilini mashhur qilgan narsa bu klent tomonidan dasturlashdir. ",
                testText:"JavaScript-ning barcha asosiy xususiyatlarini, jumladan veb-saytingizni yanada interaktiv qilish, veb-sayt tarkibini o'zgartirish, shakllarni tasdiqlash va boshqalarni o'rganing.",
                data: [
                    {
                        id: 1,
                        name: 'JavaScript',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "JavaScript World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "JavaScript Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 3,
                img: 'https://uploads.sololearn.com/uploads/courses/1068.png',
                title: 'Java',
                text: "Java SE – Java SE yoki Java Standart Edition, server, shaxsiy kompyuter hamda desktoplarda ishlovchi dasturlar, appletlar yaratish uchun ishlatiladi. Bu texnologiya yordamida yaratilgan dasturlar deyarli barcha operatsion tizimlarda ishlay oladi (Windows NT, Macintosh, Linux va Solaris). Shu bilan birga Java SE boshqa Java turlarining asosi hisoblanadi.",
                testText:"Bizning interaktiv Java kursimiz bilan siz ob'ektga yo'naltirilgan Java dasturlashni o'rganasiz va deyarli qisqa vaqt ichida aniq va haqiqiy kod yozish qobiliyatiga ega bo'lasiz.",
                data: [
                    {
                        id: 1,
                        name: 'Java',
                        price: 'pro'
                    }
                ],
                event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 4,
                img: 'https://uploads.sololearn.com/uploads/courses/1023.png',
                title: 'Go',
                text: "Go bu Google da Robert Griesemer, Rob Pike va Ken Tompson tomonidan ishlab chiqilgan statik tarzda terilgan, kompilyatsiya qilingan dasturlash tilidir. U sintaktik jihatdan C ga o'xshaydi, lekin xotira xavfsizligi, axlat yig'ish, tizimli yozish, va CSP uslubidagi parallellik bilan. Ilgari golang.org domen nomi tufayli u ko'pincha Golang deb ataladi, lekin uning to'g'ri nomi Go.",
                testText:"Go (ba'zan Golang deb ataladi) bugungi kunda eng mashhur va kuchli ochiq kodli dasturlash tillaridan biridir. Google tomonidan ishlab chiqilgan bo'lib, u serverlarda, veb-ishlab chiqishda va hatto buyruq qatori interfeyslarida qo'llaniladi.",
                data: [
                    {
                        id: 1,
                        name: 'Go',
                        price: 'pro'
                    }
                ],
                event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 5,
                img: 'https://uploads.sololearn.com/uploads/courses/1073.png',
                title: 'Python',
                text: "Python (payton, piton) — turli sohalar uchun yuqori darajadagi umumiy maqsadli dasturlash tili. Uning dizayn falsafasi muhim chekinishdan foydalangan holda kodning oʻqilishiga urgʻu beradi. Uning til konstruksiyalari va obyektga yoʻnaltirilgan yondashuvi dasturchilarga kichik va yirik loyihalar uchun aniq, mantiqiy kod yozishda yordam berishga qaratilgan. Shuningdek Python sunʼiy intellekt hamda maʼlumotlar muhandisiligi sohalarining tili hisoblanadi.",
                testText:"Python-ni, bugungi kunda talab yuqori bo'lgan dasturlash tillaridan biri - yo'lda o'rganing! Python kodini yozishni mashq qiling, ball to'plang va o'z mahoratingizni hoziroq ko'rsating!",
                data: [
                    {
                        id: 1,
                        name: 'Python',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 6,
                img: 'https://uploads.sololearn.com/uploads/courses/1051.png',
                title: 'C++',
                text: "C++ dasturlash tili nomi C dasturlash tilidan  kelib chiqqan bq`lib, ++ belgisi inkrement amali, ya`ni o'zgaruvchining qiymatini bittaga oshish amalidan olingan C ++ dasturlash tili turli xil amaliy dasturlarni yaratish, operatsion tizimlarni, qurilma drayverlarini, shuningdek video o'yinlarni va boshqalarni yaratish  uchun keng qo'llaniladi.",
                testText:"Bizning C++ oʻquv qoʻllanmamiz asosiy tushunchalar, maʼlumotlar turlari, massivlar, koʻrsatkichlar, shartli bayonotlar, tsikllar, funksiyalar, sinflar, obyektlar, meros va polimorfizmni oʻz ichiga oladi.",
                data: [
                    {
                        id: 1,
                        name: 'C++',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            { 
                id: 7,
                img: 'https://uploads.sololearn.com/uploads/courses/1080.png',
                title: 'C#',
                text: " C# dasturlash tili tarixi haqida qisqacha ma’lumot berishga harakat qilamiz. Agarda siz dasturlash olamida yangi va nimadan boshlashi bilmay turgan bo’lsangiz, ushbu kamtargina maqolachamiz aynan siz uchun. Nega bu til juda mashhur? Ushbu mashhur dasturlash tilining tarixini ko’rib chiqing.",
                testText:"Interaktiv C# darsligimiz yordamida siz C# dasturlashni yo'lda o'rganasiz! C# kodini yozishni mashq qiling, ball to'plang va o'z mahoratingizni ko'rsating. ",
                   data: [
                    {
                        id: 1,
                        name: 'C#',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 8,
                img: 'https://uploads.sololearn.com/uploads/courses/1060.png',
                title: 'SQL',
                text: "SQL(Structured Query Language) – Bu so'rov tili ko'p operatorlardan tashkil topgan bo'lib, bu operatorlar orqali foydalanuvchilar va dasturlar Oracle(MBBT) dagi ma'lumotlar bazasiga murojaatni amalga oshirishi mumkin. Oracle utililari yoki har xil dasturlar SQL operatorlarisiz bazaga murojaatni amalga oshirishi mumkin, lekin so'rovlarni amalga oshirishda bu so'rov tilidan foydalanmaslikning iloji yo'q",
                testText:"Ushbu kurs ma'lumotlarni olish, yangilash va filtrlash kabi SQL bilan bog'liq bir qator mavzularni o'z ichiga oladi; funktsiyalar va pastki so'rovlar; jadvallarni yaratish va yangilash; va boshqalar!",
                     data: [
                    {
                        id: 1,
                        name: 'SQL',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 9,
                img: 'https://uploads.sololearn.com/uploads/courses/1147.png',
                title: 'R',
                text: "R  - bu statistik ma'lumotlarni qayta ishlash va grafikalar uchun dasturlash tili , shuningdek, GNU loyihasi doirasida bepul va ochiq manbali hisoblash muhiti. Dastlab, R. Ross Aihaka ( Ross Ihaka ) va Robert Gentleman ( ingliz . Robert Gentleman ) tomonidan ishlab chiqilgan (ismlarining birinchi harfi R); til va muhit R fondi tomonidan saqlanadi va ishlab chiqiladi.",
                testText:"R eng ko'p qo'llaniladigan statistik dasturlash tili bo'lib, ma'lumotlar bo'yicha olimlar va tahlilchilarning №1 tanlovidir. Ushbu kurs davomida biz R asoslarini o'rganamiz, ma'lumotlarni saqlaydigan va boshqaradigan dasturlarni qanday yaratishni ko'ramiz, shuningdek, turli xil ma'lumotlar to'plamlari  ",
                 data: [
                    {
                        id: 1,
                        name: 'R',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 10,
                img: 'https://uploads.sololearn.com/uploads/courses/1097.png',
                title: 'React + Redux',
                text: "React (ba'zan React.js yoki ReactJS ) foydalanuvchi interfeyslarini ishlab chiqish uchun ochiq manbali JavaScript kutubxonasi. React Facebook , Instagram va individual ishlab chiquvchilar va korporatsiyalar hamjamiyati tomonidan ishlab chiqilgan va qo'llab-quvvatlanadi.",
                testText:"Facebook va Uber ishonchli mashhur JavaScript kutubxonasi yordamida kuchli interaktiv foydalanuvchi interfeyslarini yaratishni o'rganing. React va Reduxning asosiy tushunchalari bilan tanishing.", 
                data: [
                    {
                        id: 1,
                        name: 'React + Redux',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 11,
                img: 'https://uploads.sololearn.com/uploads/courses/1160.png',
                title: 'Kotlin',
                text: "Kotlin Java virtual mashinasining tepasida ishlaydigan va JetBrains tomonidan ishlab chiqilgan , statik tarzda yozilgan , ob'ektga yo'naltirilgan dasturlash tilidir . Shuningdek, u LLVM ramkasi orqali bir qator platformalarda JavaScript va bajariladigan kodni kompilyatsiya qiladi . Til Finlyandiya ko'rfazidagi Kronshtadt shahri joylashgan Kotlin oroli sharafiga nomlangan.",
                testText:"Kotlin — Java bilan oʻzaro ishlash uchun moʻljallangan zamonaviy va kuchli kross-platforma dasturlash tili. Ushbu kursda biz Kotlinning asosiy tushunchalarini yoritamiz, shuningdek, real hayotdagi loyihalarni quramiz va turli kodlash muammolarini hal qilamiz.",
                    data: [
                    {
                        id: 1,
                        name: 'Kotlin',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            
            {
                id: 12,
                img: 'https://uploads.sololearn.com/uploads/courses/1089.png',
                title: 'C',
                text: "Bizning C o'quv qo'llanmamiz asosiy tushunchalar, ma'lumotlar turlari, massivlar, ko'rsatkichlar, shartli bayonotlar, tsikllar, funktsiyalar, satrlar, tuzilmalar, birlashmalar va boshqa ko'p narsalarni o'z ichiga oladi.",
                testText:"Bizning C o'quv qo'llanmamiz asosiy tushunchalar, ma'lumotlar turlari, massivlar, ko'rsatkichlar, shartli bayonotlar, tsikllar, funktsiyalar, satrlar, tuzilmalar, birlashmalar va boshqa ko'p narsalarni o'z ichiga oladi.",
                    data: [
                    {
                        id: 1,
                        name: 'C',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 13,
                img: 'https://uploads.sololearn.com/uploads/courses/1059.png',
                title: 'PHP',
                text: "PHP ( Inglizcha  PHP: Hypertext Preprocessor  - 'PHP: hypertext preprocessor '; dastlab PHP / FI (Personal Home Page / Form Interpreter) va keyinchalik Personal Home Page Tools  - ' Asboblar shaxsiy veb-sahifalarni yaratish uchun') umumiy maqsadli C-ga o'xshash skript tili bo'lib, u veb-ilovalarni ishlab chiqish uchun intensiv ravishda qo'llaniladi. Hozirda u hosting-provayderlarning aksariyati tomonidan qo'llab-quvvatlanadi va dinamik veb-saytlarni yaratishda ishlatiladigan etakchi tillardan biridir.",
                testText:"PHP dinamik veb-sahifalar yaratish, veb-saytlarni ishlab chiqish va dinamik kontent yaratish imkonini beradi. Eng keng tarqalgan veb-dasturlash tilini o'rganing! ",
                   data: [
                    {
                        id: 1,
                        name: 'Php',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 14,
                img: 'https://uploads.sololearn.com/uploads/courses/1081.png',
                title: 'Ruby',
                text: "Yukihiro Matsumoto tomonidan yaratilgan va 1995 yilda chiqarilgan. Bu sodda va mahsuldorlikka yo'naltirilgan dinamik, ochiq manbali dasturlash tili. U o'qish va yozish uchun qulay bo'lgan sintaksisga ega. Ruby - bu eng ommabop rivojlangan tillaridan biri bo'lib, IT mutaxassislarining ko'pchiligi quyidagi sabablarga ko'ra yuqori darajada interaktiv dastur ishlab chiqishni ma'qul ko'rishadi",
                testText:"Eng chiroyli, badiiy va shu bilan birga qulay dasturlash tillaridan biri bo'lgan Ruby tilini o'rganing. Ruby kodini yozishni mashq qiling, ball to'plang va hoziroq o'z mahoratingizni ko'rsating!",
                  data: [
                    {
                        id: 1,
                        name: 'Ruby',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },
            {
                id: 15,
                img: 'https://uploads.sololearn.com/uploads/courses/1075.png',
                title: 'Swift',
                text: "Butunjahon banklararo moliyaviy telekommunikatsiya jamiyati (inglizcha: Society for Worldwide Interbank Financial Telecommunications; qisqartmasi SWIFT) Belgiyada tashkil topgan kooperativ jamiyat boʻlib, umumjahon boʻylab banklarda moliyaviy operatsiyalarni amalga oshiruvchi va vositachi oʻlaroq xizmat qiladi. Bu tizim umumjahon boʻylab moliya institutlariga moliyaviy operatsiyalarni xavfsiz, standartlashtirilgan va ishonchli tarzda yuborish va olish imkonini beradi.",
                testText:"Swift dasturlashning barcha asosiy tushunchalarini o'rganing va yangi olingan bilimlaringizni o'zingizning to'liq ishlaydigan iOS ilovangizni yaratish uchun qo'llang!",
                  data: [
                    {
                        id: 1,
                        name: 'Swift',
                        price: 'pro'
                    }
                ], event: [
                    { id: 1, show: false, title: "Hello World", text: "Write and run your very first Swift program!", quiz: "hello world", project: "Block Letters", article: "Running Hello World Locally (Xcode & Terminal)", lesson: "Hello world" },
                    { id: 2, show: false, title: "Variable", text: "Introduction to variables and basic data types.", quiz: "Variable", project: "Dog Years", lesson: "Variable", article: "" },
                    { id: 3, show: false, title: "Conditional & Logic", text: " Learn how to develop complex programs in Swift with conditionals and logical operators.", quiz: "Conditionals", project: "Magic 8-Ball", lesson: "Conditionals", article: "" },
                    { id: 4, show: false, title: "Loops", text: "Make the most repetitive tasks easier by learning Swift loops! ", quiz: "Loops", project: "Whale talk", lesson: "Loops", article: "Fizz Buzz" },
                    { id: 5, show: false, title: "Array & Set", text: "Learn how to use Swift arrays and sets to keep your data organized.", quiz: "Arrays", project: "Palindrome", lesson: "Arrays", article: "" },
                    { id: 6, show: false, title: "Dictionaries", text: "Learn how to store pairs of data using the dictionary collection type.", quiz: "Dictionaries", project: "Morse Decoder", article: "if-let-statement", lesson: "Dictionaries" },
                    { id: 7, show: false, title: "Functions", text: "In this module, you will learn how to write and interact with functions in Swift. ", quiz: "Functions", project: "Rock,Paper,Scissors", lesson: "Functions", article: "" },
                    { id: 8, show: false, title: "Structures", text: "Model everyday objects using structures!", quiz: "Structures", project: "Structures, Gym, Regimen", lesson: "Structures", article: "" },
                    { id: 9, show: false, title: "Classes", text: " Model everyday objects using classes! ", quiz: "Classes", project: "Build a Pokedex", lesson: "Classes", article: "" },
                ],
                project: [
                    { id: 1, title: "Blog Letters", text: "Display your initials on the screen in block letters and create an ASCII art" },
                    { id: 2, title: "Dog years", text: "Dogs have ages that don't quite work like ours. This can be a little ruff when you want to know how old your dog would be if he/she is a human. Don't fret — build a dog-age-converting program to translate your dog's age into human years!" },
                    { id: 3, title: "Quadratic Formula", text: "Write a Swift program that solves the quadratic equation." },
                ]
            },

        ]
    }
    ])

    return (
        <CourseData.Provider value={[courseList, setCourseList]}>
            {children}
        </CourseData.Provider>
    )

}

