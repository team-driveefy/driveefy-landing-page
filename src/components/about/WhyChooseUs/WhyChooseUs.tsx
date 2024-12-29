import { Phone } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";

import { Button } from "@/shared/ui/Button";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Analytics"
              className="rounded-lg shadow-xl"
              width={256}
              height={256}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              Why Choose us
            </h2>
            <h3 className="text-2xl font-bold mb-6 font-heading">
              Create your app page With expert developer
            </h3>
            <p className="text-gray-600 mb-8">
              Journey greatly or garrets. Draw door kept do so come on open
              mean. Estimating stimulated how reasonably precaution diminution
              she simplicity sir but. Questions am sincerity zealously concluded
              consisted or no gentleman it.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Image
                    src="https://api.iconify.design/fluent:person-feedback-48-filled.svg"
                    alt="Friendly Interface"
                    className="w-6 h-6"
                    width={256}
                    height={256}
                  />
                </div>
                <span className="font-semibold">Friendly Interface</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Image
                    src="https://api.iconify.design/material-symbols:security.svg"
                    alt="Strong Encryption"
                    className="w-6 h-6"
                    width={256}
                    height={256}
                  />
                </div>
                <span className="font-semibold">Strong Encryption</span>
              </div>
            </div>
            <Button
              className="mt-8 flex items-center space-x-2"
              variant="primary"
              ariaLabel="Contact Us"
              title={
                <Fragment>
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </Fragment>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
