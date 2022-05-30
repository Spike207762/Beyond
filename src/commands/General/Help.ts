import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h', 'list', 'menu']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/90c8d596818e948cc6a82.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `(❤️ω❤️)Konnichiwa👋 Darling I'm Spike!

𝗡𝗼𝘁𝗲𝘀🎫:- 𝖨𝖿 𝖸𝗈𝗎 𝖧𝖺𝗏𝗂𝗇𝗀 𝖠𝗇𝗒 Issᴜᴇs 𝖶𝗂𝗍𝗁 ℕ𝕖𝕫𝕦𝕜𝕠 𝖳𝗁𝖾𝗇 𝖳𝗒𝗉𝖾 ${this.client.config.prefix}𝗋𝖾𝗉𝗈𝗋𝗍 𝖳ᴏ 𝗋𝖾𝗉𝗈𝗋𝗍 𝖮𝗐𝗇𝖾𝗋!

Bot Prefix:- *${this.client.config.prefix}*
Bot Name:- *${this.client.user.name}*
User Name:- *${M.sender.username}
