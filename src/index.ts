#!/usr/bin/env node
import {buildWall} from "./wall"

const rows = parseInt(process.argv[2]);
const bricks = parseInt(process.argv[3]);

console.log(buildWall(rows, bricks));
