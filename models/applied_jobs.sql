create table jobs.applied_jobs(
    id default uuid gen_random_uuid();
    txn_date timestamp default now(),
    job_id uuid references jobs.jobs(id);
    candidate_id uuid references candidates.candidates(id)
);