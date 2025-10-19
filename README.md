# Certificate Validation System

A React-based web application for validating training certificates using CSV data. This system allows users to verify certificate authenticity by entering certificate numbers, with data stored and managed in a CSV file.

![Certificate Validation System](https://img.shields.io/badge/React-18.2.0-blue) ![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7) ![CSV](https://img.shields.io/badge/Data-CSV-brightgreen)

## 🌟 Features

- **Certificate Validation**: Verify certificates using unique certificate numbers
- **CSV Data Management**: Simple data storage using CSV files
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Validation**: Instant certificate verification
- **User-Friendly Interface**: Clean and intuitive design
- **No Database Required**: Uses static CSV files for easy maintenance

## 🚀 Live Demo

The application is deployed on Netlify and available at:  
`https://svninfraandsolarservices.netlify.app/`

## 🛠 Technology Stack

- **Frontend**: React 18.2.0
- **CSV Parsing**: PapaParse 5.4.1
- **Styling**: CSS3 with responsive design
- **Deployment**: Netlify
- **Version Control**: GitHub

## 📁 Project Structure

```
certificate-validator/
├── public/
│   ├── index.html
│   ├── users.csv              # Certificate database
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js                 # Main application component
│   ├── App.css               # Application styles
│   ├── index.js              # React entry point
│   └── index.css             # Global styles
├── package.json
├── README.md
└── .gitignore
```

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/certificate-validator.git
   cd certificate-validator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📊 CSV Data Format

The application reads certificate data from `public/users.csv` with the following column structure:

| Column | Field Name | Description | Example |
|--------|------------|-------------|---------|
| 0 | Certificate Number | Unique identifier for each certificate | CERT2024001 |
| 1 | Training Name | Name of the training/course | Web Development Bootcamp |
| 2 | Student Name | Full name of the student | John Smith |
| 3 | Board Roll No. | Roll number issued by board | BD2024001 |
| 4 | Training Periods | Duration of the training | 6 Months |
| 5 | College Name | Name of the institution | ABC Engineering College |

### Example CSV Content

```csv
CERT2024001,Web Development Bootcamp,John Smith,BD2024001,6 Months,ABC Engineering College
CERT2024002,Data Science Fundamentals,Sarah Johnson,BD2024002,4 Months,XYZ University
CERT2024003,Mobile App Development,Mike Davis,BD2024003,3 Months,Tech Institute
```

## 🚀 Deployment

### Deploying to Netlify

#### Method 1: Drag & Drop (Quickest)
1. Build the project: `npm run build`
2. Zip the `build` folder
3. Go to [netlify.com](https://netlify.com)
4. Drag and drop the zip file onto the deployment area

#### Method 2: GitHub Connection (Recommended)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/certificate-validator.git
   git push -u origin main
   ```

2. In Netlify:
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Click "Deploy site"

#### Method 3: Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify login
   netlify deploy --prod
   ```

### Environment Variables

If needed, add environment variables in Netlify dashboard:
- Go to Site settings → Environment variables
- Add variables with `REACT_APP_` prefix

## 🔄 Updating Certificate Data

### Method 1: Via GitHub (Recommended)

1. **Update the CSV file locally**
   ```bash
   # Navigate to your project
   cd certificate-validator
   
   # Edit the CSV file
   # Location: public/users.csv
   ```

2. **Commit and push changes**
   ```bash
   git add public/users.csv
   git commit -m "Update: Add new certificates for 2024 batch"
   git push origin main
   ```

3. **Netlify automatically deploys**
   - Netlify detects GitHub changes
   - Automatic deployment starts
   - Site updates in 2-5 minutes

### Method 2: Direct Netlify Upload

1. Go to Netlify dashboard
2. Site settings → File browser
3. Navigate to `public/users.csv`
4. Upload updated file
5. Manual deployment triggers

### Method 3: Using Netlify CLI

```bash
# Deploy only the updated CSV file
netlify deploy --dir=public --filter=users.csv

# Or deploy entire site
netlify deploy --prod
```

## 📝 CSV Management Best Practices

### Adding New Certificates

1. **Maintain CSV Format**:
   - Use consistent column order
   - No empty rows between data
   - UTF-8 encoding

2. **Certificate Number Format**:
   - Use unique identifiers
   - Consistent naming convention
   - Avoid special characters

3. **Data Validation**:
   - Test new entries locally first
   - Verify all required fields are populated
   - Check for duplicate certificate numbers

### Example: Adding Multiple Certificates

```csv
# Existing data
CERT2024001,Web Development,John Smith,BD2024001,6 Months,ABC College
CERT2024002,Data Science,Sarah Johnson,BD2024002,4 Months,XYZ University

# New certificates to add
CERT2024003,Cyber Security,Michael Brown,BD2024003,3 Months,Security Institute
CERT2024004,Cloud Computing,Emily Davis,BD2024004,5 Months,Tech University
CERT2024005,AI Fundamentals,David Wilson,BD2024005,6 Months,AI College
```

## 🐛 Troubleshooting

### Common Issues

1. **CSV File Not Loading**
   - Verify file is in `public` folder
   - Check CSV format (no trailing commas)
   - Ensure proper file encoding (UTF-8)

2. **Build Errors**
   ```bash
   # Clear dependencies and reinstall
   rm -rf node_modules
   npm install
   npm run build
   ```

3. **Deployment Failures**
   - Check Netlify deployment logs
   - Verify build commands in Netlify settings
   - Ensure all dependencies in package.json

4. **Certificate Not Found**
   - Verify certificate number in CSV
   - Check for typos or case sensitivity
   - Ensure CSV columns are correctly mapped

### Debugging Steps

1. **Test Locally First**
   ```bash
   npm start
   # Test with new certificate numbers
   ```

2. **Check Browser Console**
   - Open developer tools
   - Look for errors in Console tab
   - Verify network requests

3. **Verify CSV Parsing**
   - Check if CSV loads without errors
   - Validate data structure
   - Confirm column mappings

## 📱 Usage Instructions

### For Administrators

1. **Adding New Certificates**:
   - Update `public/users.csv` with new entries
   - Follow the column structure
   - Commit and push to GitHub

2. **Data Maintenance**:
   - Regular backups of CSV data
   - Validate data integrity
   - Remove outdated certificates if needed

### For End Users

1. **Certificate Validation**:
   - Visit the deployed website
   - Enter certificate number
   - Click "Validate Certificate"

2. **Successful Validation**:
   - Certificate details displayed
   - Validation status shown
   - Timestamp of verification

## 🔧 Customization

### Modifying Display Fields

Edit the field mapping in `src/App.js`:

```javascript
const certificateDetails = {
  certificateNo: foundCertificate[0] || 'N/A',
  trainingName: foundCertificate[1] || 'N/A',
  studentName: foundCertificate[2] || 'N/A',
  boardRollNo: foundCertificate[3] || 'N/A',
  trainingPeriods: foundCertificate[4] || 'N/A',
  collegeName: foundCertificate[5] || 'N/A'
};
```

### Styling Changes

Modify `src/App.css` for:
- Color schemes
- Layout adjustments
- Responsive breakpoints

### Adding New Features

1. **QR Code Integration**:
   - Add QR code scanning capability
   - Use libraries like html5-qrcode

2. **Export Functionality**:
   - Add certificate PDF export
   - Implement data export features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check deployment logs on Netlify
- Verify CSV file format and structure

## 🗺 Future Enhancements

- [ ] QR code integration for certificate scanning
- [ ] Bulk certificate upload functionality
- [ ] Advanced search and filtering
- [ ] Certificate PDF generation
- [ ] Admin dashboard for data management
- [ ] API integration for dynamic data
- [ ] Multi-language support
- [ ] Advanced analytics and reporting

---

**Maintained by**: Sushant Sagar
**Last Updated**: October 2025

For detailed deployment instructions or issues, please refer to the deployment section above or create an issue in the GitHub repository.
