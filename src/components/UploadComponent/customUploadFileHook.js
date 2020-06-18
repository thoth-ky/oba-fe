import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendFileToApi } from '../../utils/api';


function CustomUploadFileHook(businessId) {
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState();
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setErrors({ non_field_erros: 'File is Required' });
    }
    setValidated(true);
    const path = `/transactions/business/${businessId}/csv_upload`;
    const formData = new FormData();
    formData.append('csv_file', file);

    sendFileToApi(path, formData)
      .then((response) => {
        if (response.status === 201) {
          history.push(`/business/${businessId}`);
        }
        response.json().then((payload) => {
          setErrors(payload);
        });
      })
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
