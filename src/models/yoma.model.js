module.exports = (sequelize, Sequelize) => {
    const Yoma = sequelize.defie("yoma", {
        title: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          published: {
            type: Sequelize.BOOLEAN
          }
        
    });
    return Yoma;
};