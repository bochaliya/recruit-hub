create table jobs.jobs(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    company_id uuid references recruiters.companies(id),
    description text,
    min_experience smallint,
    max_experience smallint,
    skills text[]
);