using SM.POC as my2 from '../db/sm-schema';

service CatalogService2 {
    entity SMGAMEOVR as projection on my2.SMGAMEOVR;
        annotate SMGAMEOVR with @odata.draft.enabled; 

    entity SMTOPGAME as projection on my2.SMTOPGAME;
        annotate SMTOPGAME with @odata.draft.enabled; 

    entity SMNEWS01 as projection on my2.SMNEWS01;
    entity SMNEWS02 as projection on my2.SMNEWS02;
    entity SMGAMEINFO as projection on my2.SMGAMEINFO;

    entity SMNEWS01_VW2 as
    select PDATE, CAST (COUNT(*) as Integer) AS PCNT
    from my2.SMNEWS01
    group by PDATE;

//gather news from external
    action gatherNewsAPI();
    action gatherNewsAPIKO();
    action gatherNewsAPI1D(sdate: String);
    action gatherNewsAPI1DKO(sdate: String);

}