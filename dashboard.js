(function(){
"use strict";
var dates=["01.04","02.04","03.04","04.04","05.04","06.04","07.04","08.04","09.04","10.04","11.04","12.04","13.04","14.04","15.04","16.04","17.04","18.04","19.04","20.04","21.04","22.04","23.04","24.04","25.04","26.04","27.04","28.04","29.04","30.04","01.05","02.05","03.05","04.05","05.05","06.05","07.05","08.05","09.05","10.05","11.05","12.05","13.05","14.05","15.05","16.05","17.05","18.05","19.05","20.05","21.05","22.05","23.05","24.05","25.05","26.05","27.05","28.05","29.05","30.05","31.05","01.06","02.06","03.06","04.06","05.06","06.06","07.06"];
var N=68,NK_MAT=2,PK_MAT=3,TR_MAT=7;
var JUN_START=61,DAYS_IN_JUN=30,PLAN=2185000000;

var nkZ=[19632,16487,16530,15646,16259,17302,18533,20720,18726,24435,17012,16220,12477,11913,14758,13858,13969,14304,15563,15740,14823,13668,14796,13220,13141,13855,14578,13652,12191,13023,12301,12614,13905,12762,12427,15283,13743,9439,9598,10987,11742,11460,10072,10822,11641,9537,10066,12071,11366,10498,11319,12324,11076,11380,11931,11231,8049,7086,7392,7207,7372,10324,9939,8474,7995,8849,9239,9211];
var nkAR=[8.35,7.48,7.12,8.53,7.93,6.23,5.33,4.55,5.00,4.22,4.94,5.60,9.24,8.05,8.62,10.80,9.36,8.28,8.26,8.72,8.41,8.78,9.49,8.31,7.39,8.50,8.31,8.84,9.80,10.68,10.22,8.74,9.25,10.49,9.64,8.38,8.95,7.82,7.89,7.92,8.29,7.44,8.69,7.66,9.51,10.73,9.78,10.30,9.52,10.16,13.25,11.14,10.13,9.15,10.25,9.66,7.04,6.19,5.63,4.98,5.16,7.96,9.22,10.87,10.26,10.61,7.57,5.26];
var nkARc=[8.35,7.48,7.12,8.53,7.93,6.23,5.33,4.55,5.00,4.22,4.94,5.60,9.24,8.05,8.62,10.80,9.36,8.28,8.26,8.72,8.41,8.78,9.49,8.31,7.39,8.50,8.31,8.84,9.80,10.68,10.22,8.74,9.25,10.49,9.64,8.38,8.95,7.82,7.89,7.92,8.29,7.44,8.69,7.66,9.51,10.73,9.78,10.30,9.52,10.16,13.25,11.14,10.13,9.15,10.25,9.66,7.04,6.19,5.63,4.98,5.16,8.01,9.27,10.98,10.48,10.94,8.94,11.22];
var nkO=[1429,1083,1020,1104,1143,960,876,843,823,937,739,796,1015,846,1115,1314,1139,1041,1128,1214,1100,953,1083,858,745,902,940,900,818,1061,963,829,960,1007,904,957,935,607,603,716,758,701,717,658,893,750,802,1001,906,881,1237,1156,931,862,1012,895,480,365,349,299,300,684,728,766,652,783,583,407];
var nkVyd=[6163500,11616800,12209500,10073850,11255700,13346150,12772050,11823200,10353550,11487900,10839350,11458200,13043600,12216150,17995650,19247550,16728400,15979550,18070750,18665450,16223650,15437300,14586600,15053700,12673550,13529400,15959150,14196200,12511600,15999350,14151050,12289000,15093500,12885950,9776400,11044800,14524850,10477800,10857300,13023350,13088050,15355850,12898150,12642500,15279250,12765900,12665750,17344200,15292500,15847700,15209900,15933400,15353500,14477750,16794350,14570950,7442800,4889450,4695050,4125650,3925200,11248400,10420200,9722700,9406500,7944000,10452300,10328250];
var nkTR=[67.33,78.18,76.53,80.64,77.18,73.63,81.70,81.39,77.24,78.72,81.69,86.04,83.62,85.29,84.76,83.96,84.73,82.29,84.02,82.15,64.82,80.23,64.23,82.42,83.62,84.89,82.46,82.08,79.77,82.69,84.90,86.91,84.85,81.17,75.62,66.17,55.85,78.85,82.92,87.05,82.22,86.08,85.69,84.19,82.90,80.69,81.56,86.46,83.58,86.27,87.03,86.47,91.51,89.25,87.95,86.78,82.57,80.37,79.73,84.09,76.80,86.12,82.87,58.18,73.96,58.82,85.59,87.99];
var nkTRc=[67.33,78.18,76.53,80.64,77.18,73.63,81.70,81.39,77.24,78.72,81.69,86.04,83.62,85.29,84.76,83.96,84.73,82.29,84.02,82.15,64.82,80.23,64.23,82.42,83.62,84.89,82.46,82.08,79.77,82.69,84.90,86.91,84.85,81.17,75.62,66.17,55.85,78.85,82.92,87.05,82.22,86.08,85.69,84.19,82.90,80.69,81.56,86.46,83.58,86.27,87.03,86.47,91.51,89.25,87.95,86.78,82.57,80.37,79.73,84.09,76.80,86.22,83.07,58.22,75.08,59.24,87.11,90.86];
var pkZ=[2263,2059,1816,1929,1847,2156,2001,2057,1931,2167,1969,1687,1702,1713,1738,1754,1662,1641,1758,1857,1757,1798,1590,1837,1736,1732,1815,1765,1683,1742,1543,1586,1676,1650,1540,1676,1396,1340,1214,1460,1450,1447,1329,1424,1624,1382,1302,1411,1525,1682,1623,1554,1456,1453,1744,1676,1227,1333,1289,1159,1151,1485,1421,1289,1216,1162,1230,1241];
var pkAR=[51.24,47.29,47.67,51.37,43.61,26.39,24.10,24.08,25.97,27.15,25.51,30.16,44.66,22.58,26.81,26.33,27.84,21.59,24.67,23.33,24.61,23.10,25.40,20.33,22.90,23.89,24.59,23.96,23.43,31.09,31.19,28.41,24.36,33.69,28.30,28.60,22.84,27.78,22.86,25.47,21.13,21.21,22.19,21.51,21.03,26.00,24.68,22.08,23.78,22.92,28.60,28.16,24.01,21.54,26.48,25.49,21.94,24.23,20.87,23.10,23.95,20.88,21.22,19.94,24.09,24.89,15.13,10.97];
var pkARc=[51.24,47.29,47.67,51.37,43.61,26.39,24.10,24.08,25.97,27.15,25.51,30.16,44.66,22.58,26.81,26.33,27.84,21.59,24.67,23.33,24.61,23.10,25.40,20.33,22.90,23.89,24.59,23.96,23.43,31.09,31.19,28.41,24.36,33.69,28.30,28.60,22.84,27.78,22.86,25.47,21.13,21.21,22.19,21.51,21.03,26.00,24.68,22.08,23.78,22.92,28.60,28.16,24.01,21.54,26.48,25.49,21.94,24.23,20.87,23.10,23.95,20.94,21.24,20.31,25.30,27.87,18.50,25.22];
var pkTR=[69.38,74.70,75.32,82.08,78.62,80.59,81.10,80.26,73.53,75.74,85.52,83.69,82.41,83.46,82.44,82.23,84.22,89.36,85.33,85.06,87.35,86.07,86.01,84.87,91.06,88.54,89.20,86.60,89.11,89.85,87.28,88.97,89.02,87.44,87.09,88.92,87.14,88.33,90.50,88.99,90.49,90.20,90.19,89.90,93.17,93.25,95.05,90.89,90.08,91.94,90.11,91.99,93.85,91.49,90.45,89.48,88.92,90.77,90.64,91.77,89.11,90.46,85.97,81.82,83.28,79.75,85.51,85.98];
var pkTRc=[69.38,74.70,75.32,82.08,78.62,80.59,81.10,80.26,73.53,75.74,85.52,83.69,82.41,83.46,82.44,82.23,84.22,89.36,85.33,85.06,87.35,86.07,86.01,84.87,91.06,88.54,89.20,86.60,89.11,89.85,87.28,88.97,89.02,87.44,87.09,88.92,87.14,88.33,90.50,88.99,90.49,90.20,90.19,89.90,93.17,93.25,95.05,90.89,90.08,91.94,90.11,91.99,93.85,91.49,90.45,89.48,88.92,90.77,90.64,91.77,89.11,90.59,86.22,81.98,84.10,80.56,87.57,90.69];
var pkVyd=[5017800,14993550,16675300,11680550,10446200,13192650,12125200,11730800,9778550,13879500,12327950,9337500,11318950,11632050,11916050,12073200,11331350,10808150,11827300,11293900,11711250,12829850,10175800,12449100,11051600,10931900,13221150,10673750,11902300,11865500,9772150,10790000,11125250,10522200,9645150,8365250,11025300,9993250,8474700,9842150,9516300,10913000,9772550,10788950,11566600,10818400,10136400,11107950,11681800,12254550,12102300,13227050,10440600,11335200,14540800,12386000,9205700,9720150,9619950,8522250,7577200,10240600,8666200,7316600,7998050,8529800,7640100,7760100];
var azClose=[1242,1347,1769,961,864,1515,1489,1420,1440,2460,1161,797,1640,1726,2076,1564,1467,1043,903,1692,1552,1363,1219,1526,1013,915,1438,1383,1450,1429,822,705,651,1025,1224,1053,1063,1475,738,746,793,1634,1432,1661,1854,1047,854,1317,1179,1375,1232,1308,895,717,1345,1521,1160,1289,1416,947,774,1300,1250,1434,1228,1418,972,754];
var azZ=[928,921,1232,689,743,1303,1065,983,955,1654,712,417,881,998,1101,1137,1061,515,481,1129,1477,952,4263,916,591,498,860,863,905,880,466,391,386,716,786,3540,1920,988,487,501,546,1159,1084,1175,1313,641,850,1134,857,930,838,897,540,641,937,1006,782,889,1913,566,688,909,2523,4131,3492,3358,2205,909];
var azAR=[81.18,63.99,62.67,82.16,70.80,38.09,38.88,38.12,39.84,36.85,38.94,41.30,65.68,38.83,36.07,36.47,39.67,39.74,38.98,41.00,46.67,39.13,54.16,37.25,39.56,36.22,38.81,38.94,38.84,42.87,44.37,45.00,41.41,50.68,41.76,45.58,49.78,41.30,40.70,47.68,39.36,34.09,39.87,44.73,38.41,44.12,27.82,43.39,41.58,41.84,40.17,41.29,40.22,29.25,42.00,39.80,41.03,37.71,44.20,42.53,24.38,40.57,47.59,50.89,53.08,56.92,43.42,19.87];
var azTR=[43.71,44.78,52.52,51.60,49.08,50.25,50.25,46.91,54.24,50.32,50.56,56.47,58.59,56.27,53.71,51.38,48.94,55.01,52.33,47.65,32.92,50.14,15.36,59.42,52.79,58.27,55.82,53.71,55.71,55.38,48.94,52.34,51.91,52.03,50.76,21.46,21.77,45.79,51.12,55.23,49.77,47.77,51.80,47.74,47.97,47.45,47.95,43.46,51.27,47.96,48.64,45.07,49.56,45.50,48.55,45.78,43.68,46.24,31.40,46.09,44.89,43.38,22.45,12.85,12.23,10.47,9.08,15.15];
var azTRc=[43.71,44.78,52.52,51.60,49.08,50.25,50.25,46.91,54.24,50.32,50.56,56.47,58.59,56.27,53.71,51.38,48.94,55.01,52.33,47.65,32.92,50.14,15.36,59.42,52.79,58.27,55.82,53.71,55.71,55.38,48.94,52.34,51.91,52.03,50.76,21.46,21.77,45.79,51.12,55.23,49.77,47.77,51.80,47.74,47.97,47.45,47.95,43.46,51.27,47.96,48.64,45.07,49.56,45.50,48.55,45.78,43.68,46.24,31.40,46.09,44.89,45.08,24.28,14.42,15.19,13.57,14.54,31.05];
var azVyd=[2496050,7342650,11278700,7941150,6495200,10570250,10998500,9805850,9027650,14014350,9501500,7194000,10072250,10461400,11229050,9921900,10061200,7294800,6015850,9930750,9125150,9197100,8761950,11103000,8590350,8293750,10408550,10270850,10691750,11034800,6690350,6181250,5404350,7276850,7726000,8726850,8866300,9266050,7267300,7743900,6910150,12739050,12008750,11676200,12752650,8529200,8342050,10488550,10841150,10709350,10181300,10321750,7339800,6615250,9341700,9935800,8177050,8284850,9869950,8669700,6806400,9607600,9603200,11475750,12335050,13127850,9814650,8955250];
var crAll=[2826,2741,2878,2434,2342,3513,2928,2782,2475,3420,2327,1979,2604,2676,3220,3360,3045,2577,2782,3504,4774,3053,8026,2999,2326,2418,3089,2858,3532,3038,2432,2185,2480,2654,2184,5511,5100,2543,2034,2398,2384,3065,2745,2879,3302,2394,2317,3193,2888,2884,2531,2585,2103,2052,2724,2456,1626,1316,1361,801,682,1303,1696,1843,2215,2198,1694,1157];
var crNK=[1272,1019,1007,1047,1131,1485,1218,1159,1017,1100,1003,1027,1168,1065,1635,1777,1539,1520,1676,1795,2251,1458,2025,1434,1197,1329,1517,1431,1523,1625,1430,1239,1541,1414,968,1432,2328,941,1050,1198,1246,1309,1070,1040,1418,1214,1248,1527,1420,1467,1270,1286,1184,1135,1249,1151,621,313,167,129,102,361,362,386,353,324,339,345];
var crPK=[1554,1722,1871,1387,1211,2028,1710,1623,1458,2320,1324,952,1436,1611,1585,1583,1506,1057,1106,1709,2523,1595,6001,1565,1129,1089,1572,1427,2009,1413,1002,946,939,1240,1216,4079,2772,1602,984,1200,1138,1756,1675,1839,1884,1180,1069,1666,1468,1417,1261,1299,919,917,1475,1305,1005,1003,1194,672,580,942,1334,1457,1862,1874,1355,812];
var crAR=[99.68,99.67,99.55,99.55,99.66,99.35,99.45,99.14,99.43,99.50,99.57,99.70,99.08,98.92,99.35,99.58,98.62,99.57,99.53,98.77,99.20,98.85,97.27,88.26,89.51,88.59,89.64,92.27,96.63,96.84,96.63,96.75,97.42,96.61,96.98,94.81,96.16,94.85,97.84,98.67,97.36,97.32,97.81,95.59,97.67,95.45,97.63,98.12,97.58,98.06,98.97,98.76,98.67,98.34,97.87,98.86,98.71,98.10,98.68,99.13,98.83,99.23,99.47,98.37,97.97,94.72,99.23,99.14];
var crTR=[7.49,16.36,31.10,31.70,30.51,29.83,32.83,31.11,29.01,30.12,32.15,33.10,33.06,34.34,34.54,30.54,30.54,33.24,34.67,29.90,21.35,31.01,11.25,31.39,29.63,29.13,29.07,29.50,26.43,32.94,28.98,30.61,30.30,30.58,28.05,15.20,17.76,28.11,32.76,33.60,34.47,31.48,31.55,30.85,28.87,30.33,29.71,29.91,31.90,32.46,32.02,32.51,33.35,32.95,32.67,29.49,31.15,32.46,26.51,31.36,29.67,27.84,20.75,15.77,12.12,13.21,10.53,11.42];
var crTRc=[7.49,16.36,31.10,31.70,30.51,29.83,32.83,31.11,29.01,30.12,32.15,33.10,33.06,34.34,34.54,30.54,30.54,33.24,34.67,29.90,21.35,31.01,11.25,31.39,29.63,29.13,29.07,29.50,26.43,32.94,28.98,30.61,30.30,30.58,28.05,15.20,17.76,28.11,32.76,33.60,34.47,31.48,31.55,30.85,28.87,30.33,29.71,29.91,31.90,32.46,32.02,32.51,33.35,32.95,32.67,29.49,31.15,32.46,26.51,31.36,29.67,29.39,23.19,18.80,15.58,17.74,16.18,21.76];
var crVyd=[6726500,7313000,18043500,19659250,19661100,22526900,23472050,21813250,21022850,25531900,18788050,19431550,21997950,22504500,25167600,24232900,23562150,22082150,24756450,26209200,23444200,24253150,22256950,20843850,18838500,18294300,23926100,21497850,19803700,24859300,19783250,17884600,19412050,20696550,16882300,20362550,20246200,17173800,18192200,20132600,18309800,27842200,20624550,21105050,24919850,19438650,21650950,25343100,23955750,26878350,22219750,23835150,20060350,19141150,22644450,20663950,16095600,15276150,13465750,11637600,10270000,12664500,11660800,10428050,10355000,11118550,10605600,10196350];
var vydTotal=[28443700,52417350,67757600,58060650,56083900,71338550,70714750,68817100,58117200,78146600,61931700,55759350,66425450,68680000,77886100,76667950,72749300,66303700,70031700,78782400,71973450,67964850,67892650,73018150,63096050,62601500,77030050,68860200,64322300,76118400,59902850,55072800,60966150,60432400,53045650,56341850,63048650,55835850,50939000,59674100,55812250,76647050,65817100,65272450,74884400,58186900,60711950,73084600,70401000,75272950,68071000,73285200,61490100,60192100,73322600,65833950,49931050,47021150,46362800,41657500,35062600,52994600,48149900,47345600,47429700,48899700,46076350,44465100];
var nkTrFrac=[1,0.9684,0.9826,0.9929,0.9851,0.9993,0.9976,0.9988];
var pkTrFrac=[1,0.9481,0.9765,0.9899,0.9903,0.9981,0.9971,0.9986];
var azTrFrac=[1,0.488,0.6246,0.7716,0.805,0.891,0.9246,0.9623];
var crTrFrac=[1,0.5247,0.6509,0.7445,0.7779,0.8388,0.8947,0.9474];
var CH=['#3b82f6','#8b5cf6','#10b981','#f59e0b','#ef4444','#06b6d4','#f472b6','#a78bfa','#34d399','#60a5fa'];
var chNames=['CPA API', 'CPA', 'LW', 'bankiru', 'leadstech', 'sravni', 'c2m', 'leadgid', 'Organic', 'Direct'];
var chZ=[
  [13296,11477,11771,10473,10788,11445,12080,11912,11115,17713,10596,9976,6245,4441,5282,4781,5231,5330,5868,5740,4701,4557,4540,4503,4489,4632,5025,4868,4481,4831,4723,4679,5042,4839,4638,4532,3729,3550,3574,4076,4309,3885,3194,3189,3212,1979,2750,3730,3660,3194,3514,3940,3641,3626,3827,3940,3212,3019,3137,3037,3124,3414,3207,2379,2311,3052,3143,3375],
  [5628,4320,4252,4583,4714,5096,5795,8110,6994,6073,5733,5622,5683,6809,8681,8273,7933,8208,8859,9153,8125,8179,7590,7861,7854,8387,8679,7959,6996,7522,6939,7285,8111,7163,7148,7661,6960,5292,5437,6224,6801,6931,6312,7097,7718,7003,6713,7682,7124,6667,7185,7883,6945,7163,7564,6754,4388,3650,3843,3745,3710,6532,6318,5241,4835,4932,5553,5296],
  [456,391,432,460,455,521,609,530,467,453,515,483,531,766,830,717,694,805,689,866,725,735,748,611,602,625,602,606,493,517,572,658,698,641,689,690,667,629,647,780,865,712,726,744,805,787,820,882,808,827,721,988,1088,1116,1032,917,249,22,22,21,24,591,766,758,725,691,665,794],
  [75,56,56,91,75,87,75,124,229,142,234,201,171,210,198,112,133,108,151,184,296,277,242,337,239,247,253,213,63,83,55,63,51,88,82,225,193,240,255,259,292,297,237,275,254,223,324,249,199,234,328,236,293,334,363,384,400,410,270,165,163,120,163,151,154,124,356,269],
  [894,532,500,814,716,637,713,775,752,568,497,582,712,756,1664,2117,1749,1629,2054,2147,1797,1819,1768,1705,1650,2032,2112,1736,1473,1636,1516,1466,2001,1473,1652,1855,1668,1253,1334,1514,1812,1843,1590,1854,1634,1700,1964,2234,2216,2143,2522,2535,2170,2081,2222,1620,369,40,31,26,29,2043,1615,987,954,1088,1261,1454],
  [709,628,624,635,785,852,770,796,731,650,717,733,754,865,842,878,850,1024,949,1010,964,1224,876,798,840,908,920,849,757,808,730,922,927,859,679,731,569,420,456,520,581,648,549,487,756,620,438,624,527,538,552,499,470,437,486,442,658,564,726,630,503,475,549,519,406,356,402,491],
  [98,62,69,88,73,91,34,37,47,61,114,94,105,76,136,197,169,208,155,181,212,218,197,186,221,156,176,137,110,98,118,108,131,102,119,93,98,130,79,135,84,84,73,75,123,207,174,163,159,163,201,187,192,158,183,182,53,5,1,2,5,152,202,189,129,123,197,162],
  [135,112,76,91,124,123,120,121,98,123,113,100,113,130,184,179,201,152,139,150,115,167,156,256,152,148,239,150,247,265,192,201,197,124,153,129,185,117,162,151,165,152,188,165,240,239,234,210,202,246,133,174,177,217,256,269,62,4,9,9,3,195,220,162,135,150,120,124],
  [221,257,187,217,260,185,236,264,197,175,210,201,185,243,249,236,249,250,277,270,315,319,283,267,272,291,294,267,232,284,279,284,309,273,238,249,289,206,208,241,219,263,231,244,216,216,256,289,220,240,288,273,271,270,240,249,226,223,220,217,205,223,224,237,235,196,216,258],
  [187,153,111,174,242,164,191,167,153,205,218,209,172,192,191,207,224,214,252,259,221,255,223,226,207,239,268,220,182,160,177,179,206,213,184,244,186,169,149,196,165,146,114,117,157,156,176,158,192,185,161,158,154,164,167,152,161,128,141,153,160,112,121,159,178,195,218,237]
];

function n2(v){return Math.round(+v).toLocaleString('ru-RU')}
function pct(v){return (+v).toFixed(2)+'%'}
function rubM(v){return (v/1e6).toFixed(1)+' млн'}
function rubB(v){return (v/1e9).toFixed(2)+' млрд'}
function delta(a,b){if(!+a||!+b)return null;return (b-a)/a*100}
function avg(arr,s,e){var t=0,c=0;for(var i=s;i<=e;i++)if(+arr[i]>0){t+=+arr[i];c++;}return c?t/c:0}
function sm(arr,s,e){var t=0;for(var i=s;i<=e;i++)t+=+arr[i];return t}
function dCell(d){
  if(d===null)return '<td class="delta neu">—</td>';
  var cls=d>1?'up':d<-1?'dn':'neu';
  return '<td class="delta '+cls+'">'+(d>=0?'+':'')+d.toFixed(1)+'%</td>';
}

/* RUN RATE */
(function(){
  var junDays=N-JUN_START;
  var daysLeft=DAYS_IN_JUN-junDays;
  function junSum(a){var t=0;for(var i=JUN_START;i<N;i++)t+=a[i];return t;}
  var factTot=junSum(vydTotal);
  var factNK=junSum(nkVyd),factPK=junSum(pkVyd),factAZ=junSum(azVyd),factCR=junSum(crVyd);
  var dailyAvg=factTot/junDays;
  var projected=dailyAvg*DAYS_IN_JUN;
  var pctDone=factTot/PLAN*100;
  var pctProj=projected/PLAN*100;
  var neededDay=(PLAN-factTot)/daysLeft;
  var gap=projected-PLAN;
  var onTrack=projected>=PLAN;

  // progress bar
  var bar=document.getElementById('rrBarFact');
  bar.style.width=Math.min(pctDone,100)+'%';
  bar.style.background=onTrack?'linear-gradient(90deg,#065f46,#059669)':'linear-gradient(90deg,#7f1d1d,#b91c1c)';
  document.getElementById('rrBarLbl').textContent=(factTot/1e6).toFixed(0)+' млн ('+pctDone.toFixed(1)+'% за '+junDays+' дн.)';
  // target marker at "needed pace" ratio
  var tgtPct=Math.min(neededDay*DAYS_IN_JUN/PLAN*100,99);
  var tgtEl=document.getElementById('rrBarTgt');
  tgtEl.style.left=tgtPct+'%';
  document.getElementById('rrBarTgtLbl').textContent='нужно '+rubM(neededDay)+'/д';

  var pctEl=document.getElementById('rrPct');
  pctEl.textContent='Прогноз '+(pctProj>=100?'✓ ':'')+pctProj.toFixed(0)+'%';
  pctEl.style.color=onTrack?'#4ade80':'#f87171';

  // KPI cards
  document.getElementById('rrCards').innerHTML=[
    {l:'Факт июня ('+junDays+' дн.)',v:rubB(factTot),s:'ср/д: '+rubM(dailyAvg),c:''},
    {l:'Run Rate (прогноз месяца)',v:rubB(projected),s:pctProj.toFixed(1)+'% от плана 2.185 млрд',c:onTrack?'ok':'warn'},
    {l:'Нужно в день',v:rubM(neededDay),s:'ещё '+daysLeft+' дн. · сейчас '+rubM(dailyAvg)+'/д',c:neededDay<=dailyAvg?'ok':'warn'},
    {l:'Разрыв (прогноз)',v:(gap>=0?'+':'')+rubB(gap),s:gap>=0?'опережение':'отставание от плана',c:gap>=0?'ok':'warn'},
  ].map(function(c){return '<div class="rr-card '+c.c+'"><div class="rr-card-lbl">'+c.l+'</div><div class="rr-card-val">'+c.v+'</div><div class="rr-card-sub">'+c.s+'</div></div>';}).join('');

  // By product
  var prods=[
    {n:'НК — Новый клиент',f:factNK,col:'#3b82f6'},
    {n:'ПК — Повторный клиент',f:factPK,col:'#10b981'},
    {n:'Автозаявки',f:factAZ,col:'#a78bfa'},
    {n:'Кроссы',f:factCR,col:'#f59e0b'},
  ];
  document.getElementById('rrProds').innerHTML=prods.map(function(p){
    var avd=p.f/junDays, proj=avd*DAYS_IN_JUN;
    return '<div class="rr-prod"><div class="rr-prod-name" style="color:'+p.col+'">'+p.n+'</div>'
      +'<div class="rr-prod-fact">'+rubM(p.f)+' <span style="font-size:10px;color:#475569">· '+rubM(avd)+'/д</span></div>'
      +'<div class="rr-prod-proj">→ прогноз: <strong style="color:'+p.col+'">'+rubM(proj)+'</strong></div></div>';
  }).join('');
})();

/* TOP 2-DAY TABLE */
(function(){
  var i1=N-2,i2=N-1;
  document.getElementById('d2dDates').textContent=dates[i1]+' → '+dates[i2]+'.2026';
  document.getElementById('th1').textContent=dates[i1];
  document.getElementById('th2').textContent=dates[i2];
  function row(label,v1,v2,fmt,note){
    var d=delta(+v1,+v2);
    var nh=note?'<span class="badge est">'+note+'</span>':'';
    return '<tr><td class="mc">'+label+nh+'</td>'
      +'<td class="v1" style="text-align:right">'+fmt(+v1)+'</td>'
      +'<td class="v2" style="text-align:right">'+fmt(+v2)+'</td>'
      +dCell(d)+'</tr>';
  }
  function seg(l){return '<tr><td class="seg" colspan="4">'+l+'</td></tr>';}
  var h='';
  h+=seg('НК — Новый клиент');
  h+=row('Заявки',nkZ[i1],nkZ[i2],n2);
  h+=row('AR (Approve Rate)',nkAR[i1],nkAR[i2],pct,'незр.');
  h+=row('AR* прогноз',nkARc[i1],nkARc[i2],pct,'скорр.');
  h+=row('Одобрено',nkO[i1],nkO[i2],n2);
  h+=row('TR (Take Rate)',nkTR[i1],nkTR[i2],pct,'незр.');
  h+=row('TR* прогноз',nkTRc[i1],nkTRc[i2],pct,'скорр.');
  h+=row('Выдачи',nkVyd[i1],nkVyd[i2],rubM);
  h+=seg('ПК — Повторный клиент');
  h+=row('Заявки',pkZ[i1],pkZ[i2],n2);
  h+=row('AR (Approve Rate)',pkAR[i1],pkAR[i2],pct,'незр.');
  h+=row('AR* прогноз',pkARc[i1],pkARc[i2],pct,'скорр.');
  h+=row('TR (Take Rate)',pkTR[i1],pkTR[i2],pct,'незр.');
  h+=row('TR* прогноз',pkTRc[i1],pkTRc[i2],pct,'скорр.');
  h+=row('Выдачи',pkVyd[i1],pkVyd[i2],rubM);
  h+=seg('Автозаявки');
  h+=row('Закрытий займов',azClose[i1],azClose[i2],n2);
  h+=row('Заявки АЗ',azZ[i1],azZ[i2],n2);
  h+=row('AR%',azAR[i1],azAR[i2],pct);
  h+=row('TR (Take Rate)',azTR[i1],azTR[i2],pct,'незр.');
  h+=row('TR* прогноз',azTRc[i1],azTRc[i2],pct,'скорр.');
  h+=row('Выдачи',azVyd[i1],azVyd[i2],rubM);
  h+=seg('Кроссы');
  h+=row('Всего',crAll[i1],crAll[i2],n2);
  h+=row('НК кроссы',crNK[i1],crNK[i2],n2);
  h+=row('ПК кроссы',crPK[i1],crPK[i2],n2);
  h+=row('AR%',crAR[i1],crAR[i2],pct);
  h+=row('TR (Take Rate)',crTR[i1],crTR[i2],pct,'незр.');
  h+=row('TR* прогноз',crTRc[i1],crTRc[i2],pct,'скорр.');
  h+=row('Выдачи',crVyd[i1],crVyd[i2],rubM);
  h+=seg('Итого ГК');
  h+=row('Итого выдачи',vydTotal[i1],vydTotal[i2],rubM);
  document.getElementById('d2dBody').innerHTML=h;

  /* Row click highlight */
  (function(){
    var lastSel=null;
    document.getElementById('d2dBody').addEventListener('click',function(e){
      var tr=e.target.closest('tr');
      if(!tr)return;
      if(tr.querySelector('td.seg'))return;
      if(tr===lastSel){tr.classList.remove('row-sel');lastSel=null;}
      else{if(lastSel)lastSel.classList.remove('row-sel');tr.classList.add('row-sel');lastSel=tr;}
    });
  })();
})();

/* DATE SELECTS */
(function(){
  ['aFrom','aTo','bFrom','bTo'].forEach(function(id){
    var s=document.getElementById(id);if(!s)return;
    dates.forEach(function(d,i){var o=document.createElement('option');o.value=i;o.textContent=d;s.appendChild(o);});
  });
  document.getElementById('aFrom').value=0;
  document.getElementById('aTo').value=55;
  document.getElementById('bFrom').value=56;
  document.getElementById('bTo').value=N-TR_MAT-1;
})();

document.querySelectorAll('.preset-btn').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.preset-btn').forEach(function(b){b.classList.remove('active');});
    btn.classList.add('active');
    var p=btn.dataset.preset,aF,aT=N-1,bF,bT;
    if(p==='7'){aF=N-7;bT=N-8;bF=N-14;}
    else if(p==='14'){aF=N-14;bT=N-15;bF=N-29;}
    else if(p==='30'){aF=N-30;bT=N-31;bF=Math.max(0,N-61);}
    else if(p==='may'){aF=30;aT=60;bF=0;bT=29;}
    else if(p==='apr'){aF=0;aT=29;bF=30;bT=60;}
    else if(p==='pre_post'){aF=0;aT=55;bF=56;bT=N-TR_MAT-1;}
    if(aF!==undefined){
      document.getElementById('aFrom').value=Math.max(0,aF);
      document.getElementById('aTo').value=Math.min(N-1,aT);
      document.getElementById('bFrom').value=Math.max(0,bF);
      document.getElementById('bTo').value=Math.min(N-1,bT);
    }
  });
});

