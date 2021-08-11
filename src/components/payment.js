import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const MakePayment=({registerationData, registrationStatus})=> {
  console.log(registrationStatus)
  const config = {
    public_key: 'FLWPUBK_TEST-5d358b8be02a5ca924ff09d135b14939-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Kwara Live business Registeration',
      description: 'Registration',
      
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">

    {/*!registrationStatus ? <button disabled className='submit-registration' >register</button> :*/} <button
      className = 'submit-registration'
        onClick={() => {
          
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
               
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Proceed with payment
      </button>
      
    </div>
  );
}

export default MakePayment