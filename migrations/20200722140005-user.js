module.exports = {
  async up(db, client) {
    await db.collection('users').updateMany({}, { $rename: { name: "fullName" } })

  },

  async down(db, client) {
    await db.collection('users').updateMany({}, { $rename: { fullName: "name" } })
  }
};