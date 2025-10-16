# Struktur folder
├── hospital-system/               # The root directory of your project
│
├── .gitignore                     # Files/folders Git should ignore (e.g., node_modules, .env)
├── README.md                      # Project description, setup instructions, features list
├── requirements.txt or package.json # List of dependencies (libraries/frameworks)
│
├── docs/                          # **Project Documentation & Deliverables**
│   ├── system_design.pdf          # Your final report or paper
│   ├── wireframes/                # Design sketches (dashboard, login, patient view)
│   └── user_stories.txt           # List of features from the user's perspective
│
├── server/                        # **BACK-END: Application Logic & Routes**
│   ├── controllers/               # Handles incoming requests and sends responses (the "what to do")
│   │   ├── authController.js      # Functions for login/logout
│   │   ├── patientController.js   # Functions for viewing, creating, updating patient data
│   │   └── staffController.js     # Functions for managing doctor/nurse profiles
│   │
│   ├── models/                    # Defines the structure of your data (the "objects" in the database)
│   │   ├── Patient.js             # Patient data model (name, DOB, medical history)
│   │   ├── User.js                # User/Staff model (username, password hash, role: 'Doctor' or 'Nurse')
│   │   └── Vitals.js              # Model for a single set of vital signs (temp, pressure, date)
│   │
│   ├── routes/                    # Defines the URL paths for your application
│   │   ├── api.js                 # API routes for data (e.g., POST /api/patients, GET /api/vitals/:id)
│   │   └── web.js                 # Routes for serving HTML pages (e.g., GET /login, GET /dashboard)
│   │
│   └── index.js or app.py         # The main entry point for your back-end server
│
├── public/                        # **FRONT-END: Static Assets (accessible by the browser)**
│   ├── css/                       # Stylesheets
│   │   ├── main.css               # Global styles
│   │   └── dashboard.css          # Styles specific to the dashboard
│   │
│   ├── js/                        # Client-side JavaScript
│   │   └── dashboard_logic.js     # Any dynamic code that runs in the browser
│   │
│   └── img/                       # Images (hospital logo, icons, etc.)
│
└── views/ or templates/           # **FRONT-END: Dynamic Pages (served by the server)**
    ├── partials/                  # Reusable snippets (header, footer, navigation bar)
    │   ├── header.html
    │   └── nav_staff.html
    │
    ├── auth/                      # Login and registration pages
    │   └── login.html
    │
    ├── staff/                     # Pages for Doctors/Nurses
    │   ├── dashboard.html         # Main overview for staff
    │   └── patient_record.html    # Detailed view/edit page for a single patient
    │
    └── patient_portal.html        # Public-facing patient page (e.g., check appointment)


#Model arsitektur

##Tanya jawab dengan AI
**Pertanyaan**:
Very well, let's put this matter aside for now. Regarding each module, considering all of them is ended with "system", I would assume all of them are independent information systems. So, how should they be structured internally? Should they be developed as independent systems that will in the end be integrated, connected through APIs, or I should develop HIS as if they all have all the individual modules that those systems has?

**Jawaban**:
Itu adalah pertanyaan arsitektur yang sangat penting! Dalam dunia nyata, sistem seperti ini jarang berdiri sendiri, dan cara Anda menyatukannya (integrasi) akan menentukan **skalabilitas** dan **kemudahan pemeliharaan** proyek Anda.

Anda benar, secara konseptual, **Electronic Medical Records (EMR) System**, **Financial Management System**, dan lain-lain adalah sistem informasi independen. Namun, dalam konteks sebuah **Hospital Information System (HIS)** yang terpadu, mereka harus dibangun agar berbagi data utama.

Ada dua pendekatan utama untuk struktur internal, dan saya akan merekomendasikan satu yang paling cocok untuk proyek Anda.

---

## Dua Pendekatan Arsitektur

### 1. Monolitik Terpadu (HIS sebagai Satu Sistem Besar)

Dalam pendekatan ini, semua modul (**CIS, Financial, Inventory**) adalah bagian dari satu kode dasar (codebase) dan menggunakan basis data yang sama.

| Modul | HIS-Server |
| :---: | :---: |
| EMR | **Satu Basis Data Sentral** |
| Finance | **Satu Kode Dasar (Codebase)** |
| Inventory | **Satu Server Aplikasi** |

**Kelebihan:**
* **Simpel untuk Proyek Sekolah:** Paling mudah untuk dikembangkan dan di-deploy (dijalankan) karena hanya ada satu proyek yang perlu dikelola.
* **Komunikasi Cepat:** Semua modul dapat berkomunikasi langsung di dalam kode tanpa *overhead* jaringan.
* **Konsistensi Data:** Data pasien dijamin konsisten karena disimpan dalam satu tabel di satu basis data.

**Kekurangan:**
* **Ketergantungan Tinggi:** Perubahan kecil di modul EMR berpotensi merusak modul Finansial.

### 2. Microservices (Sistem Independen yang Terhubung via API)

Dalam pendekatan ini, setiap modul dibangun sebagai layanan yang sepenuhnya independen, memiliki kode dan basis datanya sendiri, dan berkomunikasi hanya melalui **API (Application Programming Interfaces)**.

| Layanan EMR (Microservice) | Layanan Finansial (Microservice) |
| :---: | :---: |
| Database EMR | Database Finansial |
| API EMR | API Finansial |

