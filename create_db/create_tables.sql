CREATE TABLE stazioni (
    codseqst varchar(12) primary key,
    nome varchar(20) NOT NULL,
    localita varchar(40) NOT NULL,
    comune varchar(40) NOT NULL,
    provincia char(20) NOT NULL,
    lat varchar(11) NOT NULL,
    lon varchar(11) NOT NULL
);
CREATE TABLE rilevazioni (
    codseqst varchar(12),
    data date NOT NULL,
    tipoInquinante varchar(10) NOT NULL,
    valore int(11),
    primary key (codseqst, data, tipoinquinante),
    foreign key (codseqst) references stazioni(codseqst)
);