window.runCmp=function(){
  var aF=+document.getElementById('aFrom').value,aT=+document.getElementById('aTo').value;
  var bF=+document.getElementById('bFrom').value,bT=+document.getElementById('bTo').value;
  if(aF>aT){var t=aF;aF=aT;aT=t;} if(bF>bT){var t=bF;bF=bT;bT=t;}
  document.getElementById('thA').textContent='A: '+dates[aF]+'–'+dates[aT];
  document.getElementById('thB').textContent='B: '+dates[bF]+'–'+dates[bT];
  var mets=[
    ['НК Заявки (ср/д)',nkZ,avg,n2],['НК AR* (ср)',nkARc,avg,pct],['НК TR* (ср)',nkTRc,avg,pct],
    ['НК Одобрения (ср/д)',nkO,avg,n2],['НК Выдачи (сумма)',nkVyd,sm,rubM],
    ['ПК Заявки (ср/д)',pkZ,avg,n2],['ПК AR* (ср)',pkARc,avg,pct],['ПК TR* (ср)',pkTRc,avg,pct],['ПК Выдачи (сумма)',pkVyd,sm,rubM],
    ['АЗ Закрытий (ср/д)',azClose,avg,n2],['АЗ Заявки (ср/д)',azZ,avg,n2],['АЗ TR* (ср)',azTRc,avg,pct],['АЗ Выдачи (сумма)',azVyd,sm,rubM],
    ['Кроссы Всего (ср/д)',crAll,avg,n2],['Кроссы НК (ср/д)',crNK,avg,n2],['Кроссы ПК (ср/д)',crPK,avg,n2],
    ['Кроссы TR* (ср)',crTRc,avg,pct],['Кроссы Выдачи (сумма)',crVyd,sm,rubM],
    ['Итого ГК Выдачи (сумма)',vydTotal,sm,rubM],
  ];
  var h='';
  mets.forEach(function(m){
    var vA=m[2](m[1],aF,aT),vB=m[2](m[1],bF,bT);
    var d=vA&&vB?delta(vA,vB):null;
    var dc=d===null?'delta-neu':d>0?'delta-up':'delta-dn';
    var ds=d!==null?(d>=0?'+':'')+d.toFixed(1)+'%':'—';
    h+='<tr><td class="mc">'+m[0]+'</td><td class="val-a">'+m[3](vA)+'</td><td class="val-b">'+m[3](vB)+'</td><td class="'+dc+'">'+ds+'</td></tr>';
  });
  document.getElementById('cmpBody').innerHTML=h;
  document.getElementById('cmpResult').style.display='block';
};
setTimeout(runCmp,100);

