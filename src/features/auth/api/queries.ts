import { useMutation } from "react-query";
import API from "./api";

const queries={
    Signup:()=>useMutation(API.signup),
    Login:()=>useMutation(API.login),
    ResetPassword:()=>useMutation(API.resetPassword),
}
export default queries