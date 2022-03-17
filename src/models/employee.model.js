module.exports = (sequelize, Sequelize) => {
    const tejas_111915049_details = sequelize.define("tejas_111915049_details", {
        employee_id_number: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            field: 'employee_id_number'
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_lame: {
            type: Sequelize.STRING
        },
        date_of_birth: {
            type: Sequelize.DATE
        },
        contact_number: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    return tejas_111915049_details;
};