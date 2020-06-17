import { useState } from 'react';
import { sendFileToApi } from '../../utils/api';


function CustomUploadFileHook(businessId) {
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setErrors({ File: 'File is Required' });
      return null;
    }
    setValidated(true);
    const path = `/transactions/business/${businessId}/csv_upload`;
    const formData = new FormData();
    formData.append('csv_file', file);

    sendFileToApi(path, formData)
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        response.json().then((payload) => {
          setErrors(payload);
        });
      })
      .then(() => {
        console.log('redirect to business dashboard');
      });
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    const { files } = event.target;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  return {
    errors,
    setErrors,
    setFile,
    validated,
    handleSubmit,
    handleFileChange,
  };
}

export { CustomUploadFileHook };