/* SVG CHART */
function makeSVG(id,series,opts){
  opts=opts||{};
  var el=document.getElementById(id);if(!el)return;
  var W=el.offsetWidth||900,H=el.offsetHeight||200;if(W<50)W=900;
  var pad={l:42,r:10,t:12,b:24};
  var pw=W-pad.l-pad.r,ph=H-pad.t-pad.b;
  var all=[];
  series.forEach(function(s){s.data.forEach(function(v){if(v!==null&&+v>0)all.push(+v);});});
  var mn=opts.min!==undefined?opts.min:Math.min.apply(null,all)*0.88;
  var mx=opts.max!==undefined?opts.max:Math.max.apply(null,all)*1.05;
  if(!all.length||mn===mx){mn=0;mx=1;}
  function xp(i){return pad.l+i/(N-1)*pw}
  function yp(v){return pad.t+ph-(v-mn)/(mx-mn)*ph}
  var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+W+'" height="'+H+'" style="display:block">';
  for(var g=0;g<=4;g++){
    var gy=pad.t+ph*g/4,gv=mx-(mx-mn)*g/4;
    svg+='<line x1="'+pad.l+'" y1="'+gy+'" x2="'+(W-pad.r)+'" y2="'+gy+'" stroke="#1e2d45" stroke-width="1"/>';
    svg+='<text x="'+(pad.l-3)+'" y="'+(gy+4)+'" text-anchor="end" font-size="9" fill="#4b5563">'+Math.round(gv).toLocaleString('ru-RU')+'</text>';
  }
  if(opts.shade){var i27=dates.indexOf('27.05');if(i27>=0){var sx=xp(i27);svg+='<rect x="'+sx+'" y="'+pad.t+'" width="'+(W-pad.r-sx)+'" height="'+ph+'" fill="#f59e0b" fill-opacity="0.04"/><line x1="'+sx+'" y1="'+pad.t+'" x2="'+sx+'" y2="'+(pad.t+ph)+'" stroke="#f59e0b" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/><text x="'+(sx+3)+'" y="'+(pad.t+9)+'" font-size="8" fill="#f59e0b" opacity="0.8">27.05</text>';}}
  if(opts.immFrom!==undefined){var ix=xp(opts.immFrom);svg+='<rect x="'+ix+'" y="'+pad.t+'" width="'+(W-pad.r-ix)+'" height="'+ph+'" fill="#7f1d1d" fill-opacity="0.1"/><text x="'+(ix+3)+'" y="'+(pad.t+9)+'" font-size="8" fill="#f87171" opacity="0.7">≈незрелые</text>';}
  var step=Math.ceil(N/12);
  for(var xi=0;xi<N;xi+=step)svg+='<text x="'+xp(xi)+'" y="'+(H-5)+'" text-anchor="middle" font-size="9" fill="#4b5563">'+dates[xi]+'</text>';
  series.forEach(function(s){
    var pts='',dash=s.dashed?'stroke-dasharray="4,3"':'';
    s.data.forEach(function(v,i){if(v!==null&&+v>0)pts+=(pts===''?'M':'L')+xp(i)+','+yp(+v);});
    if(pts)svg+='<path d="'+pts+'" fill="none" stroke="'+s.color+'" stroke-width="'+(s.w||1.8)+'" '+dash+' stroke-linejoin="round" stroke-linecap="round" opacity="'+(s.op||0.9)+'"/>';
  });
  svg+='</svg>';el.innerHTML=svg;
}

