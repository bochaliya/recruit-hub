create table recruiters.companies(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    name text,
    description text
);