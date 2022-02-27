module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('bands', {
    band_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
        },
    genre: {
        type: Sequelize.TEXT,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    available_start_time: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    end_time: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    stage_id: {
        type: Sequelize.TEXT,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true  
    },
    stage_events_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    set_time_id: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    meet_greet_id: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    }
      })
},
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('bands')
      }
}