function createUsersController() {
  return {
    delete() {
      return new Promise((resolve) => {
        resolve({ data: 'From the delete' });
      });
    },
    get() {
      return new Promise((resolve) => {
        resolve({ data: 'From the get' });
      });
    },
    patch() {
      return new Promise((resolve) => {
        resolve({ data: 'From the patch' });
      });
    },
    put() {
      return new Promise((resolve) => {
        resolve({ data: 'From the put' });
      });
    },
    post() {
      return new Promise((resolve) => {
        resolve({ data: 'From the post' });
      });
    },
  };
}

export default createUsersController;
