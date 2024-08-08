const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
const path = require('path')
const configPath = path.join(__dirname, './config.env')
const databasePath = path.join(__dirname, './database.db')
if (existsSync(configPath)) require('dotenv').config({ path: configPath })
const DATABASE_URL =
  process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || '').trim(),
  DATABASE: 'postgresql://zr_user:y7KKnslpelMrCP5DYhrMCDU2A3lFqWV6@dpg-cqqi13d6l47c73av3gp0-a.oregon-postgres.render.com/zr',
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HANDLERS: (process.env.PREFIX || 'null').trim(),
  SUDO: process.env.SUDO || '918293838182,916296851422',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: 'master',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '+918293838182,LuciZR',
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
  LOG_MSG: toBool(process.env.LOG_MSG) || false,
  RMBG_KEY: process.env.RMBG_KEY || 'null',
  BAILEYS_LOG_LVL: process.env.BAILEYS_LOG_LVL || 'silent',
  LANG: (process.env.LANGUAG || 'en').toLowerCase(),
  WARN_LIMIT: process.env.WARN_LIMIT || 3,
  FORCE_LOGOUT: toBool(process.env.FORCE_LOGOUT),
  BRAINSHOP: process.env.BRAINSHOP || '159501,6pq8dPiYt7PdqHz3',
  DIS_BOT: process.env.DISABLE_BOT || 'null',
  ANTILINK_MSG: process.env.ANTILINK_MSG || '_Antilink Detected &mention kicked_',
  ANTISPAM_MSG: process.env.ANTISPAM_MSG || '_Antispam Detected &mention kicked_',
  ANTIWORDS_MSG: process.env.ANTIWORDS_MSG || '_AntiWord Detected &mention kicked_',
  ANTIWORDS: process.env.ANTIWORDS || 'word',
  MENTION: process.env.MENTION || '',
  MAX_UPLOAD: process.env.MAX_UPLOAD || 230,
  REJECT_CALL: toBool(process.env.REJECT_CALL),
  VPS: toBool(process.env.VPS),
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'false').trim(),
  SEND_READ: toBool(process.env.SEND_READ),
  KOYEB: toBool(process.env.KOYEB),
  KOYEB_NAME: (process.env.KOYEB_NAME || '').trim(),
  KOYEB_API: (process.env.KOYEB_API || '').trim(),
  AJOIN: toBool(process.env.AJOIN),
  GPT: (process.env.GPT || 'free').trim(),
  MODEL: (process.env.MODEL || 'gpt-3.5-turbo').trim(),
  APPROVE: (process.env.APPROVE || '').trim(),
  ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
  PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || 'null',
  DISABLE_START_MESSAGE: process.env.DISABLE_START_MESSAGE
    ? toBool(process.env.DISABLE_START_MESSAGE)
    : false,
  ANTI_BOT: (process.env.ANTI_BOT || 'off').trim(),
  ANTI_BOT_MESSAGE: process.env.ANTI_BOT_MESSAGE || '&mention removed',
  WARN_MESSAGE:
    process.env.WARN_MESSAGE ||
    '⚠️WARNING⚠️\n*User :* &mention\n*Warn :* &warn\n*Remaining :* &remaining',
  WARN_RESET_MESSAGE:
    process.env.WARN_RESET_MESSAGE || `WARN RESET\nUser : &mention\nRemaining : &remaining`,
  WARN_KICK_MESSAGE: process.env.WARN_KICK_MESSAGE || '&mention kicked',
  TRUECALLER: process.env.TRUECALLER,
  DELETE_TYPE: (process.env.DELETE_TYPE || 'pm').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'text').trim(),
  BING_COOKIE: (process.env.BING_COOKIE || '_C_Auth=; ipv6=hit=1721430070187&t=6; GI_FRE_COOKIE=gi_prompt=2&gi_fre=2; MUID=193F318A379B63E629572515364E62B6; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=6A0DA0748274400AA4AF7138566EFBCA&dmnchg=1; _SS=SID=01D44CF6445D6A203E0F583745B86B38; _clck=f5mxos%7C2%7Cfnl%7C0%7C1661; SRCHUSR=DOB=20240627&POEX=W; ANON=A=44C3814B8160FA85B09C878EFFFFFFFF&E=1e05&W=1; NAP=V=1.9&E=1dab&C=go2hIgadRMfTNjG_3GKSLU-ZaCSLGJBmmUZRy-FAzlEuMBz61W2b7A&W=1; PPLState=1; _U=1CWvjSanDBDwmKmYXgGsVpbYqgvVeYHMiP5-VCclpSeJxWMazB74p3YA1yvjfXX8s8y_d7v7QVeZ1c5QBuSdvevnFzOOZeVutmtht167d7W5qq3T2Je6ZgQP36G0xXj1f49RXXuzE_lR-cQqI8IwjuQunW7jvR-0JD6BARVctYlaZWI8NZPIaXCwcxIDs9JF8nM7bWII6dUGPCLZL_0kZoA; WLS=TS=63857023271&C=f0f4cc6daebd97be&N=Anowar; GI_FRE_COOKIE=gi_prompt=2&gi_fre=1; _clsk=9azlau%7C1721426545830%7C2%7C0%7Cy.clarity.ms%2Fcollect; SRCHHPGUSR=SRCHLANG=en&DM=1&CW=521&CH=1032&SCW=521&SCH=1032&BRW=MW&BRH=MT&DPR=2.1&UTC=330&HV=1721426544&PV=11.0.0&PRVCW=521&PRVCH=985').trim(),
  GEMINI_API_KEY: (process.env.GEMINI_API_KEY || 'AIzaSyBzo5z_Uo4vQX5-hM-UDtRhUmiQqfH5ukc').trim(),
  ADMINS: process.env.GROUP_ADMINS || '',
  RENDER_NAME: (process.env.RENDER_NAME || '').trim(),
  RENDER_API_KEY: (process.env.RENDER_API_KEY || '').trim(),
}
