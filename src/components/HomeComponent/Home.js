import React from 'react';
import { Container } from '../shared/StyledComponents';

function HomeComponent() {
  
  const display = { expand: false, body: true };

  return (
    <Container>
      <div>
        Home Component
      </div>
    </Container>
  );
}

export { HomeComponent };
