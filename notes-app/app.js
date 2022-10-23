import yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import chalk from "chalk";

import getNotes from "./notes.js";


yargs(hideBin(process.argv)).command(
    'add',
    'Add Note',
    {
        title:{
            description:"note title"
        }

    },
    (argv)=>{
        console.log("Add Note",argv)
    }
).demandCommand(1).parse();


yargs(hideBin(process.argv)).command(
    'remove',
    'Remove Note',
    ()=>{
        console.log("Remove Note")
    }
).demandCommand(1).parse();

yargs(hideBin(process.argv)).command(
    'list',
    'List Note',
    ()=>{
        console.log("List Note")
    }
).demandCommand(1).parse();

yargs(hideBin(process.argv)).command(
    'read',
    'Read Note',
    ()=>{
        console.log("Read Note")
    }
).demandCommand(1).parse();

