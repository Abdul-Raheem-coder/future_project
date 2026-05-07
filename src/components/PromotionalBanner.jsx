export default function PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8 px-4 rounded-lg my-8">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">🎉 Special Offer!</h2>
            <p className="text-xl">Get up to 50% off on selected items this week only!</p>
          </div>
          <button className="mt-4 md:mt-0 btn-secondary">
            View Deals
          </button>
        </div>
      </div>
    </div>
  );
}
