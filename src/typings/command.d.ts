import MessageHandler from "../Handlers/MessageHandler";
import { WAClient } from "../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "./";
export interface ICommand {
  client?: WAClient;
  handler?: MessageHandler;
  run(
    M: ISimplifiedMessage,
    parsedArgs: IParsedArgs
  ): Promise<void | never> | void | never;
  config: {
    adminOnly?: boolean;
    aliases?: string[];
    description?: string;
    command: string;
    id?: string;
    category?: TCategory;
    usage?: string;
    dm?: boolean;
    baseXp?: number;
    modsOnly?: boolean;
  };
}

export type TCategory =
  | "★彡[ᴄʜᴀʀᴀᴄᴛᴇʀꜱ]彡★"
  | "★彡[ᴄᴏᴅɪɴɢ]彡★"
  | "★彡[ᴅᴇᴠ]彡★"
  | "★彡[ᴇᴄᴏɴᴏᴍʏ]彡★"
  | "★彡[ꜰᴜɴ]彡★"
  | "★彡[ɢᴀᴍᴇꜱ]彡★"
  | "★彡[ᴇᴅᴜᴄᴀᴛɪᴠᴇ]彡★"
  | "★彡[ɢᴇɴᴇʀᴀʟ]彡★"
  | "★彡[ᴍᴇᴅɪᴀ]彡★"
  | "★彡[ᴍᴏᴅᴇʀᴀᴛɪᴏɴ]彡★"
  | "★彡[ᴍᴜꜱɪᴄ]彡★"
  | "★彡[ʏᴏᴜᴛᴜʙᴇ]彡★"
  | "★彡[ᴘᴏᴋᴇᴍᴏɴ]彡★"
  | "★彡[ɴꜱꜰᴡ]彡★"
  | "★彡[ᴜᴛɪʟꜱ]彡★"
  | "★彡[ᴡᴇᴇʙ]彡★"
  | "★彡[ʟᴜᴍɪɴᴇ]彡★"
  | "★彡[ᴄᴀᴛᴇɢᴏʀʏ]彡★";
