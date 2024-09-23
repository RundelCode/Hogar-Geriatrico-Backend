import connection from "../DB/connection.js";


export const getAllEmployees = (req, res) => {
    const query = "SELECT * FROM `Empleados` WHERE 1;";

    connection.query(query, (err, results) => {
        if (err) {
            console.error(`Error getting employees: ${err}.`)
        }
        else {
            res.send(results);
        }
    })
}

export const getEmployeeByID = (req, res) => {
    const { ID } = req.params;
    const query = "Select * FROM Empleados where ID = ?"
    const values = [ID];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error getting the employee: ${err}`)
        }
        else {
            res.send(results)
        }
    })
}

export const registerNewEmployee = (req, res) => {
    const {
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
        Cargo,
        TipoDeCargo,
        Pago,
        TipoDeHorario,
        FechaDeIngreso,
    } = req.body;

    const query = `
        INSERT INTO Empleados 
        (NombreCompleto, Identificacion, Telefono, Direccion, Cargo, TipoDeCargo, Pago, TipoDeHorario, FechaDeIngreso)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
        Cargo,
        TipoDeCargo,
        Pago,
        TipoDeHorario,
        FechaDeIngreso,
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new employees: ${err}.`);
            res.status(500).send('Error inserting new employees.');
        } else {
            res.status(200).send('New employees registered successfully.');
        }
    });
};

export const editEmployeeData = (req, res) => {
    const {
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
        Cargo,
        TipoDeCargo,
        Pago,
        TipoDeHorario,
    } = req.body;
    const { ID } = req.params;
    const query = `
        UPDATE \`Empleados\`
        SET 
            \`NombreCompleto\` = ?,
            \`Identificacion\` = ?,
            \`Telefono\` = ?,
            \`Direccion\` = ?,
            \`Cargo\` = ?,
            \`TipoDeCargo\` = ?,
            \`Pago\` = ?,
            \`TipoDeHorario\` = ?
        WHERE \`ID\` = ?;
    `;
    const values = [
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
        Cargo,
        TipoDeCargo,
        Pago,
        TipoDeHorario,
        ID
    ];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error updating employees: ${err}.`);
            res.status(500).send('Error updating employees.');
        } else if (results.affectedRows === 0) {
            res.status(404).send('employees not found or no changes made.');
        } else {
            res.status(200).send('employees data updated successfully.');
        }
    });
};

export const deleteEmployee = (req, res) => {
    const { ID } = req.params;
    const query = "DELETE FROM `Empleados` WHERE ID = ?";
    const values = [ID];
    console.log("Values:", values);
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error deleting employees: ${err}`);
            res.status(500).send('Error deleting employees.');
        } else {
            res.send(results);
        }
    });
}