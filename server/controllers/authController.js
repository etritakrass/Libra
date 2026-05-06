const sql = require("mssql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🔐 REGISTER (user / notary + documents)
exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      address,
      bankAccount,
      bankName
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // multer files
    const idImagePath = req.files?.idImage?.[0]?.path || null;
    const selfiePath = req.files?.selfie?.[0]?.path || null;

    const pool = await sql.connect();

    // 1. create user
    const result = await pool.request()
      .input("firstName", sql.NVarChar, firstName)
      .input("lastName", sql.NVarChar, lastName)
      .input("email", sql.NVarChar, email)
      .input("passwordHash", sql.NVarChar, hashedPassword)
      .input("role", sql.NVarChar, role)
      .query(`
        INSERT INTO Users (firstName, lastName, email, passwordHash, role, isVerified)
        OUTPUT INSERTED.id
        VALUES (@firstName, @lastName, @email, @passwordHash, @role, 0)
      `);

    const userId = result.recordset[0].id;

    // 2. save documents
    if (idImagePath) {
      await pool.request()
        .input("userId", sql.Int, userId)
        .input("type", sql.NVarChar, "id")
        .input("path", sql.NVarChar, idImagePath)
        .query(`
          INSERT INTO UserDocuments (userId, documentType, filePath)
          VALUES (@userId, @type, @path)
        `);
    }

    if (selfiePath) {
      await pool.request()
        .input("userId", sql.Int, userId)
        .input("type", sql.NVarChar, "selfie")
        .input("path", sql.NVarChar, selfiePath)
        .query(`
          INSERT INTO UserDocuments (userId, documentType, filePath)
          VALUES (@userId, @type, @path)
        `);
    }

    // 3. notary extra details
    if (role === "notary") {
      await pool.request()
        .input("userId", sql.Int, userId)
        .input("address", sql.NVarChar, address)
        .input("bankAccount", sql.NVarChar, bankAccount)
        .input("bankName", sql.NVarChar, bankName)
        .query(`
          INSERT INTO NotaryDetails (userId, officeAddress, bankAccount, bankName)
          VALUES (@userId, @address, @bankAccount, @bankName)
        `);
    }

    res.status(201).json({
      message: "Registration successful. Waiting for admin approval."
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔐 LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const pool = await sql.connect();

    const result = await pool.request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM Users WHERE email = @email");

    const user = result.recordset[0];

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);

    if (!valid) {
      return res.status(400).json({ message: "Wrong password" });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: "Account not verified yet" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({ token, user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🟡 ADMIN → GET all unverified users
exports.getPendingUsers = async (req, res) => {
  try {
    const pool = await sql.connect();

    const result = await pool.request().query(`
      SELECT id, firstName, lastName, email, role
      FROM Users
      WHERE isVerified = 0
    `);

    res.json(result.recordset);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ ADMIN → VERIFY USER
exports.verifyUser = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await sql.connect();

    await pool.request()
      .input("id", sql.Int, id)
      .query(`
        UPDATE Users
        SET isVerified = 1
        WHERE id = @id
      `);

    res.json({ message: "User verified successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ❌ ADMIN → DELETE USER (optional)
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await sql.connect();

    await pool.request()
      .input("id", sql.Int, id)
      .query("DELETE FROM Users WHERE id = @id");

    res.json({ message: "User deleted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};const sql = require("mssql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🔐 REGISTER (user / notary + documents)
exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      address,
      bankAccount,
      bankName
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    // multer files
    const idImagePath = req.files?.idImage?.[0]?.path || null;
    const selfiePath = req.files?.selfie?.[0]?.path || null;

    const pool = await sql.connect();

    // 1. create user
    const result = await pool.request()
      .input("firstName", sql.NVarChar, firstName)
      .input("lastName", sql.NVarChar, lastName)
      .input("email", sql.NVarChar, email)
      .input("passwordHash", sql.NVarChar, hashedPassword)
      .input("role", sql.NVarChar, role)
      .query(`
        INSERT INTO Users (firstName, lastName, email, passwordHash, role, isVerified)
        OUTPUT INSERTED.id
        VALUES (@firstName, @lastName, @email, @passwordHash, @role, 0)
      `);

    const userId = result.recordset[0].id;

    // 2. save documents
    if (idImagePath) {
      await pool.request()
        .input("userId", sql.Int, userId)
        .input("type", sql.NVarChar, "id")
        .input("path", sql.NVarChar, idImagePath)
        .query(`
          INSERT INTO UserDocuments (userId, documentType, filePath)
          VALUES (@userId, @type, @path)
        `);
    }

    if (selfiePath) {
      await pool.request()
        .input("userId", sql.Int, userId)
        .input("type", sql.NVarChar, "selfie")
        .input("path", sql.NVarChar, selfiePath)
        .query(`
          INSERT INTO UserDocuments (userId, documentType, filePath)
          VALUES (@userId, @type, @path)
        `);
    }

    // 3. notary extra details
    if (role === "notary") {
      await pool.request()
        .input("userId", sql.Int, userId)
        .input("address", sql.NVarChar, address)
        .input("bankAccount", sql.NVarChar, bankAccount)
        .input("bankName", sql.NVarChar, bankName)
        .query(`
          INSERT INTO NotaryDetails (userId, officeAddress, bankAccount, bankName)
          VALUES (@userId, @address, @bankAccount, @bankName)
        `);
    }

    res.status(201).json({
      message: "Registration successful. Waiting for admin approval."
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔐 LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const pool = await sql.connect();

    const result = await pool.request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM Users WHERE email = @email");

    const user = result.recordset[0];

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);

    if (!valid) {
      return res.status(400).json({ message: "Wrong password" });
    }

    if (!user.isVerified) {
      return res.status(403).json({ message: "Account not verified yet" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({ token, user });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// 🟡 ADMIN → GET all unverified users
exports.getPendingUsers = async (req, res) => {
  try {
    const pool = await sql.connect();

    const result = await pool.request().query(`
      SELECT id, firstName, lastName, email, role
      FROM Users
      WHERE isVerified = 0
    `);

    res.json(result.recordset);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ✅ ADMIN → VERIFY USER
exports.verifyUser = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await sql.connect();

    await pool.request()
      .input("id", sql.Int, id)
      .query(`
        UPDATE Users
        SET isVerified = 1
        WHERE id = @id
      `);

    res.json({ message: "User verified successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// ❌ ADMIN → DELETE USER (optional)
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const pool = await sql.connect();

    await pool.request()
      .input("id", sql.Int, id)
      .query("DELETE FROM Users WHERE id = @id");

    res.json({ message: "User deleted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};