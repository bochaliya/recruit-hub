create table recruiters.recruiters(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    name text,
    email text,
    password text,
    mobile text,
    company uuid references recruiters.companies
);