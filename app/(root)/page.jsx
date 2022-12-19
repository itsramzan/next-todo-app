import React, { Suspense } from "react";
import Heading from "./Heading";
import Form from "./Form";
import List from "./List";

const Home = async () => {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto my-4 space-y-4">
      <Heading />
      <Form />
      <Suspense fallback={<p className="text-white">Loading...</p>}>
        <List />
      </Suspense>
    </div>
  );
};

export default Home;
