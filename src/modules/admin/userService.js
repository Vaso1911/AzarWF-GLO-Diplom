export class UserService  {
  async fetchData(url, options) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error('Произошла ошибка при запросе к серверу.');
      }
      return res.json();
    } catch (error) {
      console.error(error);
      throw new Error('Произошла ошибка, данных нет!');
    }
  }

  async getUsers() {
    return await this.fetchData('http://localhost:1001/users');
  }

  async getWorks() {
    return await this.fetchData('http://localhost:1001/works');
  }

  async addWork(work) {
    return await this.fetchData('http://localhost:1001/works', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(work),
    });
  }

  async removeWork(id) {
    return await this.fetchData(`http://localhost:1001/works/${id}`, {
      method: 'DELETE',
    });
  }


  async editWork(id, work) {
    return await this.fetchData(`http://localhost:1001/works/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(work),
    });
  }

  async getSortWorks(sortOption) {
    return await this.fetchData(`http://localhost:1001/works?_sort=${sortOption.id}&_order=${sortOption.value}`);
  }

  async getSearchWorks(str) {
    return await this.fetchData(`http://localhost:1001/works?name_like=${str}`);
  }
}