import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "jobs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    jobsRequested: (jobs, action) => {
      jobs.loading = true;
    },
    jobsReceived: (jobs, action) => {
      jobs.list = action.payload;
      jobs.loading = false;
      jobs.lastFetch = Date.now();
    },
    jobsRequestFailed: (jobs, action) => {
      jobs.loading = false;
    },
    jobAssignedToUser: (jobs, action) => {
      const { id: jobId, userId } = action.payload;
      const index = jobs.list.findIndex((job) => job.id === jobId);
      jobs.list[index].userId = userId;
    },
    jobAdded: (jobs, action) => {
      jobs.list.push(action.payload);
    },
    jobApplied: (jobs, action) => {
      const index = jobs.list.findIndex((job) => job.id === action.payload.id);
      jobs.list[index].applied = true;
    },
    jobRemoved: (jobs, action) => {
      return jobs.list.filter((job) => job.id !== action.payload.id);
    },
  },
});

const {
  jobsReceived,
  jobAssignedToUser,
  jobAdded,
  jobApplied,
  jobRemoved,
  jobsRequested,
  jobsRequestFailed,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/jobs";

export const loadJobs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.jobs;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: jobsRequested.type,
      onSuccess: jobsReceived.type,
      onError: jobsRequestFailed.type,
    })
  );
};

export const addJob = (job) =>
  apiCallBegan({
    url,
    method: "post",
    data: job,
    onSuccess: jobAdded.type,
  });

export const appliedJob = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "patch",
    data: { applied: true },
    onSuccess: jobApplied.type,
  });
export const removedJob = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "patch",
    data: { applied: true },
    onSuccess: jobRemoved.type,
  });

export const assignJobToUser = (jobId, userId) =>
  apiCallBegan({
    url: `${url}/${jobId}`,
    method: "patch",
    data: { userId },
    onSuccess: jobAssignedToUser.type,
  });

// Selector
export const getUnappliedJobs = createSelector(
  (state) => state.entities.jobs.list,
  (list) => list.filter((job) => !job.applied)
);

export const getJobsbyUser = (userId) =>
  createSelector(
    (state) => state.entities.jobs.list,
    (jobs) => jobs.filter((job) => job.userId === userId)
  );
