create table candidates.education(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    university text,
    degree text,
    stream text,
    score text
);