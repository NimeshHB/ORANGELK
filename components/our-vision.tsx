
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OurVision = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg">
              To be the leading and most trusted tour operator in Sri Lanka, recognized for our exceptional service, innovative tours, and commitment to responsible travel. We aim to create a positive impact on the tourism industry and the lives of the people of Sri Lanka.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OurVision;
