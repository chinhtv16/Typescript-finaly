
export type DataInputValidateLogin = {
    emailInput: string
    passwordInput: string
}

export type UserValidateLogin = {
    email: string
    password: string
}

export type StatusErrorApi = {
    response : {
        status : number
    }
}