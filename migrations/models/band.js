Band.init({
    band_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
        },
    genre: {
        type: DataTypes.TEXT,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    event: {
        type: DataTypes.INTEGER,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    stage: {
        type: DataTypes.TEXT,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
        
    },
    stage_event: {
        type: DataTypes.INTEGER,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    set_time: {
        type: DataTypes.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    },
    meet_greet: {
        type: DataTypes.DATE,
        allowNull: false,
        timestamps: false,
        primaryKey: true,
        autoIncrement: true
    }

  }, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
  })