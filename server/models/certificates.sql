create table candidates.certificates(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    name text,
    description text,
    link text
);