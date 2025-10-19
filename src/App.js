import React, { useState, useEffect } from "react";
import "./App.css";
import Papa from "papaparse";

function App() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [csvLoaded, setCsvLoaded] = useState(false);

  // Load CSV data on component mount
  useEffect(() => {
    loadCSVData();
  }, []);

  const loadCSVData = () => {
    setIsLoading(true);

    // CSV file should be placed in public folder
    Papa.parse("/users.csv", {
      download: true,
      header: false,
      complete: function (results) {
        console.log("CSV Loaded:", results.data);
        setCsvData(results.data);
        setCsvLoaded(true);
        setIsLoading(false);
      },
      error: function (error) {
        console.error("Error loading CSV:", error);
        setError("Error loading certificate database");
        setIsLoading(false);
      },
    });
  };

  // Function to validate certificate from CSV data
  const validateCertificate = (certNo) => {
    setIsLoading(true);
    setError("");
    setCertificate(null);

    try {
      // Simulate small delay for better UX
      setTimeout(() => {
        if (!csvLoaded || csvData.length === 0) {
          setError("Certificate database not loaded yet");
          setIsLoading(false);
          return;
        }

        // Find certificate in CSV data
        const foundCertificate = csvData.find((row) => {
          // Assuming certificate number is in the first column (index 0)
          // Trim and case-insensitive comparison
          return (
            row[0] &&
            row[0].toString().toLowerCase().trim() ===
              certNo.toLowerCase().trim()
          );
        });

        if (foundCertificate) {
          // Map CSV columns to certificate fields
          // Adjust these indices based on your CSV structure
          const certificateDetails = {
            certificateNo: foundCertificate[0] || "N/A",
            trainingName: foundCertificate[1] || "N/A", // Adjust index as per your CSV
            studentName: foundCertificate[2] || "N/A", // Adjust index as per your CSV
            boardRollNo: foundCertificate[3] || "N/A", // Adjust index as per your CSV
            trainingPeriods: foundCertificate[4] || "N/A", // Adjust index as per your CSV
            collegeName: foundCertificate[5] || "N/A", // Adjust index as per your CSV
          };

          setCertificate(certificateDetails);
        } else {
          setError(`Certificate not found for Certificate Number: ${certNo}`);
        }
        setIsLoading(false);
      }, 500);
    } catch (err) {
      setError("An error occurred while validating the certificate.");
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!certificateNumber.trim()) {
      setError("Please enter a Certificate Number");
      return;
    }
    validateCertificate(certificateNumber);
  };

  const handleReset = () => {
    setCertificateNumber("");
    setCertificate(null);
    setError("");
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>Certificate Validation System</h1>
          <p>Verify your training certificate authenticity</p>
          {!csvLoaded && (
            <div className="csv-status">
              <span className="loading-dot"></span>
              Loading certificate database...
            </div>
          )}
        </header>

        {/* Certificate Input Form */}
        <div className="certificate-form-section">
          <div className="form-container">
            <h2>Validate Certificate</h2>
            <form onSubmit={handleSubmit} className="certificate-form">
              <div className="form-group">
                <label htmlFor="certificateNumber">Certificate Number *</label>
                <input
                  type="text"
                  id="certificateNumber"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value)}
                  placeholder="Enter Certificate Number"
                  disabled={isLoading || !csvLoaded}
                />
                <small className="help-text">
                  Enter the certificate number from your certificate
                </small>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isLoading || !csvLoaded}
                >
                  {isLoading ? "Validating..." : "Validate Certificate"}
                </button>

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleReset}
                  disabled={isLoading}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Section */}
        <div className="results-section">
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          {certificate && (
            <div className="certificate-details">
              <div className="certificate-header">
                <h2>Certificate Validated Successfully</h2>
                <div className="status-badge valid">VALID</div>
              </div>

              <div className="certificate-info">
                <div className="info-grid">
                  <div className="info-item">
                    <label>Certificate Number:</label>
                    <span className="value">{certificate.certificateNo}</span>
                  </div>

                  <div className="info-item">
                    <label>Training Name:</label>
                    <span className="value">{certificate.trainingName}</span>
                  </div>

                  <div className="info-item">
                    <label>Student Name:</label>
                    <span className="value">{certificate.studentName}</span>
                  </div>

                  <div className="info-item">
                    <label>Board Roll No.:</label>
                    <span className="value">{certificate.boardRollNo}</span>
                  </div>

                  <div className="info-item">
                    <label>Training Periods:</label>
                    <span className="value">{certificate.trainingPeriods}</span>
                  </div>

                  <div className="info-item">
                    <label>College Name:</label>
                    <span className="value">{certificate.collegeName}</span>
                  </div>
                </div>
              </div>

              <div className="certificate-footer">
                <p className="validation-note">
                  This certificate has been successfully validated in our
                  system.
                </p>
                <p className="timestamp">
                  Validated on: {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Database Status */}
        <div className="database-status">
          <div className="status-item">
            <span className="status-label">Database Status:</span>
            <span
              className={`status-value ${csvLoaded ? "loaded" : "loading"}`}
            >
              {csvLoaded ? `Loaded (${csvData.length} records)` : "Loading..."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