function drawMat(id,frac,color){
  var el=document.getElementById(id);if(!el)return;
  var W=el.offsetWidth||300,H=130,pad={l:30,r:8,t:14,b:22};
  var pw=W-pad.l-pad.r,ph=H-pad.t-pad.b,days=frac.length;
  function xp(i){return pad.l+i/(days-1)*pw} function yp(v){return pad.t+ph-(v/1.05)*ph}
  var svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+W+'" height="'+H+'">';
  [0,0.25,0.5,0.75,1.0].forEach(function(v){var gy=yp(v);svg+='<line x1="'+pad.l+'" y1="'+gy+'" x2="'+(W-pad.r)+'" y2="'+gy+'" stroke="#1e2d45" stroke-width="1"/><text x="'+(pad.l-2)+'" y="'+(gy+4)+'" text-anchor="end" font-size="8" fill="#4b5563">'+(v*100).toFixed(0)+'%</text>';});
  var y95=yp(0.95);svg+='<line x1="'+pad.l+'" y1="'+y95+'" x2="'+(W-pad.r)+'" y2="'+y95+'" stroke="#4ade80" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/><text x="'+(pad.l+3)+'" y="'+(y95-3)+'" font-size="8" fill="#4ade80" opacity="0.7">95%</text>';
  for(var i=0;i<days;i++)svg+='<text x="'+xp(i)+'" y="'+(H-5)+'" text-anchor="middle" font-size="8" fill="#4b5563">д.'+i+'</text>';
  var pts=frac.map(function(v,i){return xp(i)+','+yp(v);}).join(' L ');
  svg+='<polyline points="'+pts+'" fill="none" stroke="'+color+'" stroke-width="2"/>';
  frac.forEach(function(v,i){svg+='<circle cx="'+xp(i)+'" cy="'+yp(v)+'" r="3" fill="'+color+'"/><text x="'+xp(i)+'" y="'+(yp(v)-5)+'" text-anchor="middle" font-size="8" fill="'+color+'">'+Math.round(v*100)+'%</text>';});
  svg+='</svg>';el.innerHTML=svg;
}

