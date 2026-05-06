const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Sigurohu që ky folder ekziston
    },
    filename: (req, file, cb) => {
       
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/register', upload.fields([
    { name: 'idImage', maxCount: 1 },
    { name: 'selfie', maxCount: 1 },
    { name: 'diploma', maxCount: 1 },
    { name: 'license', maxCount: 1 }
]), authController.register);