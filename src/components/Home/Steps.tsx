import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 my-16">
      <div className="bg-[#a1573a] steps">
        <h3 className="">Sign Up</h3>
        <p>
          Quickly click on any of the register buttons to create an accout with
          us. We guarantee that your details are safe.
        </p>
      </div>
      <div className="bg-[#f2c45f] steps">
        <h3>Log in</h3>
        <p>Proceed to log in into your account with your correct details.</p>
      </div>
      <div className="bg-teal-500 steps">
        <h3>Socialize</h3>
        <p>
          Create posts and likewise engage with contents created by other users.
        </p>
      </div>
    </div>
  );
};

export default Steps;