function drawAll(){
  makeSVG('nkARChart',[{data:nkAR,color:'#3b82f6',w:2},{data:nkARc.map(function(v,i){return i>=N-NK_MAT?v:null;}),color:'#93c5fd',w:1.5,dashed:true,op:0.8}],{shade:true,immFrom:N-NK_MAT});
  makeSVG('nkZChart',[{data:nkZ,color:'#3b82f6',w:2},{data:nkO.map(function(v){return v*10;}),color:'#10b981',w:1.5,op:0.8},{data:nkVyd.map(function(v){return v/10000;}),color:'#f59e0b',w:1.5,op:0.7}],{shade:true});
  makeSVG('pkARChart',[{data:pkAR,color:'#10b981',w:2},{data:pkARc.map(function(v,i){return i>=N-PK_MAT?v:null;}),color:'#6ee7b7',w:1.5,dashed:true,op:0.8}],{shade:true,immFrom:N-PK_MAT});
  makeSVG('pkZChart',[{data:pkZ,color:'#10b981',w:2}],{shade:true});
  makeSVG('azChart',[{data:azClose,color:'#a78bfa',w:2},{data:azZ,color:'#c084fc',w:1.5,op:0.8},{data:azAR.map(function(v){return v*10;}),color:'#e879f9',w:1.5,op:0.7}],{});
  makeSVG('crChart',[{data:crAll,color:'#f59e0b',w:2},{data:crNK,color:'#3b82f6',w:1.5,op:0.8},{data:crPK,color:'#10b981',w:1.5,op:0.7}],{shade:true});
  drawMat('nkMatChart',[0.469,0.847,0.970,0.979,0.990,0.995,1.000],'#3b82f6');
  drawMat('pkMatChart',[0.435,0.818,0.893,0.952,0.982,0.999,1.000],'#10b981');
  drawMat('azTrMatChart',[0,0.488,0.625,0.772,0.805,0.891,0.925,0.962],'#a78bfa');
  drawMat('crTrMatChart',[0,0.525,0.651,0.745,0.778,0.839,0.895,0.947],'#f59e0b');
}
drawAll();

