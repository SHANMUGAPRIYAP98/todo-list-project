import { IUserResponse } from "../model/user_response.model";
import { supabaseConn } from "../supabase-db/supbaseClient";


const loginUser = async (email: string, password: string) => {
    const { data, error } = await supabaseConn.auth.signInWithPassword({ email, password });
    if (error) {
        console.log('user failed to login', error.message);
        return { success: false, error: 'user login failed' }
    }

    return { success: true , user: data.user, session: data.session}
}

export default loginUser;