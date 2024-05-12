// @ts-ignore
import {defineEventHandler, H3Event, readBody} from "h3";
import {serverSupabaseClient} from "#supabase/server";

export default defineEventHandler(async (event: H3Event) => {
    const {account, password} = await readBody(event);
    const supabase = await serverSupabaseClient(event);
    const {data, error} = await supabase.auth.signInWithOtp({
        email: account
    })
    if (error) {
        console.log("错误: ", error);
        return;
    }
    console.log("data: ", data);
});