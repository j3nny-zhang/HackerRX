import React from 'react';
import UploadButton from '../components/client/UploadButton';
import Header from '../components/client/Header';
import BodyLeft from '../components/client/BodyLeft';

function ClientPage() {
  
    return (
    <> 
        <Header />
        <BodyLeft />
        <UploadButton />
      </>
    );
  }
  
  export default ClientPage;