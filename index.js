const { Telegraf, Markup } = require("telegraf");
require('dotenv').config();

const { 
  TOKEN_1, 
  URL_1,
  TOKEN_2, 
  URL_2,
  TOKEN_3, 
  URL_3,
} = process.env

const bot1 = new Telegraf(TOKEN_1)

bot1.command('start', (ctx) => {
  return ctx.replyWithHTML(
    'Запустите приложение!',
    Markup.keyboard([
      Markup.button.webApp('Open', URL_1)
    ]).resize()
  )
})

bot1.launch()

const bot2 = new Telegraf(TOKEN_2)

bot2.command('start', (ctx) => {
  return ctx.replyWithHTML(
    'Запустите приложение!',
    Markup.keyboard([
      Markup.button.webApp('Open', URL_2)
    ]).resize()
  )
})

bot2.launch()

const bot3 = new Telegraf(TOKEN_3)

bot3.command('start', (ctx) => {
  return ctx.replyWithHTML(
    'Запустите приложение!',
    Markup.keyboard([
      Markup.button.webApp('Open', URL_3)
    ]).resize()
  )
})

bot3.launch()
