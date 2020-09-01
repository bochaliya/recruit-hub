create table jobs.applied_jobs(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    job_id uuid references jobs.jobs(id),
    candidate_id uuid references candidates.candidates(id)
);