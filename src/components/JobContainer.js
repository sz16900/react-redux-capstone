import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../redux';

function JobContainer({ jobData, fetchJobs }) {
  useEffect(() => {
    fetchJobs();
    // empty array do it is dispatched only once
  }, []);
  return jobData.loading ? (
    <h2>Loading</h2>
  ) : jobData.error ? (
    <h2>{jobData.error}</h2>
  ) : (
    <div>
      <h2>Jobs List</h2>
      <div>
        {jobData &&
          jobData.jobs &&
          jobData.jobs.results.map((job) => <p>{job.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jobData: state.job,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: () => dispatch(fetchJobs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobContainer);
