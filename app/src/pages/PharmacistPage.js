import React from 'react';
import Header from '../components/Header';
import BodyLeft from '../components/pharmacist/BodyLeft';
import PatientInfo from '../components/pharmacist/PatientInfo';

function PharmacistPage() {
  
    return (
    <> 
        <Header />
        <BodyLeft />
        <PatientInfo />
      </>
    );
  }
  
  export default PharmacistPage;