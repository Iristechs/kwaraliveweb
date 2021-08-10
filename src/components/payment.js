import React, { useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


const MakePayment=()=> {

   const [transaction_response, setTransactionResponse] = useState([])

   const config = {
    public_key: 'FLWPUBK_TEST-5d358b8be02a5ca924ff09d135b14939-X',
    tx_ref: Date.now(),
    amount: 1000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Kwara Live',
      description: 'Payment to complete business registration',
      logo: 'https://res.cloudinary.com/daslnufbd/image/upload/v1628548077/olpi43mvb3nzj1gt1m8d.png',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay to complete registeration',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="make-payment">
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}

export default MakePayment