/* MATURATION INFO BARS */
(function(){
  function buildRows(rawAR,corrAR,arMat,rawTR,corrTR,trFrac,color){
    var n=Math.max(arMat,TR_MAT),h='';
    for(var i=0;i<n;i++){
      var idx=N-1-i,age=i+1;
      var arIm=(i<arMat);
      var arPart=arIm?'AR: <span class="mat-raw">'+rawAR[idx].toFixed(2)+'%</span><span class="mat-arrow">→</span><span class="mat-exp" style="color:'+color+'">'+corrAR[idx].toFixed(1)+'%*</span>':'AR: <span style="color:#4ade80">'+rawAR[idx].toFixed(2)+'% ✓</span>';
      var trF=trFrac[age]||1;
      var trPart='TR: <span class="mat-raw">'+rawTR[idx].toFixed(1)+'%</span><span class="mat-arrow">→</span><span class="mat-exp" style="color:#fbbf24">'+corrTR[idx].toFixed(1)+'%*</span><span class="mat-pct" style="background:#92400e44;color:#fbbf24">'+Math.round(trF*100)+'%вызр</span>';
      h+='<div class="mat-info-row"><span class="mat-date">'+dates[idx]+'</span><span class="mat-age">(д.'+age+')</span>'+arPart+'&nbsp;|&nbsp;'+trPart+'</div>';
    }
    return h;
  }
  function buildTROnly(rawTR,corrTR,trFrac,color){
    var h='';
    for(var i=0;i<TR_MAT;i++){
      var idx=N-1-i,age=i+1,trF=trFrac[age]||1;
      h+='<div class="mat-info-row"><span class="mat-date">'+dates[idx]+'</span><span class="mat-age">(д.'+age+')</span>TR: <span class="mat-raw">'+rawTR[idx].toFixed(1)+'%</span><span class="mat-arrow">→</span><span class="mat-exp" style="color:'+color+'">'+corrTR[idx].toFixed(1)+'%*</span><span class="mat-pct" style="background:'+color+'33;color:'+color+'">'+Math.round(trF*100)+'% вызр</span></div>';
    }
    return h;
  }
  document.getElementById('nkMatRows').innerHTML=buildRows(nkAR,nkARc,NK_MAT,nkTR,nkTRc,nkTrFrac,'#3b82f6');
  document.getElementById('pkMatRows').innerHTML=buildRows(pkAR,pkARc,PK_MAT,pkTR,pkTRc,pkTrFrac,'#10b981');
  document.getElementById('azMatRows').innerHTML=buildTROnly(azTR,azTRc,azTrFrac,'#a78bfa');
  document.getElementById('crMatRows').innerHTML=buildTROnly(crTR,crTRc,crTrFrac,'#f59e0b');
})();

