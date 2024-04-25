<div x-data="{\n  radios: [\n      {\n          name: 'Paypal',\n          description: 'It\\'s the faster, safer way to send and receive money.',\n          icon: 'Icon'\n      },\n      {\n          name: 'Master Card',\n          description: ' payment-processing corporation worldwide.',\n          icon: 'Icon'\n      },\n      {\n          name: 'Visa',\n          description: ' Trusted world leader in digital payment technology',\n          icon: 'Icon'\n      },\n  ],\n  selectedPaymentMethod: 'Master Card'\n}" className="max-w-md mx-auto px-4">
      <h2 className="text-base-content font-medium">Select your payment method</h2>
      <ul className="mt-6 space-y-3">
        <template x-for="(item, index) in radios" key="index" />
      </ul>
</div>