create table candidates.organizations(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    name text,
    work_summary text,
    start_date date not null,
    end_date date
);