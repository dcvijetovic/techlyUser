const stripe = require('stripe')(
  'sk_test_51LnkhRGLvk2ePqSazBPg58Jsb4c8rG1Bxw9wWADuM1td2JSxW2NJ1GjEXJCecZrPxbpX7Ore36sYOcjGgnCzBjoB007uDCWL7s'
);

exports.handler = async (event) => {
  const { typeName, arguments } = event;

  if (typeName !== 'Mutation') {
    throw new Error('Request is not a mutation');
  }

  if (!arguments?.amount) {
    throw new Error('Amount argument is required');
  }

  // create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: arguments.amount,
    currency: 'usd',
  });

  return {
    clientSecret: paymentIntent.client_secret,
  };
};
