import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from '../redux';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';

function JobContainer({ jobData, fetchJobs }) {
  useEffect(() => {
    fetchJobs();
    // empty array do it is dispatched only once
  }, []);
  return jobData.loading ? (
    <Loader></Loader>
  ) : jobData.error ? (
    <h2>{jobData.error}</h2>
  ) : (
    <div>
      <h2>Beer List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {jobData &&
          jobData.jobs &&
          jobData.jobs.map((job) => (
            <div className="p-3">
              {' '}
              <h3>{job.name}</h3>
              <p>{job.tagline}</p>
              <Link to={`/products/${job.id}`}>
                <img src={job.image_url} className="h-64"></img>
              </Link>
            </div>
          ))}
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
