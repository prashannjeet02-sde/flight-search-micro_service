class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const newData = await this.model.create(data);
    return newData;
  }

  async getAll() {
    const allData = await this.model.findAll();
    return allData;
  }

  async getDataById(dataId) {
    const getById = await this.model.findByPk(dataId);
    return getById;
  }

  async deleteData(dataId) {
    const remove = await this.model.destroy({
      where: {
        id: dataId,
      },
    });
    return remove;
  }

  async updateData(dataId, data) {
    const update = await this.model.update(data, {
      where: {
        id: dataId,
      },
    });
    return update;
  }
}

module.exports = CrudRepository;
