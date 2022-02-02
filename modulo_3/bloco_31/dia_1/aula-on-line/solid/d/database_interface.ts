interface Database {
    load: (key: string) => Promise<void>,
    save: (key: string, data: void) => Promise<void>,
    edit:(key: string, data: void) => Promise<void>,
    delete: (key: string) => Promise<void>,
  }

interface Pool {
  connection: (key: string) => void
}

  