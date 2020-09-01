create table candidates.work_experience(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    company_name text not null,
    company_summary text,
    employment_start_date date not null,
    employment_end_date date,
    work_summary text not null,
    achievements text,
    current_ctc bigint
);