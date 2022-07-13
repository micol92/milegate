namespace SM.POC;

entity SMGAMEOVR {
key	SMDATE		: Date;
key SQNUM       : Integer;
	SMGENRE		: String(30);
    SMRATE      : Decimal(4,2);
	SMDURATION	: Integer;
	SMSTAYTM	: Decimal(6,2);
    SMMEMS      : Integer;
}

entity SMTOPGAME {
key	SMDATE		: Date;
key SQNUM       : Integer;
	SMGMNAME	: String(40);
    SMGMCOM     : String(20);
	SMRATE	    : Decimal(4,2);
	SMRANKDIFF	: String(2);
}

entity SMGAMEINFO {
key	SQNUM		: Integer;
	GAMECLASS	: String(50);
    GAMENAME    : String(50);
}

entity SMNEWS01 {
key	ID		    : UUID;
    AUTHOR      : String(300);
	TITLE	    : String(200);
    DESCRIPTION : String(500);
	URL	        : String(200);
	PUBLISHEDAT	: Timestamp;
    PDATE : String(10);
    URLTOIMAGE : String(200);
}
entity SMNEWS02 {
    AUTHOR      : String(300);
	TITLE	    : String(200);
    DESCRIPTION : String(500);
key	URL	        : String(200);
	PUBLISHEDAT	: Timestamp;
    PDATE : String(10);
}
