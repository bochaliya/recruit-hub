create table candidates.profile_photos(
    id uuid default gen_random_uuid() primary key,
    txn_date timestamp default now(),
    photo_name text,
    photo bytea
);