export type TypeString = string
export  type TypeObject = object


export type ButtonCommonProp = {
    path : string
}

export type UserDashBoardProps = {
    user: UserDashBoard;
}

export type UserDashBoard = {
    avatar: string;
    name: string;
}

export type UserLogin = {
    email: string;
    password: string;
}
