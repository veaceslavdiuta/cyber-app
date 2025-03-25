import StepsSection from '../components/StepsSection';
import CheckoutSummary from '../components/CheckoutSummary';
import CheckoutPayment from '../components/CheckoutPayment';

function CheckoutThirdStep() {
  return (
    <main>
      <StepsSection />
      <section className="container mx-auto flex max-w-screen-xl flex-col justify-between gap-24 px-4 py-16 lg:flex-row">
        <CheckoutSummary />
        <CheckoutPayment />
      </section>
    </main>
  );
}

export default CheckoutThirdStep;
