const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const app = express();
const port = process.env.PORT || 3000;

const token = "8179221601:AAHexr1Pfpf2xuUnb_f8aV8dE8f221JFfFU";

// Создаём объект бота
const bot = new TelegramBot(token, { polling: true });

// Отправка сообщения, когда кто-то пишет боту
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Привет! Перейди по следующей ссылке, чтобы открыть веб-приложение: https://gameappmini.netlify.app/"
  );
});

// Если бот получает любое сообщение, он отправляет ссылку на приложение
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Перейди по следующей ссылке, чтобы открыть веб-приложение: https://gameappmini.netlify.app/"
  );
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
