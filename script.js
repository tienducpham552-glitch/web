const apiUrl = "https://innerly.hongnt-hnue.workers.dev/";
let conversationHistory = [];

// Xử lý dữ liệu trả về từ API
function extractText(data) {
    if (!data) return null;
    if (typeof data === "string") return data;
    if (data.reply) return data.reply;
    if (data.text) return data.text;
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text;
    }
    return null;
}

async function callAI(prompt) {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt: prompt,
                history: conversationHistory
            })
        });

        const data = await res.json();
        const text = extractText(data);
        return text || "Innerly đang suy nghĩ thêm một chút nhé 💛";
    } catch (err) {
        return "Innerly không kết nối được lúc này, nhưng mình vẫn ở đây với bạn 💛";
    }
}

async function askGemini() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const loading = document.getElementById("loading");
    const btn = document.getElementById("sendBtn");

    const text = input.value.trim();
    if (!text) return alert("Bạn hãy viết gì đó nhé!");

    const userBubble = document.createElement("div");
    userBubble.className = "chat-bubble user";
    userBubble.innerText = text;
    chatBox.appendChild(userBubble);

    conversationHistory.push({ role: "user", text });
    input.value = "";
    loading.style.display = "block";
    btn.disabled = true;

    const reply = await callAI(text);

    const botBubble = document.createElement("div");
    botBubble.className = "chat-bubble bot";
    botBubble.innerText = reply;
    chatBox.appendChild(botBubble);

    conversationHistory.push({ role: "assistant", text: reply });
    chatBox.scrollTop = chatBox.scrollHeight;
    loading.style.display = "none";
    btn.disabled = false;
}

// Các hàm cho Tool Cảm xúc
async function defineEmotion() {
    const input = document.getElementById("emotionDesc").value.trim();
    const box = document.getElementById("resultDefine");
    if (!input) return alert("Hãy mô tả cảm xúc của bạn!");
    
    const reply = await callAI(`Tạo tên cảm xúc và định nghĩa ngắn: ${input} | Định dạng: Tên | Định nghĩa`);
    const parts = reply.split("|");
    document.getElementById("emotionTitle").innerText = parts[0] || "Cảm xúc đặc biệt";
    document.getElementById("emotionDef").innerText = parts[1] || reply;
    box.style.display = "block";
}

async function suggestActivity() {
    const mood = document.getElementById("moodSelect").value;
    const box = document.getElementById("resultSuggest");
    const reply = await callAI(`Gợi ý 1 hoạt động nhỏ khi đang ${mood}.`);
    document.getElementById("activityText").innerText = reply;
    box.style.display = "block";
}
