const languages = [
["en", "English"],
["fa", "فارسی"],
["de", "Deutsch"],
["fr", "Français"],
["es", "Español"],
["it", "Italiano"],
["pt", "Português"],
["ru", "Русский"],
["ar", "العربية"],
["tr", "Türkçe"],
["nl", "Nederlands"],
["pl", "Polski"],
["sv", "Svenska"],
["da", "Dansk"],
["no", "Norsk"],
["fi", "Suomi"],
["is", "Íslenska"],
["cs", "Čeština"],
["sk", "Slovenčina"],
["sl", "Slovenščina"],
["hr", "Hrvatski"],
["sr", "Српски"],
["bg", "Български"],
["uk", "Українська"],
["el", "Ελληνικά"],
["ro", "Română"],
["hu", "Magyar"],
["et", "Eesti"],
["lv", "Latviešu"],
["lt", "Lietuvių"],
["ga", "Gaeilge"],
["mt", "Malti"],
["sq", "Shqip"],
["mk", "Македонски"],
["bs", "Bosanski"],
["ca", "Català"],
["eu", "Euskara"],
["gl", "Galego"],
["cy", "Cymraeg"],
["he", "עברית"],
["hi", "हिन्दी"],
["bn", "বাংলা"],
["ur", "اردو"],
["ta", "தமிழ்"],
["te", "తెలుగు"],
["mr", "मराठी"],
["gu", "ગુજરાતી"],
["kn", "ಕನ್ನಡ"],
["ml", "മലയാളം"],
["pa", "ਪੰਜਾਬੀ"],
["ne", "नेपाली"],
["si", "සිංහල"],
["th", "ไทย"],
["vi", "Tiếng Việt"],
["id", "Bahasa Indonesia"],
["ms", "Bahasa Melayu"],
["fil", "Filipino"],
["sw", "Kiswahili"],
["af", "Afrikaans"],
["zu", "isiZulu"],
["xh", "isiXhosa"],
["am", "አማርኛ"],
["yo", "Yorùbá"],
["ig", "Igbo"],
["ha", "Hausa"],
["so", "Soomaali"],
["km", "ខ្មែរ"],
["lo", "ລາວ"],
["my", "မြန်မာ"],
["ka", "ქართული"],
["hy", "Հայերեն"],
["az", "Azərbaycan"],
["kk", "Қазақша"],
["uz", "O‘zbekcha"],
["mn", "Монгол"],
["zh-CN", "简体中文"],
["zh-TW", "繁體中文"],
["ja", "日本語"],
["ko", "한국어"]
];

/* =========================
TRANSLATION DICTIONARY
========================= */

const translations = {

```
en: {

    personal_space:
        "PERSONAL KNOWLEDGE SPACE",

    hero_description:
        "Student interested in understanding living systems — from molecules and genes to the brain, cognition and evolution.",

    about:
        "About",

    interests:
        "Interests",

    approach:
        "Approach",

    approach_text:
        "Curious about how complex biological systems emerge from interactions between simpler components — and how those systems eventually produce cognition and behavior.",

    projects:
        "Projects",

    projects_text:
        "Experiments, small software projects, scientific notes, computational ideas and things worth building.",

    notes:
        "Notes",

    notes_text:
        "Short observations, concepts, questions and explanations collected while learning.",

    current_focus:
        "CURRENT FOCUS",

    brain_title:
        "Understanding the brain as a biological system.",

    brain_text:
        "Exploring the relationship between genetics, cellular mechanisms, neural circuits, cognition and behavior.",

    evolution:
        "Evolution",

    evolution_subtitle:
        "A small collection of notes and reading material.",

    ai_subtitle:
        "Ask questions about biology, neuroscience, genetics, evolution and related sciences.",

    ai_welcome:
        "Ask a scientific question. The assistant is designed to explain concepts clearly and distinguish established knowledge from uncertainty.",

    about_title:
        "Why this exists.",

    about_text:
        "This is not intended to be a conventional portfolio. It is a small digital space for things I am learning, building, reading and thinking about."

},

fa: {

    personal_space:
        "فضای دانش شخصی",

    hero_description:
        "دانش‌آموزی علاقه‌مند به درک سیستم‌های زنده؛ از مولکول‌ها و ژن‌ها تا مغز، شناخت و تکامل.",

    about:
        "درباره",

    interests:
        "علایق",

    approach:
        "رویکرد",

    approach_text:
        "کنجکاوم بدانم سیستم‌های پیچیده‌ی زیستی چگونه از برهم‌کنش اجزای ساده‌تر شکل می‌گیرند و چگونه در نهایت به شناخت و رفتار منجر می‌شوند.",

    projects:
        "پروژه‌ها",

    projects_text:
        "آزمایش‌ها، پروژه‌های نرم‌افزاری کوچک، یادداشت‌های علمی، ایده‌های محاسباتی و چیزهایی که ارزش ساختن دارند.",

    notes:
        "یادداشت‌ها",

    notes_text:
        "مشاهدات کوتاه، مفاهیم، پرسش‌ها و توضیحاتی که هنگام یادگیری جمع‌آوری می‌شوند.",

    current_focus:
        "تمرکز فعلی",

    brain_title:
        "درک مغز به‌عنوان یک سیستم زیستی.",

    brain_text:
        "بررسی ارتباط میان ژنتیک، سازوکارهای سلولی، مدارهای عصبی، شناخت و رفتار.",

    evolution:
        "تکامل",

    evolution_subtitle:
        "مجموعه‌ای کوچک از یادداشت‌ها و مطالب مطالعاتی.",

    ai_subtitle:
        "درباره‌ی زیست‌شناسی، علوم اعصاب، ژنتیک، تکامل و علوم مرتبط سؤال بپرس.",

    ai_welcome:
        "یک سؤال علمی بپرس. این دستیار برای توضیح شفاف مفاهیم و تفکیک دانش تثبیت‌شده از موارد نامطمئن طراحی شده است.",

    about_title:
        "چرا این سایت وجود دارد؟",

    about_text:
        "این سایت قرار نیست یک پورتفولیوی معمولی باشد؛ فضایی کوچک برای چیزهایی است که یاد می‌گیرم، می‌سازم، می‌خوانم و درباره‌شان فکر می‌کنم."

}
```

};

