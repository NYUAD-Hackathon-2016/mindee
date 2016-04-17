drop table if exists entries;
create table entries (
  id integer primary key autoincrement,
  username text not null,
  gender text not null,
  age integer not null,
  sleep single not null,
  social_life single not null,
  exercise single not null,
  stress single not null
);

drop table if exists progress;
create table progress (
  id integer primary key autoincrement,
  username text not null,
  age integer not null
);