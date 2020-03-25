import { useEffect, useState } from "react";

export function ParcelStatus() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/api/is-it")
      .then(response => response.json())
      .then(isItOut => {
        setStatus(isItOut ? "Yes!" : "Not yet :(");
      })
      .catch(error => {
        setStatus("Error :(");
        console.error(error);
      });
  }, [setStatus]);

  return status;
}
