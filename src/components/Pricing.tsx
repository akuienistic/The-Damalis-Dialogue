import { motion } from "framer-motion";
import { Check, Star, Mic, Users, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const businessPackages = [
    {
      name: "Bronze Package",
      price: "$120",
      icon: Check,
      description: "Basic brand visibility",
      features: [
        "Brand/business mention during the episode",
        "Business name or logo displayed on screen",
        "Tagged in episode promotional posts",
        "1 short promotional clip"
      ],
      popular: false
    },
    {
      name: "Silver Package",
      price: "$200",
      icon: Star,
      description: "Most popular package",
      features: [
        "Everything in Bronze PLUS:",
        "Brand naturally discussed",
        "2-3 dedicated promotional clips",
        "Caption with business description & contacts",
        "Pinned comment or temporary bio mention"
      ],
      popular: true
    },
    {
      name: "Combo Package",
      price: "$250",
      icon: Users,
      description: "Guest Feature + Business Promotion",
      features: [
        "Guest appearance on the show",
        "Silver-level business promotion",
        "Extra clips focused on the business",
        "Strong call-to-action for the brand"
      ],
      popular: false
    },
    {
      name: "Gold Package",
      price: "$350",
      icon: Crown,
      description: "Featured as Official Sponsor",
      features: [
        "Brand mention at the beginning of the episode",
        "Business logo on episode thumbnail",
        "Multiple promotional clips across all platforms",
        "Business contact details in video descriptions",
        "Priority exposure & extended promotion"
      ],
      popular: false
    }
  ];

  const guestPackages = [
    {
      name: "Starter Guest Package",
      price: "$100",
      icon: Mic,
      description: "Ideal for first-time guests",
      features: [
        "Appearance on 1 full episode",
        "Casual but professional interview",
        "Episode published on YouTube",
        "Tagged once on a promotional post",
        "1 short edited clip (30 seconds)"
      ],
      popular: false
    },
    {
      name: "Standard Guest Package",
      price: "$150",
      icon: Zap,
      description: "Best value for entrepreneurs",
      features: [
        "Appearance on 1 full episode",
        "Professional interview tailored to guest",
        "Posted on YouTube, TikTok, Instagram/Facebook",
        "Tagged on promotional posts",
        "1-2 professionally edited clips"
      ],
      popular: true
    }
  ];

  const terms = [
    "All payments are required before recording",
    "Strategic guests may be invited at the show's discretion",
    "Prices are non-negotiable",
    "Custom packages available upon request",
    "No free promotions"
  ];

  return (
    <section id="pricing" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pricing & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package to amplify your brand or share your story on The Damalis Dialogue
          </p>
        </motion.div>

        {/* Business Promotion Packages */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8"
          >
            Business Promotion & Sponsorship
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-card rounded-2xl p-6 border ${pkg.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <pkg.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-lg">{pkg.name}</h4>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guest Appearance Packages */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-8"
          >
            Guest Appearance Packages
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guestPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-card rounded-2xl p-6 border ${pkg.popular ? 'border-primary shadow-lg scale-105' : 'border-border'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="text-center mb-4">
                  <pkg.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-bold text-lg">{pkg.name}</h4>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 border border-border"
        >
          <h4 className="font-bold text-lg mb-4 text-center">Terms & Conditions</h4>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {terms.map((term, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;