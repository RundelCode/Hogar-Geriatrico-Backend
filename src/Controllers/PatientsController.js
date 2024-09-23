import connection from "../DB/connection.js";



export const getAllPatients = (req, res) => {
    const query = "SELECT * FROM `Pacientes` WHERE 1;";

    connection.query(query, (err, results) => {
        if (err) {
            console.error(`Error getting patients: ${err}.`)
        }
        else {
            res.send(results);
        }
    })
}

export const getPatientById = (req, res)=>{
    const {ID} = req.params;
    const query = "Select * FROM Pacientes where ID = ?"
    const values = [ID];

    connection.query(query, values, (err, results)=>{
        if(err){
            console.error(`Error getting the patient: ${err}`)
        }
        else{
            res.send(results)
        }
    })
}

export const registerNewPatient = (req, res) => {
    const {
        NombreCompleto,
        Identificacion,
        PagoMensual,
        FechaDeNacimiento,
        Telefono,
        Direccion,
        Diagnostico,
        IDResponsable,
        EPS,
        NumDeHabitacion
    } = req.body;

    const query = `
        INSERT INTO Pacientes 
        (NombreCompleto, Identificacion, PagoMensual, FechaDeNacimiento, Telefono, Direccion, Diagnostico, IDResponsable, EPS, NumDeHabitacion) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
        NombreCompleto,
        Identificacion,
        PagoMensual,
        FechaDeNacimiento,
        Telefono,
        Direccion,
        Diagnostico,
        IDResponsable,
        EPS,
        NumDeHabitacion
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new patient: ${err}.`);
            res.status(500).send('Error inserting new patient.');
        } else {
            res.status(200).send('New patient registered successfully.');
        }
    });
};

export const editPatientData = (req, res) => {
    const {
        NombreCompleto,
        Identificacion,
        PagoMensual,
        FechaDeNacimiento,
        FechaDeRegistro,
        Telefono,
        Direccion,
        Diagnostico,
        IDResponsable,
        EPS,
        NumDeHabitacion
    } = req.body;
    const { ID } = req.params;
    const query = `
        UPDATE \`Pacientes\`
        SET 
            \`NombreCompleto\` = ?,
            \`Identificacion\` = ?,
            \`PagoMensual\` = ?,
            \`FechaDeNacimiento\` = ?,
            \`FechaDeRegistro\` = ?,
            \`Telefono\` = ?,
            \`Direccion\` = ?,
            \`Diagnostico\` = ?,
            \`IDResponsable\` = ?,
            \`EPS\` = ?,
            \`NumDeHabitacion\` = ?
        WHERE \`ID\` = ?;
    `;
    const values = [
        NombreCompleto,
        Identificacion,
        PagoMensual,
        FechaDeNacimiento,
        FechaDeRegistro,
        Telefono,
        Direccion,
        Diagnostico,
        IDResponsable,
        EPS,
        NumDeHabitacion,
        ID
    ];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error updating patient: ${err}.`);
            res.status(500).send('Error updating patient.');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Patient not found or no changes made.');
        } else {
            res.status(200).send('Patient data updated successfully.');
        }
    });
};

export const deletePatient = (req, res) => {
    const { ID } = req.params;
    const query = "DELETE FROM `Pacientes` WHERE ID = ?";
    const values = [ID];
    console.log("Values:", values);
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error getting patient: ${err}`);
            res.status(500).send('Error getting patient.');
        } else {
            res.send(results);
        }
    });
}


export const getAllLiables = (req, res)=>{
    const query = "Select * FROM Responsables where 1"

    connection.query(query, (err, results)=>{
        if(err){
            console.error(`Error getting the liables: ${err}`)
        }
        else{
            res.send(results)
        }
    })
}

export const getLiableById = (req, res)=>{
    const {ID} = req.params;
    const query = "Select * FROM Responsables where ID = ?"
    const values = [ID];

    connection.query(query, values, (err, results)=>{
        if(err){
            console.error(`Error getting the liable: ${err}`)
        }
        else{
            res.send(results)
        }
    })
}

export const registerNewLiable = (req, res) => {
    const {
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
    } = req.body;

    const query = `
        INSERT INTO Responsables
        (NombreCompleto, Identificacion, Telefono, Direccion) 
        VALUES (?, ?, ?, ?);
    `;

    const values = [
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new liable: ${err}.`);
            res.status(500).send('Error inserting new liable.');
        } else {
            res.status(200).send('New Liable registered successfully.');
        }
    });
};

export const editLiableData = (req, res) => {
    const {
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
    } = req.body;
    const { ID } = req.params;
    const query = "UPDATE Responsables SET NombreCompleto = ?, Identificacion = ?, Telefono = ?, Direccion = ? WHERE ID = ?;";
    const values = [
        NombreCompleto,
        Identificacion,
        Telefono,
        Direccion,
        ID
    ];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error updating liable: ${ err }.`);
            res.status(500).send('Error updating liable.');
        } else {
            res.status(200).send('Liable data updated succesfully.');
        }
    });
};

