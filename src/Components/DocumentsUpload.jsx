import React, { useState, useEffect } from 'react';

const DocumentsUpload = () => {
  const [documents, setDocuments] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load documents from localStorage when the component mounts
  useEffect(() => {
    const savedDocuments = JSON.parse(localStorage.getItem('documents')) || {};
    setDocuments(savedDocuments);
  }, []);

  // Save document in localStorage when uploaded
  const handleFileChange = (e, docType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        const updatedDocuments = { 
          ...documents, 
          [docType]: { 
            name: file.name, 
            fileData: base64String 
          }
        };

        // Save the updated documents to localStorage
        localStorage.setItem('documents', JSON.stringify(updatedDocuments));

        // Update the state with the new document
        setDocuments(updatedDocuments);
      };

      // Read the file as a Data URL (Base64)
      reader.readAsDataURL(file);
    }
  };

  // Handle file download
  const handleDownload = (docType) => {
    const document = documents[docType];
    if (document) {
      const link = document.createElement('a');
      link.href = document.fileData; // Set the Base64 file data
      link.download = document.name; // Set the file name for download
      link.click(); // Programmatically click the link to trigger download
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (Object.keys(documents).length === 3) {
      setIsSubmitted(true);
    }
  };

  // Render upload box
  const renderUploadBox = (label, docType) => (
    <div className="w-full md:w-1/3 p-4">
      <div className="border border-gray-300 rounded-lg p-6 text-center shadow-md">
        <p className="mb-4 font-semibold">{label}</p>
        <input
          type="file"
          id={docType}
          className="hidden"
          onChange={(e) => handleFileChange(e, docType)}
        />
        <label
          htmlFor={docType}
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          {documents[docType] ? documents[docType].name : 'Upload Document'}
        </label>
        {documents[docType] && (
          <button
            className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDownload(docType)}
          >
            Download {documents[docType].name}
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-8">Document Upload</h1>

      {!isSubmitted ? (
        <>
          <div className="flex flex-wrap justify-center">
            {renderUploadBox('Upload ID Proof', 'idProof')}
            {renderUploadBox('Upload Address Proof', 'addressProof')}
            {renderUploadBox('Upload Income Proof', 'incomeProof')}
          </div>

          {/* Submit button appears when all three documents are uploaded */}
          {documents.idProof && documents.addressProof && documents.incomeProof && (
            <button
              className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-xl font-semibold text-green-500">
            Your documents have been submitted successfully!
          </h2>
          <p className="mt-4">
            Our agent will contact you within 48 working hours.
          </p>
        </div>
      )}
    </div>
  );
}

export default DocumentsUpload;
