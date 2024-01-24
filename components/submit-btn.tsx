import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group inline-block px-6 py-3 text-sm no-underline uppercase text-center tracking-wider font-medium md:font-semibold rounded-full bg-emerald-200 text-emerald-900 transition-all duration-200 ease-out hover:text-white hover:no-underline undefined"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
        </>
      )}
    </button>
  );
}