/* =========================
LANGUAGE UI
========================= */

const languageButton =
document.getElementById("languageButton");

const languageMenu =
document.getElementById("languageMenu");

const languageGrid =
document.getElementById("languageGrid");

languages.forEach(([code, name]) => {

```
const button =
    document.createElement("button");

button.className = "lang-item";

button.textContent = name;

button.onclick = () =>
    setLanguage(code);

languageGrid.appendChild(button);
```

});

languageButton.addEventListener(
"click",
() => {

```
    languageMenu.classList.toggle("open");

}
```

);

languageMenu.addEventListener(
"click",
event => {

```
    if (event.target === languageMenu) {
        languageMenu.classList.remove("open");
    }

}
```

);

function setLanguage(code) {

```
const dictionary =
    translations[code];

/*
   Only languages with a local dictionary
   are fully translated without an API.

   For the remaining languages, the UI
   can be connected to the translation API
   in the backend.
*/

if (!dictionary) {

    alert(
        "This language is prepared in the language selector. Full automatic translation requires the translation API endpoint."
    );

    languageMenu.classList.remove("open");

    return;
}


document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

        const key =
            element.dataset.i18n;

        if (dictionary[key]) {

            element.textContent =
                dictionary[key];

        }

    });


document
    .querySelectorAll("[data-placeholder]")
    .forEach(element => {

        const key =
            element.dataset.placeholder;

        if (dictionary[key]) {

            element.placeholder =
                dictionary[key];

        }

    });


document
    .querySelector("#languageButton span")
    .textContent =
    code.toUpperCase();


document.documentElement.lang =
    code;

languageMenu.classList.remove("open");
```

}

/* =========================
ARTICLE SYSTEM
========================= */

const articles = {

```
selection: {

    title:
        "Natural Selection",

    body: `
        <p>
        Natural selection is a process through which heritable
        differences in reproductive success can change the
        composition of populations across generations.
        </p>

        <h3>Variation</h3>

        <p>
        Individuals within a population are not genetically
        identical. Mutations, recombination and other processes
        generate variation.
        </p>

        <h3>Heritability</h3>

        <p>
        For selection to produce evolutionary change, at least
        part of the relevant variation must be heritable.
        </p>

        <h3>Differential reproduction</h3>

        <p>
        If some heritable traits systematically increase
        reproductive success in a particular environment,
        those traits can become more common over generations.
        </p>
    `

},


drift: {

    title:
        "Genetic Drift",

    body: `
        <p>
        Genetic drift describes changes in allele frequencies
        caused by random sampling rather than differences in
        fitness.
        </p>

        <h3>Population size</h3>

        <p>
        Drift is generally stronger in smaller populations,
        where random sampling can produce relatively large
        changes in allele frequencies.
        </p>

        <h3>Founder effects</h3>

        <p>
        When a new population is established by a small number
        of individuals, the resulting allele frequencies may
        differ substantially from the source population.
        </p>
    `

},


genetics: {

    title:
        "Evolution & Genetics",

    body: `
        <p>
        Evolution can be understood genetically as a change
        in the frequencies of heritable variants within
        populations over generations.
        </p>

        <h3>Sources of variation</h3>

        <p>
        Mutation introduces new genetic variants, while
        recombination reshuffles existing variation.
        </p>

        <h3>Evolutionary mechanisms</h3>

        <p>
        Natural selection, genetic drift, gene flow and
        mutation all contribute to changes in populations.
        Their relative importance depends on the population
        and environment being studied.
        </p>
    `

}
```

};

function openArticle(id) {

```
const article =
    articles[id];

if (!article) return;

document
    .getElementById("articleContent")
    .innerHTML = `
        <h1>${article.title}</h1>
        ${article.body}
    `;

document
    .getElementById("articleModal")
    .classList.add("open");
```

}

function closeArticle() {

```
document
    .getElementById("articleModal")
    .classList.remove("open");
```

}

/* =========================
AI CHAT
========================= */

const aiInput =
document.getElementById("aiInput");

const sendButton =
document.getElementById("sendButton");

const aiMessages =
document.getElementById("aiMessages");

async function askAI() {

```
const question =
    aiInput.value.trim();

if (!question) return;


addUserMessage(question);

aiInput.value = "";

addSystemMessage(
    "Thinking..."
);


/*
   IMPORTANT:

   Replace this endpoint with your
   secure serverless backend.

   NEVER put an OpenAI/API secret
   directly in this file.
*/

try {

    const response =
        await fetch("/api/ask", {

            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify({
                question: question
            })

        });


    if (!response.ok) {

        throw new Error(
            "AI endpoint unavailable"
        );

    }


    const data =
        await response.json();


    removeThinking();


    addSystemMessage(
        data.answer ||
        "No answer was returned."
    );


} catch (error) {

    removeThinking();

    addSystemMessage(
        "The scientific AI is not connected yet. The frontend is ready; connect /api/ask to your AI backend."
    );

}
```

}

function addUserMessage(text) {

```
const message =
    document.createElement("div");

message.className =
    "ai-message user";

message.innerHTML = `
    <span class="message-label">
        YOU
    </span>
    <p></p>
`;

message.querySelector("p")
    .textContent = text;

aiMessages.appendChild(message);

aiMessages.scrollTop =
    aiMessages.scrollHeight;
```

}

function addSystemMessage(text) {

```
const message =
    document.createElement("div");

message.className =
    "ai-message";

message.innerHTML = `
    <span class="message-label">
        SCIENTIFIC AI
    </span>
    <p></p>
`;

message.querySelector("p")
    .textContent = text;

aiMessages.appendChild(message);

aiMessages.scrollTop =
    aiMessages.scrollHeight;
```

}

function removeThinking() {

```
const messages =
    aiMessages.querySelectorAll(
        ".ai-message"
    );

const last =
    messages[messages.length - 1];

if (
    last &&
    last.textContent.includes("Thinking...")
) {

    last.remove();

}
```

}

sendButton.addEventListener(
"click",
askAI
);

aiInput.addEventListener(
"keydown",
event => {

```
    if (
        event.key === "Enter" &&
        (event.ctrlKey || event.metaKey)
    ) {

        askAI();

    }

}
```

);

/* =========================
TRANSLATION
========================= */

async function translateText() {

```
const text =
    document
        .getElementById("translateInput")
        .value
        .trim();

const language =
    document
        .getElementById("languageSelect")
        .value;

const output =
    document
        .getElementById("translationOutput");


if (!text) {

    output.textContent =
        "Enter text first.";

    return;

}


output.textContent =
    "Translating...";


try {

    /*
       Public demo translation endpoint.

       For production, replace this
       with your own translation backend.
    */

    const response =
        await fetch(
            "https://api.mymemory.translated.net/get?q="
            +
            encodeURIComponent(text)
            +
            "&langpair=en|"
            +
            encodeURIComponent(language)
        );


    const data =
        await response.json();


    output.textContent =
        data.responseData.translatedText;


} catch {

    output.textContent =
        "Translation service unavailable.";

}
```

}

/* =========================
COMMAND PALETTE
========================= */

const commandPalette =
document.getElementById(
"commandPalette"
);

const commandButton =
document.getElementById(
"commandButton"
);

const paletteInput =
document.getElementById(
"paletteInput"
);

function openPalette() {

```
commandPalette.classList.add("open");

setTimeout(
    () => paletteInput.focus(),
    50
);
```

}

function closePalette() {

```
commandPalette.classList.remove(
    "open"
);
```

}

commandButton.addEventListener(
"click",
openPalette
);

document.addEventListener(
"keydown",
event => {

```
    if (
        (event.ctrlKey ||
         event.metaKey) &&
        event.key.toLowerCase() === "k"
    ) {

        event.preventDefault();

        if (
            commandPalette
                .classList
                .contains("open")
        ) {

            closePalette();

        } else {

            openPalette();

        }

    }


    if (event.key === "Escape") {

        closePalette();

        closeArticle();

        languageMenu.classList.remove(
            "open"
        );

    }

}
```

);

commandPalette.addEventListener(
"click",
event => {

```
    if (
        event.target ===
        commandPalette
    ) {

        closePalette();

    }

}
```

);

function scrollToSection(id) {

```
closePalette();

document
    .getElementById(id)
    .scrollIntoView({
        behavior: "smooth"
    });
```

}

function scrollToTop() {

```
closePalette();

window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

}

/* =========================
REVEAL ANIMATION
========================= */

const observer =
new IntersectionObserver(
entries => {

```
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target
                    .classList
                    .add("visible");

            }

        });

    },

    {
        threshold: .08
    }
);
```

document
.querySelectorAll(".reveal")
.forEach(element => {

```
    observer.observe(element);

});
```

/* =========================
ARTICLE MODAL CLICK
========================= */

document
.getElementById("articleModal")
.addEventListener(
"click",
event => {

```
        if (
            event.target.id ===
            "articleModal"
        ) {

            closeArticle();

        }

    }
);
```