**Kelebihan:**
* **Skalabilitas & Ketahanan:** Jika modul EMR *crash* karena lalu lintas tinggi, modul Finansial dapat tetap berjalan.
* **Profesional (Real-World):** Ini adalah cara perusahaan teknologi besar (seperti Google, Amazon) membangun sistem mereka.

**Kekurangan:**
* **Sangat Kompleks:** Memerlukan infrastruktur dan keterampilan manajemen API yang jauh lebih tinggi.
* **Overkill untuk Proyek Kecil:** Mengelola 5-6 basis data dan 5-6 server akan menghabiskan waktu pengembangan Anda.

---

## Rekomendasi Struktur Internal untuk Proyek Anda

Untuk proyek akademik yang bertujuan mendemonstrasikan fungsi HIS, Anda harus menggunakan pendekatan **Monolitik Terpadu** yang dirancang secara modular.

Ini berarti Anda akan membangun **satu aplikasi server (Backend)**, tetapi Anda harus menggunakan struktur folder yang Anda buat sebelumnya (`server/controllers`, `server/models`, `server/routes`) untuk menciptakan **pemisahan logis** antar modul.

### Detail Implementasi Monolitik Modular

#### 1. Pembagian Logis Modul HIS (Mengikuti Prinsip MVC)

Alih-alih membuat 5 server, Anda membuat 5 set file yang bekerja sama di dalam satu server.

| Modul HIS | Folder `server/models/` | Folder `server/controllers/` | Folder `server/routes/` |
| :--- | :--- | :--- | :--- |
| **CIS** | `Patient.js`, `Vitals.js` | `patientController.js` | `cisRoutes.js` |
| **Finansial** | `Invoice.js`, `Claim.js` | `billingController.js` | `financeRoutes.js` |
| **Inventory** | `Supply.js`, `Warehouse.js` | `inventoryController.js` | `inventoryRoutes.js` |

#### 2. Basis Data Sentral

Semua modul akan berbagi **satu Basis Data Sentral** (misalnya, PostgreSQL, MongoDB).

* **Contoh Alur Data:**
    * `patientController.js` (CIS) mencatat diagnosis pasien di `Patient.js`.
    * `billingController.js` (Finansial) kemudian **mengambil** data diagnosis tersebut dari tabel `Patient` yang sama untuk membuat tagihan di `Invoice.js`.

**Penting:** Meskipun mereka berbagi basis data, pastikan modul **hanya mengakses data yang mereka butuhkan** melalui *Controller* mereka sendiri.

### Kesimpulan

Anda harus mengembangkan **HIS sebagai satu sistem Monolitik yang berarsitektur Modular**.

* Semua modul adalah bagian dari **satu proyek backend** (satu server).
* Gunakan struktur folder yang rapi (`controllers/`, `models/`, `routes/`) untuk **mengisolasi kode** setiap modul secara logis, sehingga menyerupai sistem independen.
* Gunakan **satu basis data sentral** untuk semua penyimpanan data.

Pendekatan ini akan memberi Anda semua manfaat pengajaran (memahami pembagian HIS) tanpa kesulitan operasional dari Microservices.

##Kesimpulan perancang
Demi kemudahan, saya akan mengikuti sarannya, yaitu satu sistem Monolitik yang berarsitektur Modular.

##Development Roadmap
Kita mulai dengan website hadapan dengan publik yang kurang lebih sudah siap. Kita akan lanjut dengan membuat static webpage until EHR terlebih dahulu. Untuk membuat ini, kita perlu meneliti EHR isinya ada apa saja.

EHR menggunakan banyak form, jadi kita buat dulu form-form. Form bisa dibuat menggunakan form template dari HTML

Administrative information
Patient information form (PIF), referral letters, confultation letters, insurance information, billing information, appointment history, diagnostic and procedure codes, emergecy contact infromation.
Legal documents
Records release, informed consent documents, HIPAA forms, advanced directives, living wills, insurance authorization forms, healthcare power of attorney forms

Documenters of medical record (users)
Receptionist, medical assistant, physician (or other treating professional), medical biller
They will handle both structured data entry and free text documentation

Basic EHR Functions:
Progress note, documentation templates, provider review of incoming data, images attachment, electronic signature insertion, prescription templates, fax and messaging, patient reminders, viral signs data, importation of data, automatic flagging, e-mail, print

Following factors affect user satisfaction:
Length of system response time (they need to be responsive), perception of workflow logic, ability to complete tasks, ease of mistake correction, training time, availability of support staff, system effect on quality of care, ability to convert systems to specific provider needs, level of computer skills.

Administrative duties
Receptionist duties, appointment scheduling, electronic chart creation, purging, enetering patient data, creating patient letters, email communication, patient education (educating patient on how to enter data electronically), coordination of care.
I wrote this section because it is important to understand your user, because your system should enhance their work, so it need to fit into their workflow as best as you can.

Clinical duties

Document treatment
Coordinate patient care
Document: Patient history and physical, vital signs, progress notes (details of patient visit), laboratory requisitions, prescriptions, test results.

Billing and coding duties
Creation of billing statements, assignment of procedural and diagnostic codes, linking codes for reimbursement, aduting, filing patient statements.