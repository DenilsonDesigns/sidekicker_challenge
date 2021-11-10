import React from "react";
import { Table } from "react-bootstrap";

interface JobListProps {
  jobData: IJobObject[];
  handleRowClick: Function;
}

const HEADERS = [
  "ID",
  "Job Title",
  "Job Description",
  "Date Posted",
  "Applicants",
];

export const JobList: React.FC<JobListProps> = ({
  jobData,
  handleRowClick,
}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {HEADERS.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {jobData.map((row, i) => {
          return (
            <tr key={i} onClick={() => handleRowClick(row)}>
              <td>{row.id}</td>
              <td>{row["job title"]}</td>
              <td>{row["job description"]}</td>
              <td>{row.date}</td>
              <td>{row.applicants}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
