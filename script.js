const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}&de=demo@example.com`;const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
async function translateText() {
    const text = document.getElementById("inputText").value.trim();
    const lang = document.getElementById("lang").value;
    const [from, to] = lang.split("|");

    const output = document.getElementById("output");

    if (!text) {
        output.innerText = "اكتب نص الأول";
        return;
    }

    output.innerText = "جاري الترجمة...";

    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;

        const res = await fetch(url);
        const data = await res.json();

        if (data.responseData && data.responseData.translatedText) {
            output.innerText = data.responseData.translatedText;
        } else {
            output.innerText = "مفيش نتيجة ترجمة";
        }

    } catch (error) {
        console.log(error);
        output.innerText = "حدث خطأ في الاتصال بالترجمة";
    }
}
