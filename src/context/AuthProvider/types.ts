export interface IUser {
   email?: string;
   token?: string;
   password?: string;
}

export interface IContext extends IUser {
   authenticate: ({ email, password }: IUser) => Promise<void>;
   logout: () => void;
}

export interface IAuhtProvider {
   children: JSX.Element;
}