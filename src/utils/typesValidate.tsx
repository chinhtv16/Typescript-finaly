
export type DataInputValidateRegister = {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export type DataInputValidateLogin = {
    emailInput: string
    passwordInput: string
}

export type UserValidateLogin = {
    email: string
    password: string
}

export type StatusSuccessApi = number

export type StatusErrorApi = {
    response : {
        status : number
    }
}