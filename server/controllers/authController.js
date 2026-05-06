const sql = require('mssql');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role, ...details } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
     
        const userResult = await sql.query`
            INSERT INTO Users (firstName, lastName, email, passwordHash, role, isVerified)
            OUTPUT INSERTED.id
            VALUES (${firstName}, ${lastName}, ${email}, ${hashedPassword}, ${role}, 0)`;
        
        const userId = userResult.recordset[0].id;

        
        
        if (role === 'notary') {
            await sql.query`
                INSERT INTO NotaryDetails (userId, officeAddress, workPhone, licenseNumber)
                VALUES (${userId}, ${details.address}, ${details.workPhone}, ${details.licenseNumber})`;
        }

        res.status(201).json({ message: "Registration successful. Waiting for admin approval." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.register = async (req, res) => {
    const { firstName, lastName, email, role } = req.body;
    
    // Merr rrugën e skedarit nga Multer
    const idImagePath = req.files['idImage'] ? req.files['idImage'][0].path : null;
    const selfiePath = req.files['selfie'] ? req.files['selfie'][0].path : null;

    try {
        // 1. Ruaj përdoruesin
        const pool = await sql.connect(config);
        const userInsert = await pool.request()
            .input('firstName', sql.NVarChar, firstName)
            .input('email', sql.NVarChar, email)
            .query('INSERT INTO Users ... OUTPUT INSERTED.id VALUES ...');

        const userId = userInsert.recordset[0].id;

        // 2. Ruaj rrugët e dokumenteve në tabelën UserDocuments
        await pool.request()
            .input('userId', sql.Int, userId)
            .input('type', sql.NVarChar, 'ID_CARD')
            .input('path', sql.NVarChar, idImagePath)
            .query('INSERT INTO UserDocuments (userId, documentType, filePath) VALUES (@userId, @type, @path)');

        res.status(201).send("U regjistrua me sukses!");
    } catch (err) {
        res.status(500).send(err.message);
    }
};