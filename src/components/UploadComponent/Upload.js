import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ErrorsComponent } from '../shared';
import { Container } from '../shared/StyledComponents';
import { CustomUploadFileHook } from './customUploadFileHook';


function UploadComponent({ match }) {
  const { params: { id: businessId } } = match;

  const {
    errors,
    handleFileChange,
    handleSubmit,
    validated,
  } = CustomUploadFileHook(businessId);


  return (
    <Container style={{height: 'auto'}}>
      <ErrorsComponent errors={errors} />
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Choose CSV File to Upload</Form.Label>


          <Form.Control
            type="file"
            accept=".csv"
            isInvalid={!!errors.csv_file}
            feedback={errors.csv_file}
            required
            name="file"
            label="File"
            onChange={handleFileChange}
          />

        </Form.Group>
        <Button type="submit" variant="primary">Upload</Button>
      </Form>
    </Container>
  );
}


export { UploadComponent };
