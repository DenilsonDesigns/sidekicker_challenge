import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { JobList } from "../JobList/JobList";
import { ErrorMsg } from "../UI/ErrorMsg";
import { JobDisplayModal } from "../UI/JobDisplayModal";
import { NavMain } from "../UI/NavMain";
import { TablePagination } from "../UI/TablePagination";
import "./App.css";

const ROWS_PER_PAGE = 5;

export const App: React.FC = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState<IJobObject[]>([]);
  const [dataOnPage, setDataOnPage] = useState<IJobObject[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentModalJob, setCurrentModalJob] = useState<IJobObject>(
    {} as IJobObject
  );
  const [pageNum, setPageNum] = useState(1);
  const [numButs, setNumButs] = useState(0);

  const filterRawData = useCallback(
    (data: IJobObject[]) => {
      return data.filter(
        (_, i) =>
          i < ROWS_PER_PAGE * pageNum &&
          i >= ROWS_PER_PAGE * pageNum - ROWS_PER_PAGE
      );
    },
    [pageNum]
  );

  useEffect(() => {
    let mounted = true;
    setError("");

    axios
      .get("/api/jobs")
      .then((res) => {
        if (mounted) {
          setData(res.data);
          setNumButs(Math.ceil(res.data.length / ROWS_PER_PAGE));
          setDataOnPage(filterRawData(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
        setError(JSON.stringify(err.message));
      });

    return () => {
      mounted = false;
    };
  }, [filterRawData]);

  useEffect(() => {
    setDataOnPage(filterRawData(data));
  }, [pageNum, data, filterRawData]);

  const handlePaginOnClick = (i: number) => {
    setPageNum(i);
  };

  const handleSetShowModal = (b: boolean) => {
    setShowModal(b);
  };

  const handleRowClick = (jobObject: IJobObject) => {
    setShowModal(true);
    setCurrentModalJob(jobObject);
    console.log("from rowclick: ", jobObject);
  };

  return (
    <>
      {error && <ErrorMsg msgTxt={error} />}
      <NavMain title={"SideKicker"} />
      <Container>
        <JobList jobData={dataOnPage} handleRowClick={handleRowClick} />
        <TablePagination
          activeBut={pageNum}
          numButs={numButs}
          paginOnClick={handlePaginOnClick}
        />
      </Container>
      <JobDisplayModal
        showModal={showModal}
        handleSetShowModal={handleSetShowModal}
        modalJob={currentModalJob}
      />
    </>
  );
};
