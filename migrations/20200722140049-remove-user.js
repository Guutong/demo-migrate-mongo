module.exports = {
  async up(db) {
      await db.collection('users').deleteMany({ name: /Sam/ })
  },

  async down(db) {
    await Promise.resolve('ok')
  }
}