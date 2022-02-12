class UserRepo implements Database{
    load: (key: string) => Promise<void>;
    save: (key: string, data: void) => Promise<void>;
    edit: (key: string, data: void) => Promise<void>;
    delete: (key: string, data: void) => Promise<void>;
}

class Connection implements Pool {
    connection: (key: string) => void;
}
//https://sequelize.org/master/manual/connection-pool.html
