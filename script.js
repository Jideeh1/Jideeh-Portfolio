var messageOne = "If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\n";
var messageTwo = "It'd be a big mistake trying to read my HTML and JavaScript. My css however... I'm proud of the way I arranged it.\n\n";
var messageThree = "Want to take a peek? Go to Sources.\n\n";
var messageFour = "Seriously though, if you just want to take some JS functions, or see how I styled my elements, the code is open-source in my github.\n\n";
var messageFive = "find it on: https://github.com/Jideeh1\n\n";
var messageSix = "Just don't start complaining when you see how ass I write code. ーｗー\n\n";
var signature = "Yours Truly, Jideeh\n\n";

console.log(messageOne + messageTwo + messageThree + messageFour + messageFive + messageSix + signature);

function toggleButton() {
    var collapsedSideBar = document.querySelector('.sidebar');
    var collapsedInfoBox = document.querySelector('.name-occupation');
    var togglerCollapsed = document.querySelector('.toggler');

    togglerCollapsed.classList.toggle('toggler-collapsed');
    collapsedSideBar.classList.toggle('collapsed');
    collapsedInfoBox.classList.toggle('collapsed-infobox');
}

 const greetings = [
    "Kumusta", "こんにちは", "Hallo", "Përshëndetje", "ሰላም", "Marhaba", "Բարեւ", "নমস্কাৰ", "Salam",
    "Kaixo", "Прывітанне", "হ্যালো", "Zdravo", "Здравей", "မင်္ဂလာပါ",
    "你好", "Hola", "Kumusta", "Moni", "你好", "Bonghjornu", "Bok", "Ahoj",
    "Hej", "سلام", "Hallo", "བཀྲ་ཤིས་བདེ་ལེགས།", "Hello", "Saluton", "Tere", "Woezɔ",
    "Bula", "Kamusta", "Hei", "Bonjour", "Ola", "გამარჯობა", "Hallo", "Γειά σου",
    "નમસ્તે", "Alo", "Sannu", "Aloha", "שלום", "नमस्ते", "Nyob zoo", "Helló",
    "Halló", "Ndewo", "Halo", "Dia dhuit", "Ciao", "こんにちは", "Halo",
    "ನಮಸ್ಕಾರ", "Сәлем", "សួស្តី", "Muraho", "안녕하세요", "Slaw", "Салам",
    "ສະບາຍດີ", "Salve", "Sveiki", "Sveiki", "Moien", "Здраво", "Manao ahoana",
    "Hai", "നമസ്കാരം", "Bongu", "Kia ora", "नमस्कार", "Сайн уу", "Zdravo",
    "မင်္ဂလာပါ", "नमस्ते", "Hei", "Akkam", "Салам", "سلام", "سلام", "Cześć",
    "Olá", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "Rimaykullayki", "Salut", "Привет", "Talofa",
    "Halò", "Здраво", "Mhoro", "سلام", "ආයුබෝවන්", "Ahoj", "Živjo", "Salaan",
    "Hola", "Hujambo", "Hej", "Салом", "வணக்கம்", "Сәлам", "నమస్తే", "สวัสดี",
    "བཀྲ་ཤིས་བདེ་ལེགས།", "ሰላም", "Merhaba", "Salam", "Привіт", "سلام", "Salom",
    "Xin chào", "Kumusta", "Helo", "Molo", "העלא", "Bawo", "Sawubona"
  ];

   let index = 0;
  const h1 = document.getElementById("greeting");

  function showNextGreeting() {
    h1.classList.add("fade-out");

    setTimeout(() => {
      h1.textContent = greetings[index];
      h1.classList.remove("fade-out");
      index = (index + 1) % greetings.length;
    }, 500);
  }

  setInterval(showNextGreeting, 2000);