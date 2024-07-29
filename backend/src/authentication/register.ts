import { IUserResponse } from "../model/user_response.model";
import { supabaseConn } from "../supabase-db/supbaseClient";


const registerUser = async (email: string, password: string): Promise<IUserResponse> => {
    const { data, error } = await supabaseConn.auth.signUp({ email, password });
    if (error) {
        console.log('user failed to register', error.message);
        return { success: false, error: 'user registration failed' }
    }

    return { success: true }
}

export default registerUser;