// Employee_ID_Number, First_Name, Last_Name, Date_of_Birth, Contact_Number 
module.exports = (sequelize, Sequelize) => {
  const Tejas_111915049_details = sequelize.define("Tejas_111915049_details", {
    employee_id_number: {
      type: Sequelize.STRING
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
  });
  return Tejas_111915049_details;
};