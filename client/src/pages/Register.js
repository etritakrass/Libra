import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [role, setRole] = useState('user'); 
    const [formData, setFormData] = useState({});
    const [files, setFiles] = useState({});

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const handleFileChange = (e) => {
        setFiles({ ...files, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        data.append('role', role);
        
        // Shto skedarët
        Object.keys(files).forEach(key => {
            if (files[key]) {
                data.append(key, files[key]);
            }
        });

        try {
          
            await axios.post('http://localhost:5000/api/auth/register', data);
            alert("Regjistrimi u krye! Prisni verifikimin nga administratori.");
        } catch (err) {
            alert("Gabim gjatë regjistrimit. Kontrolloni serverin.");
            console.error(err);
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Krijo Llogari</h2>
                <p className="subtitle">Plotësoni të dhënat për t'u regjistruar në Libra</p>
                
                <div className="role-selector">
                    <button 
                        type="button" 
                        className={role === 'user' ? 'active' : ''} 
                        onClick={() => setRole('user')}
                    >
                        Qytetar
                    </button>
                    <button 
                        type="button" 
                        className={role === 'notary' ? 'active' : ''} 
                        onClick={() => setRole('notary')}
                    >
                        Noter
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="scrollable-form">
                    <label>Emri</label>
                    <input name="firstName" placeholder="Emri" onChange={handleChange} required />
                    
                    <label>Mbiemri</label>
                    <input name="lastName" placeholder="Mbiemri" onChange={handleChange} required />
                    
                    <label>Email</label>
                    <input name="email" type="email" placeholder="email@shembull.com" onChange={handleChange} required />
                    
                    <label>Fjalëkalimi</label>
                    <input name="password" type="password" placeholder="********" onChange={handleChange} required />

                    <div className="file-section">
                        <label>Foto e ID / Pashaportës</label>
                        <input type="file" name="idImage" onChange={handleFileChange} required />

                        <label>Foto Selfie (Për verifikim)</label>
                        <input type="file" name="selfie" onChange={handleFileChange} required />
                    </div>

                    {role === 'notary' && (
                        <div className="notary-extra-fields">
                            <label>Adresa e Zyrës</label>
                            <input name="address" placeholder="Rruga, Qyteti" onChange={handleChange} required />
                            
                            <label>Nr. i Licencës</label>
                            <input name="licenseNumber" placeholder="L-12345" onChange={handleChange} required />

                            <label>Diploma (PDF/Foto)</label>
                            <input type="file" name="diploma" onChange={handleFileChange} required />
                        </div>
                    )}

                    <button type="submit" className="btn-submit">Regjistrohu</button>
                </form>
            </div>
        </div>
    );
};

export default Register;