/* CHANNEL CARDS */
(function(){
  var g=document.getElementById('nkChGrid');if(!g)return;
  var avgs=chZ.map(function(arr){var s=0,c=0;for(var i=N-7;i<N;i++)if(arr[i]>0){s+=arr[i];c++;}return c?s/c:0;});
  var mx=Math.max.apply(null,avgs)||1;
  g.innerHTML=avgs.map(function(a,i){return '<div class="ch-card"><div class="ch-card-name">'+chNames[i]+'</div><div class="ch-card-val">'+Math.round(a).toLocaleString('ru-RU')+'</div><div class="ch-bar"><div class="ch-bar-fill" style="width:'+((a/mx*100).toFixed(0))+'%;background:'+CH[i]+'"></div></div></div>';}).join('');
})();

/* LEAD GEN ACCORDION */
(function(){
  var ldPeriod=14;
  var ldSel=null;

  function sparkSVG(arr,color){
    var W=80,H=28,pad=3;
    var mn=Math.min.apply(null,arr),mx=Math.max.apply(null,arr);
    if(mx===mn)mx=mn+1;
    var xp=function(i){return pad+(W-2*pad)*i/(arr.length-1);};
    var yp=function(v){return H-pad-(H-2*pad)*(v-mn)/(mx-mn);};
    var pts=arr.map(function(v,i){return xp(i)+','+yp(v);}).join(' ');
    var last=arr[arr.length-1];
    return '<svg width="'+W+'" height="'+H+'" xmlns="http://www.w3.org/2000/svg">'
      +'<polyline points="'+pts+'" fill="none" stroke="'+color+'" stroke-width="1.5" stroke-linejoin="round"/>'
      +'<circle cx="'+xp(arr.length-1)+'" cy="'+yp(last)+'" r="2.5" fill="'+color+'"/>'
      +'</svg>';
  }

  window.buildLd=function(){
    var P=ldPeriod,N2=N;
    var s=Math.max(0,N2-P),e=N2-1;
    var sp=Math.max(0,s-P),ep=s-1;
    // Header
    var hh='<tr><th>Канал</th>';
    for(var d=s;d<=e;d++)hh+='<th style="text-align:right">'+dates[d]+'</th>';
    hh+='<th style="text-align:right">Сумма</th><th style="text-align:right">Пред. период</th><th style="text-align:right">Δ%</th><th class="spark-h">Тренд</th></tr>';
    document.getElementById('ldHead').innerHTML=hh;

    // Rows — sort by current period sum desc
    var rows=chZ.map(function(arr,i){
      var cur=0;for(var d=s;d<=e;d++)cur+=arr[d];
      var prev=0;if(ep>=sp)for(var d=sp;d<=ep;d++)prev+=arr[d];
      return {i:i,arr:arr,cur:cur,prev:prev};
    });
    rows.sort(function(a,b){return b.cur-a.cur;});

    var totalCur=0,totalPrev=0;
    rows.forEach(function(r){totalCur+=r.cur;totalPrev+=r.prev;});

    var bh='';
    rows.forEach(function(r){
      var pct=r.prev>0?((r.cur-r.prev)/r.prev*100):0;
      var pctCls=pct>5?'ld-pct-up':pct<-5?'ld-pct-dn':'ld-pct-neu';
      var pctStr=(r.prev>0?(pct>=0?'+':'')+pct.toFixed(1)+'%':'—');
      var spark=sparkSVG(r.arr.slice(Math.max(0,N2-Math.max(P,14)),N2),CH[r.i]);
      bh+='<tr><td><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:'+CH[r.i]+';margin-right:6px"></span>'+chNames[r.i]+'</td>';
      for(var d=s;d<=e;d++)bh+='<td>'+(r.arr[d]>0?Math.round(r.arr[d]).toLocaleString('ru-RU'):'—')+'</td>';
      bh+='<td class="ld-sum">'+Math.round(r.cur).toLocaleString('ru-RU')+'</td>';
      bh+='<td class="ld-avg">'+(r.prev>0?Math.round(r.prev).toLocaleString('ru-RU'):'—')+'</td>';
      bh+='<td class="'+pctCls+'">'+pctStr+'</td>';
      bh+='<td class="ld-spark">'+spark+'</td></tr>';
    });

    // Total row
    var totPct=totalPrev>0?((totalCur-totalPrev)/totalPrev*100):0;
    var totCls=totPct>5?'ld-pct-up':totPct<-5?'ld-pct-dn':'ld-pct-neu';
    bh+='<tr style="border-top:2px solid #2d3748;font-weight:700"><td style="color:#f1f5f9">Итого</td>';
    var dayTotals={};
    for(var d=s;d<=e;d++){var t=0;chZ.forEach(function(arr){t+=arr[d];});dayTotals[d]=t;bh+='<td style="color:#f1f5f9">'+Math.round(t).toLocaleString('ru-RU')+'</td>';}
    bh+='<td class="ld-sum">'+Math.round(totalCur).toLocaleString('ru-RU')+'</td>';
    bh+='<td class="ld-avg">'+(totalPrev>0?Math.round(totalPrev).toLocaleString('ru-RU'):'—')+'</td>';
    bh+='<td class="'+totCls+'">'+(totalPrev>0?(totPct>=0?'+':'')+totPct.toFixed(1)+'%':'—')+'</td>';
    bh+='<td></td></tr>';
    document.getElementById('ldBody').innerHTML=bh;
    document.getElementById('ldSub').textContent='НК · '+chZ.length+' каналов · последние '+P+' дн.';

    // Row click
    ldSel=null;
    document.getElementById('ldBody').addEventListener('click',function(e){
      var tr=e.target.closest('tr');if(!tr)return;
      if(ldSel===tr){tr.classList.remove('ld-sel');ldSel=null;}
      else{if(ldSel)ldSel.classList.remove('ld-sel');tr.classList.add('ld-sel');ldSel=tr;}
    },{once:true});
    // Re-attach after rebuild
  };

  window.toggleLd=function(){
    var p=document.getElementById('ldPanel');
    var opening=!p.classList.contains('open');
    p.classList.toggle('open');
    if(opening)window.buildLd();
  };

  window.setLdPeriod=function(btn){
    document.querySelectorAll('.ld-filter-btn').forEach(function(b){b.classList.remove('active');});
    btn.classList.add('active');
    ldPeriod=+btn.dataset.ld;
    window.buildLd();
  };
})();

