CREATE TABLE Aktualizacja_danych
(
  "id_aktual_data" serial NOT NULL,
  "nr_dzialki" integer NOT NULL,
  "nr_aktualizacji" integer NOT NULL,
  "data_aktualizacji" date,
  "sposob przekazania danych do aktualizacji" character varying(255),
  "zaktualizowane dane" character varying(255),
PRIMARY KEY ("id_aktual_data")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Aktualizacja_danych
  OWNER TO postgres;

CREATE TABLE Dostep
(
  "nr_dzialkowicza" integer NOT NULL,
  "login" character varying(20),
  "password" character varying(20),
  "enabled" boolean NOT NULL DEFAULT FALSE,
  "role" character varying(15),
  UNIQUE (login,role),
PRIMARY KEY (nr_dzialkowicza)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Dostep
  OWNER TO postgres;


CREATE TABLE Dzialkowicz
(
  "nr_dzialkowicza" integer NOT NULL,
  "imie" character varying(255),
  "nazwisko" character varying(255),
 "ulica" character varying(255),
  "nr_domu" character varying(255),
  "nr_lokalu" character varying(255),
  "kod_pocztowy" character varying(255),
  "miasto" character varying(255),
  "adres_do_korespondencji" character varying(255),
  "telefon" integer,
  "email" character varying(40),
PRIMARY KEY (nr_dzialkowicza)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Dzialkowicz
  OWNER TO postgres;


CREATE TABLE Dzialki
(
  "nr_dzialki" integer NOT NULL,
  "powierzchnia" integer,
  "nr_czlonkowski" integer,
 PRIMARY KEY ("nr_dzialki")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Dzialki
  OWNER TO postgres;


CREATE TABLE IBAN
(
  "nr_dzialki" integer NOT NULL,
  "IBAN" character varying(100),
  "nr_konta" integer,
 PRIMARY KEY ("nr_dzialki")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE IBAN
  OWNER TO postgres;


CREATE TABLE Informacja
(
  "id_informacja" integer NOT NULL,
  "nr_dzialki" integer,
  "nr_informacji" integer,
  "rok_rozliczeniowy" integer,
  "stan_rozliczenia" double precision,
  "informacja" character varying(252),
   PRIMARY KEY ("id_informacja")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Informacja
  OWNER TO postgres;


CREATE TABLE Odczyt_licznika
(
  "id_odczyt_licznika" integer NOT NULL,
  "nr_dzialki" integer NOT NULL,
  "nr_pomiaru" integer NOT NULL,
  "data" date,
  "stan_licznika" integer,
  "naleznosc" double precision,
PRIMARY KEY (id_odczyt_licznika)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Odczyt_licznika
  OWNER TO postgres;


CREATE TABLE Wyciagi_JS
(
  "nr_wyciagu" integer NOT NULL,
  "nr_dzialki" integer NOT NULL,
  "kwota" double precision,
  "data" date,
  "opis" character(255),
  "skladka" double precision,
  "cynsz" double precision,
  "AWRBP" integer,
  "wpisowe" double precision,
  "energia_rozpoczecie_sezonu" double precision,
  "energia_zakonczenie_sezonu" double precision,
  "dyzur z roku popredniego na biezacy" integer,
  "dyzur z roku biezacego na nastepny" integer,
  "zadluzenie z roku poprzedniego" double precision,
  "licznik" double precision,
   PRIMARY KEY ("nr_wyciagu")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Wyciagi_JS
  OWNER TO postgres;


CREATE TABLE Zobowiazania
(
  "nr_zobowiazania" integer NOT NULL,
  "rok rozliczeniowy" integer NOT NULL,
  "nr_dzialki" integer NOT NULL,
  "bilans otwarcia" double precision,
  "skladka" double precision,
  "czynsz" double precision,
  "ANR" double precision,
  "wpiowe" double precision,
  "energia_rozpocecie_sezonu" double precision,
  "energia_akonczenia_seoznu" double precision,
  "dyzur z poprzedniego na biezacy" double precision,
  "dyzur z roku biezacego na nastepny" double precision,
  "zadluzenie z roku poprzedniego" double precision,
  "zobowiazania razem z BO" double precision,
   PRIMARY KEY ("nr_zobowiazania")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE Zobowiazania
  OWNER TO postgres;

ALTER TABLE Dostep
ADD FOREIGN KEY ("nr_dzialkowicza")
REFERENCES Dzialkowicz("nr_dzialkowicza");

ALTER TABLE Odczyt_licznika
ADD FOREIGN KEY ("nr_dzialki")
REFERENCES Dzialki("nr_dzialki");

ALTER TABLE Informacja
ADD FOREIGN KEY ("nr_dzialki")
REFERENCES Dzialki("nr_dzialki");

ALTER TABLE Wyciagi_JS
ADD FOREIGN KEY ("nr_dzialki")
REFERENCES Dzialki("nr_dzialki");

ALTER TABLE Zobowiazania
ADD FOREIGN KEY ("nr_dzialki")
REFERENCES Dzialki("nr_dzialki");

ALTER TABLE IBAN
ADD FOREIGN KEY ("nr_dzialki")
REFERENCES Dzialki("nr_dzialki");

ALTER TABLE Aktualizacja_danych
ADD FOREIGN KEY ("nr_dzialki")
REFERENCES Dzialki("nr_dzialki");

ALTER TABLE Dzialki
ADD FOREIGN KEY ("nr_czlonkowski")
REFERENCES Dzialkowicz("nr_dzialkowicza");