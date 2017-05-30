import { Component, AfterViewInit } from '@angular/core';
declare var paypal:any;

@Component({
  selector: 'app-paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements AfterViewInit {

  paypal: any;

  constructor() { }

  ngAfterViewInit() {
    paypal.Button.render({

        env: 'sandbox', // Or 'sandbox'

        commit: true, // Show a 'Pay Now' button

        payment: function() {
            return paypal.request.post('http://localhost:3000/paypal/create-payment').then(function(data) {
              console.log(data.id)
                return data.id;
            });
        },

        onAuthorize: function(data) {
            return paypal.request.post('http://localhost:3000/paypal/execute-payment', {
                paymentID: data.paymentID,
                payerID:   data.payerID
            }).then(function() {
              console.log('done')

                // The payment is complete!
                // You can now show a confirmation message to the customer
            });
        }

    }, '#paypal-button');
  }

}
