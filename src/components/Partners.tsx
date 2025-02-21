
const Partners = () => {
  const partners = [
    {
      name: "Sustainable Textiles Co",
      description: "Eco-friendly fabric supplier",
      role: "Material Partner",
    },
    {
      name: "African Artisans United",
      description: "Master craftspeople collective",
      role: "Craftsmanship Partner",
    },
    {
      name: "Global Fashion Ethics",
      description: "Fair trade certification",
      role: "Certification Partner",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-nato-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Our <span className="gold-gradient">Partners</span>
            </h2>
            <p className="text-gray-600">
              Collaborating with industry leaders to create positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="glass-card p-6 rounded-xl hover-lift text-center"
              >
                <h3 className="text-xl font-heading font-medium mb-2">
                  {partner.name}
                </h3>
                <p className="text-nato-400 text-sm mb-3">{partner.role}</p>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
