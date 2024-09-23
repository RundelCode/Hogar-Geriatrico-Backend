import connection from "../DB/connection.js";


export const getAllBalances = (req, res) => {
    const query = "SELECT * FROM `Balance` WHERE 1;";

    connection.query(query, (err, results) => {
        if (err) {
            console.error(`Error getting balances: ${err}.`)
        }
        else {
            res.send(results);
        }
    })
}

export const getBalanceById = (req, res) => {
    const { ID } = req.params;
    const query = "Select * FROM Balance where ID = ?"
    const values = [ID];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error getting the balance: ${err}`)
        }
        else {
            res.send(results)
        }
    })
}

export const registerNewBalance = (req, res) => {
    const {
        Año,
        Mes,
    } = req.body;

    const query = `
        INSERT INTO Balance 
        (Año, Mes)
        VALUES (?, ?);
    `;

    const values = [
        Año,
        Mes
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new balance: ${err}.`);
            res.status(500).send('Error inserting new balance.');
        } else {
            res.status(200).send('New balance registered successfully.');
        }
    });
};

export const getAllIncomes = (req, res) => {
    const query = "SELECT * FROM `Ingresos` WHERE 1;";

    connection.query(query, (err, results) => {
        if (err) {
            console.error(`Error getting incomes: ${err}.`)
        }
        else {
            res.send(results);
        }
    })
}

export const getIncomesById = (req, res) => {
    const { ID } = req.params;
    const query = "Select * FROM Ingresos where ID = ?"
    const values = [ID];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error getting the incomes: ${err}`)
        }
        else {
            res.send(results)
        }
    })
}

export const getIncomeByBalanceId = (req, res) => {
    const { ID } = req.params;
    const query = "Select * FROM Ingresos where IDBalance = ?"
    const values = [ID];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error getting the incomes: ${err}`)
        }
        else {
            res.send(results)
        }
    })
}

export const registerNewIncome = (req, res) => {
    const {
        Nombre,
        Valor,
        IDBalance
    } = req.body;

    const query = `
        INSERT INTO Ingresos 
        (Nombre, Valor, IDBalance)
        VALUES (?, ?, ?);
    `;

    const values = [
        Nombre,
        Valor,
        IDBalance
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new income: ${err}.`);
            res.status(500).send('Error inserting new income.');
        } else {
            res.status(200).send('New income registered successfully.');
        }
    });
};

export const editIncomeData = (req, res) => {
    const {
        Nombre,
        Valor
    } = req.body;
    const { ID } = req.params;
    const query = `
        UPDATE \`Ingresos\`
        SET 
            \`Nombre\` = ?,
            \`Valor\` = ?
        WHERE \`ID\` = ?;
    `;
    const values = [
        Nombre,
        Valor,
        ID
    ];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error updating income: ${err}.`);
            res.status(500).send('Error updating income.');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Income not found or no changes made.');
        } else {
            res.status(200).send('Income data updated successfully.');
        }
    });
};


export const deleteIncome = (req, res) => {
    const { ID } = req.params;
    const query = "DELETE FROM `Ingresos` WHERE ID = ?";
    const values = [ID];
    console.log("Values:", values);
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error deleting income: ${err}`);
            res.status(500).send('Error deleting income.');
        } else {
            res.send(results);
        }
    });
}


export const getAllExpenses = (req, res) => {
    const query = "SELECT * FROM `Ingresos` WHERE 1;";

    connection.query(query, (err, results) => {
        if (err) {
            console.error(`Error getting expense: ${err}.`)
        }
        else {
            res.send(results);
        }
    })
}

export const getExpenseById = (req, res) => {
    const { ID } = req.params;
    const query = "Select * FROM Ingresos where ID = ?"
    const values = [ID];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error getting the expense: ${err}`)
        }
        else {
            res.send(results)
        }
    })
}

export const getExpenseByBalanceId = (req, res) => {
    const { ID } = req.params;
    const query = "Select * FROM Gastos where IDBalance = ?"
    const values = [ID];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error getting the expenses: ${err}`)
        }
        else {
            res.send(results)
        }
    })
}

export const registerNewExpense = (req, res) => {
    const {
        Nombre,
        Valor,
        IDBalance
    } = req.body;

    const query = `
        INSERT INTO Gastos 
        (Nombre, Valor, IDBalance)
        VALUES (?, ?, ?);
    `;

    const values = [
        Nombre,
        Valor,
        IDBalance
    ];

    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error inserting new expense: ${err}.`);
            res.status(500).send('Error inserting new expense.');
        } else {
            res.status(200).send('New expense registered successfully.');
        }
    });
};

export const editExpenseData = (req, res) => {
    const {
        Nombre,
        Valor,
        IDBalance
    } = req.body;
    const { ID } = req.params;
    const query = `
        UPDATE \`Gastos\`
        SET 
            \`Nombre\` = ?,
            \`Valor\` = ?,
            \`IDBalance\` = ?,
        WHERE \`ID\` = ?;
    `;
    const values = [
        Nombre,
        Valor,
        IDBalance,
        ID
    ];
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error updating expense: ${err}.`);
            res.status(500).send('Error updating expense.');
        } else if (results.affectedRows === 0) {
            res.status(404).send('Expense not found or no changes made.');
        } else {
            res.status(200).send('Expense data updated successfully.');
        }
    });
};

export const deleteExpense = (req, res) => {
    const { ID } = req.params;
    const query = "DELETE FROM `Gastos` WHERE ID = ?";
    const values = [ID];
    console.log("Values:", values);
    connection.query(query, values, (err, results) => {
        if (err) {
            console.error(`Error deleting expense: ${err}`);
            res.status(500).send('Error deleting expense.');
        } else {
            res.send(results);
        }
    });
}