/* SUMMARY TABLE */
(function(){
  var weeks=[
    {label:'01–07.04',s:0,e:6},{label:'08–14.04',s:7,e:13},
    {label:'15–21.04',s:14,e:20},{label:'22–28.04',s:21,e:27},
    {label:'29.04–05.05',s:28,e:34},{label:'06–12.05',s:35,e:41},
    {label:'13–19.05',s:42,e:48},{label:'20–26.05',s:49,e:55},
    {label:'27.05–02.06',s:56,e:62,note:'▲НК порог'},
    {label:'03–07.06',s:63,e:67,note:'≈незр.TR'},
  ];
  var t=document.getElementById('summTable');
  var h='<thead><tr><th>Неделя</th><th>НК Заявки</th><th>НК AR*</th><th>НК TR*</th><th>ПК Заявки</th><th>ПК TR*</th><th>АЗ TR*</th><th>CR TR*</th><th>Выдачи ГК</th></tr></thead><tbody>';
  weeks.forEach(function(w,wi){
    var p=weeks[wi-1];
    function td(arr,fmt){
      var v=avg(arr,w.s,w.e),pv=p?avg(arr,p.s,p.e):null;
      var d=pv?delta(pv,v):null;
      var cls=d===null?'':d>5?'trend-up':d<-5?'trend-dn':'';
      return '<td class="'+cls+'">'+(fmt?fmt(v):n2(Math.round(v)))+(d!==null?' <small style="font-size:9px">'+(d>=0?'+':'')+d.toFixed(0)+'%</small>':'')+'</td>';
    }
    var vydSum=sm(vydTotal,w.s,w.e);
    h+='<tr><td>'+w.label+(w.note?'<br><span style="font-size:10px;color:#64748b">'+w.note+'</span>':'')+'</td>'
      +td(nkZ)+td(nkARc,pct)+td(nkTRc,pct)+td(pkZ)+td(pkTRc,pct)+td(azTRc,pct)+td(crTRc,pct)
      +'<td>'+rubM(vydSum)+'</td></tr>';
  });
  t.innerHTML=h+'</tbody>';
})();

/* ALERTS */
(function(){
  var crNK_may=avg(crNK,49,55),crNK_post=avg(crNK,56,60);
  var nkAR_may=avg(nkARc,49,55),nkAR_post=avg(nkARc,56,60);
  var pkAR_may=avg(pkARc,49,55),pkAR_post=avg(pkARc,56,60);
  var azTR_may=avg(azTRc,49,55),azTR_post=avg(azTRc,56,60);
  var factTot=0;for(var i=JUN_START;i<N;i++)factTot+=vydTotal[i];
  var junDays=N-JUN_START,projected=factTot/junDays*DAYS_IN_JUN;
  document.getElementById('alertGrid').innerHTML=[
    {type:'warn',title:'⚠ Run Rate выдач: '+((projected/PLAN*100).toFixed(0))+'% от плана 2.185 млрд',body:
      'Факт июня ('+junDays+' дн.): <strong>'+rubM(factTot)+'</strong>, ср/д '+rubM(factTot/junDays)+'. '
      +'Прогноз месяца: <strong>'+rubM(projected)+'</strong>. '
      +'Нужно в день: <strong>'+rubM((PLAN-factTot)/(DAYS_IN_JUN-junDays))+'</strong> vs текущих '+rubM(factTot/junDays)+'.'},
    {type:'info',title:'🔬 Вызревание: AR НК 2д / ПК 3д · TR все сегменты 7 дней',body:
      '<strong>AR НК 07.06</strong>: raw '+nkAR[N-1].toFixed(2)+'% → прогноз '+nkARc[N-1].toFixed(1)+'%.<br>'
      +'<strong>TR АЗ 07.06</strong>: raw '+azTR[N-1].toFixed(1)+'% → прогноз '+azTRc[N-1].toFixed(1)+'% (д.1=49% вызр.).<br>'
      +'<strong>TR Кроссы 07.06</strong>: raw '+crTR[N-1].toFixed(1)+'% → прогноз '+crTRc[N-1].toFixed(1)+'% (д.1=52% вызр.).'},
    {type:'warn',title:'⚠ Новый клиент AR: реальное падение после 27.05',body:
      'Зрелые 20–26.05: <strong>'+nkAR_may.toFixed(1)+'%</strong> → 27.05–02.06: <strong>'+nkAR_post.toFixed(1)+'%</strong> ('+(delta(nkAR_may,nkAR_post)).toFixed(0)+'%). '
      +'Причина: скор-порог 500→600/700. Начало июня: восстановление.'},
    {type:'warn',title:'⚠ АЗ и Кроссы TR: падение после 27.05',body:
      'АЗ TR зрелый: 20–26.05: <strong>'+azTR_may.toFixed(1)+'%</strong> → после 27.05: <strong>'+azTR_post.toFixed(1)+'%</strong>. '
      +'Связано с ужесточением НК скор-порога.'},
    {type:'warn',title:'⚠ Кроссы НК: -'+Math.abs(delta(crNK_may,crNK_post)).toFixed(0)+'% после 27.05',body:
      'Ср. 20–26.05: '+Math.round(crNK_may)+' шт/д → после 27.05: '+Math.round(crNK_post)+' шт/д.'},
    {type:'ok',title:'✓ Повторный клиент AR: частично сезонное',body:
      'Зрелые: '+pkAR_may.toFixed(1)+'% → '+pkAR_post.toFixed(1)+'%. Прогноз 07.06: '+pkARc[N-1].toFixed(1)+'% — близко к норме.'},
  ].map(function(a){return '<div class="alert-card '+a.type+'"><div class="alert-title">'+a.title+'</div><div class="alert-body">'+a.body+'</div></div>';}).join('');
})();

var _rt;
window.addEventListener('resize',function(){clearTimeout(_rt);_rt=setTimeout(drawAll,200);});

})();
