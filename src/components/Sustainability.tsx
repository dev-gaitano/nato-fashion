
const Sustainability = () => {
  const initiatives = [
    {
      title: "Eco-Friendly Materials",
      description: "Using sustainable fabrics and recycled materials",
    },
    {
      title: "Zero Waste",
      description: "Minimizing waste through innovative design and production",
    },
    {
      title: "Fair Trade",
      description: "Supporting local artisans and ethical manufacturing",
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-nato-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our Commitment to <span className="gold-gradient">Sustainability</span>
            </h2>
            <p className="text-gray-600">
              We believe in fashion that respects both people and planet, creating
              pieces that last while minimizing our environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="glass-card p-6 rounded-xl hover-lift"
              >
                <h3 className="text-xl font-heading font-medium mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
