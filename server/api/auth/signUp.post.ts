// @ts-ignore
import {readBody} from "h3";

export default defineEventHandler(async (event: any) => {
    const {data} = readBody(event);
    console.log("数据内容", data);
});