export const deleteLiable = (req, res) => {
    const { ID } = req.params;
    const query = "DELETE FROM `Responsables` WHERE ID = ?";
    const values = [ID];
    console.log("Values:", values);
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error deleting liable: ${err}`);
            res.status(500).send('Error deleting the liable.');
        } else {
            res.send(results);
        }
    });
}

export const getAllRooms = (req, res)=>{
    const query = "Select * FROM Habitaciones where 1"

    connection.query(query, (err, results)=>{
        if(err){
            console.error(`Error getting the Rooms: ${err}`)
        }
        else{
            res.send(results)
        }
    })
}

export const getRoomByNumber = (req, res)=>{
    const {Number} = req.params;
    const query = "Select * FROM Habitaciones where NumDeHabitacion = ?"
    const values = [Number];

    connection.query(query, values, (err, results)=>{
        if(err){
            console.error(`Error getting the Room: ${err}`)
        }
        else{
            res.send(results)
        }
    })
}

export const registerNewRoom = (req, res) => {
    const {
        NumDeHabitacion,
        CapacidadActual,
        CapacidadTotal,
        TipoDeHabitacion,
    } = req.body;

    const query = `
        INSERT INTO Responsables
        (NumDeHabitacion, CapacidadActual, CapacidadTotal, TipoDeHabitacion) 
        VALUES (?, ?, ?, ?);
    `;

    const values = [
        NumDeHabitacion,
        CapacidadActual,
        CapacidadTotal,
        TipoDeHabitacion,
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new Room: ${err}.`);
            res.status(500).send('Error inserting new Room.');
        } else {
            res.status(200).send('New Room registered successfully.');
        }
    });
};

export const editRoomData = (req, res) => {
    const {
        NumDeHabitacion,
        CapacidadActual,
        CapacidadTotal,
        TipoDeHabitacion,
    } = req.body;
    const { ID } = req.params;
    const query = "UPDATE Habitaciones SET CapacidadActual = ?, CapacidadTotal = ?, TipoDeHabitacion = ? WHERE NumDeHabitacion = ?;";
    const values = [
        CapacidadActual,
        CapacidadTotal,
        TipoDeHabitacion,
        NumDeHabitacion
    ];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error updating Room: ${ err }.`);
            res.status(500).send('Error updating Room.');
        } else {
            res.status(200).send('Room data updated succesfully.');
        }
    });
};

export const deleteRoom = (req, res) => {
    const { ID } = req.params;
    const query = "DELETE FROM `Habitaciones` WHERE NumDeHabitacion = ?";
    const values = [ID];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error deleting room: ${err}`);
            res.status(500).send('Error deleting room.');
        } else {
            res.send(results);
        }
    });
}


export const getAllTreatments = (req, res)=>{
    const query = "Select * FROM Tratamientos where 1"

    connection.query(query, (err, results)=>{
        if(err){
            console.error(`Error getting the Rooms: ${err}`)
        }
        else{
            res.send(results)
        }
    })
}

export const getTratmentByPatientId = (req, res)=>{
    const {patientID} = req.params;
    const query = "Select * FROM Tratamientos where IDPaciente = ?"
    const values = [patientID];

    connection.query(query, values, (err, results)=>{
        if(err){
            console.error(`Error getting the Room: ${err}`)
        }
        else{
            res.send(results)
        }
    })
}

export const registerNewTreatment = (req, res) => {
    const {
        Nombre,
        ClaseDeTratamiento,
        Descripcion,
        IDPaciente,
    } = req.body;

    const query = `
        INSERT INTO Tratamientos
        (Nombre, ClaseDeTratamiento, Descripcion, IDPaciente)
        VALUES (?, ?, ?, ?);
    `;

    const values = [
        Nombre,
        ClaseDeTratamiento,
        Descripcion,
        IDPaciente,
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new Treatment: ${err}.`);
            res.status(500).send('Error inserting new Treatment.');
        } else {
            res.status(200).send('New Treatment registered successfully.');
        }
    });
};

export const editTreatmentData = (req, res) => {
    const {
        Nombre,
        ClaseDeTratamiento,
        Descripcion,
    } = req.body;
    const { ID } = req.params;
    const query = "UPDATE Tratamientos SET Nombre = ?, ClaseDeTratamiento = ?, Descripcion = ? WHERE ID = ?;";
    const values = [
        Nombre,
        ClaseDeTratamiento,
        Descripcion,
        ID,
    ];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error updating Treatment: ${ err }.`);
            res.status(500).send('Error updating Treatment.');
        } else {
            res.status(200).send('Treatment data updated succesfully.');
        }
    });
};

export const deleteTreatment = (req, res) => {
    const { ID } = req.params;
    const query = "DELETE FROM `Tratamientos` WHERE ID = ?";
    const values = [ID];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error deleting Treatment: ${err}`);
            res.status(500).send('Error deleting Treatment.');
        } else {
            res.send(results);
        }
    });
}

