module.exports = (sequelize, Sequelize) => {
    const tejas_111915049_salary = sequelize.define("tejas_111915049_salary", {
        employee_id_number: {
            type: Sequelize.INTEGER,
            field: 'employee_id_number'
        },
        job_role: {
            type: Sequelize.STRING
        },
        monthly_salary: {
            type: Sequelize.STRING
        },
        yearly_bonus: {
            type: Sequelize.STRING
        },
    });
    return tejas_111915049_salary;
};