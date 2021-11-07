import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

export const App: React.FC = () => {
  const [error, setError] = useState("");
  // @TODO: make interface for below
  const [data, setData] = useState<object[]>([]);

  useEffect(() => {
    let mounted = true;

    axios
      .get("/api/jobs")
      .then((res) => {
        if (mounted) setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(JSON.stringify(err));
      });

    return () => {
      mounted = false;
    };
  }, []);

  return <div>yoooo</div>;
};
