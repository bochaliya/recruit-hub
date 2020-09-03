create table candidates.personal_projects(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    title text,
    summary text,
    start_date date,
    end_date date,
    technologies_used text[]
);