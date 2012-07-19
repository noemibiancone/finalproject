// DOMAINS

var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([100,100]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,1]);

// COLORS - All colors are normalized.

var mattBurgundy = [139/255, 0, 0, 1];
var mattCoralRed = [240/255,128/255, 128/255, 1];


/* This function creates an array of knots used by the function nubs. The function takes as input an array of control points. It returns an array of knots. 

   INPUT - An array of points

   OUTPUT - An array of knots.

*/

function knots (point) {
  var k = 2; 
  var m =point.length;
  var n = (m + k + 1);
  var first = 1;
  var last = n - 3;

  var knots = [];

  for (var i = 0; i < 3; i++) {
     knots[i] = 0;
    };

  for (var i = 3; i < last; i++,first++) {
     knots[i] = first;

    };

  for (var i = last; i < n; i++) {
     knots[i] = first;
    };

  return knots;
};

/* This function creates a curve with the function Nubs. The function takes as input an array of control points. It returns to the curve. 

   INPUT - An array of points
   
   OUTPUT - A curve built with the function NUBS

*/

function createNubs (point) {
	
	var knots1 = knots(point);
	var c1 = NUBS(S0)(2)(knots1)(point);
  //var c1Map = MAP(c1)(domain1)
  //DRAW(c1Map)
		return c1;
}

/* This function creates a Bezier curve. The function takes as input an array of curves. It returns to the Bezier curve. 

   INPUT - An array of curves

   OUTPUT - A Bezier curve

*/

function createBezierS1(curves) {
  var b1 = BEZIER(S1)(curves);
  //var b1Map = MAP(b1)(domain2);
  //DRAW(b1Map)
  return b1;
}

/* This function creates a Bezier curve. The function takes as input an array of curves and a color. It returns to the drawing of curves. 

   INPUT - An array of curves and a color

   OUTPUT - A Bezier curve

*/

function createBezierS2 (curves, color) {
  var b1 = BEZIER(S2)(curves);
  var b1Map = MAP(b1)(domain3);
  return DRAW(COLOR(color)(b1Map));
}

/* This function modifies the third element in an array. It takes in input an array of points and a quantity z. It returns to the modified array. 
 
   INPUT - An array of control points and a quatity z.

   OUTPUT - A modified array. 

*/

function modifyZ(points, z) {
  var pointsNew = [];
  pointsNew[0]=points[0];
  pointsNew[1] = points[1];
  pointsNew[2] = points[2]+z;
  return pointsNew;
}

/* This function creates a new array of control points that are modified. It takes in input and array of control points and a breadth. It returns the modified array.
 
   INPUT - An array of control points and a breadth.

   OUTPUT - A modified array. 

*/

function createControls(controls, breadth) {
  var controlsRet = [];
    controlsRet[0] = controls[0];
    controlsRet[1] = modifyZ(controls[1], breadth)
    controlsRet[2] = modifyZ(controls[2], breadth)
    controlsRet[3] = controls[3];
    return controlsRet; 
}

/* This function creates a Bezier curve. It takes in input an initial point, a final point and an array of points. It returns the Bezier curve. 
 
   INPUT - An initial point, a final point and an array of points.

   OUTPUT - A Bezier curve. 

*/

function createCurveSurface(pointStart, pointFinal, points) {
  var nubs = [];
  nubs.push(pointStart);
  var j = 1;
  for(var i=0; i<points.length; i++) {
      nubs[j] = createNubs(points[i]);
      DRAW(nubs[j]);
      j++;
  }
  nubs.push(pointFinal);

  return createBezierS1(nubs);
    }



//---------------------------------------------------------------------------MITOCHONDRION 2-------------------------------------------------------------------

var controlsMitoIn21 = [[275.30682373046875,187.46266174316406,0],[273.8854675292969,185.22909545898438,0],[272.97174072265625,183.7062225341797,0],[272.56561279296875,182.2848663330078,0],[272.3625793457031,180.86349487304688,0],[272.3625793457031,179.84825134277344,0],[272.6671447753906,179.3406219482422,0],[273.4793701171875,179.442138671875,0],[273.783935546875,179.94976806640625,0],[274.49462890625,180.3558807373047,0],[277.23687744140625,181.8302764892578,0],[279.6438293457031,182.1741180419922,0],[281.4776916503906,180.51217651367188,0],[281.1953125,178.2238311767578,0],[279.97698974609375,175.58416748046875,0],[279.4693603515625,174.26434326171875,0],[278.8602294921875,173.04603576660156,0],[278.35260009765625,171.62466430664062,0],[278.8602294921875,170.5078887939453,0],[279.0632629394531,170.20330810546875,0],[279.4693603515625,170.00025939941406,0],[280.3830871582031,170.20330810546875,0],[281.9059753417969,171.11705017089844,0],[283.32733154296875,172.5384063720703,0],[285.6624450683594,174.16281127929688,0],[289.21435546875,174.60939025878906,0],[292.19439697265625,174.32284545898438,0],[293.6829528808594,171.82772827148438,0],[292.5382385253906,169.10777282714844,0],[290.9336242675781,167.27389526367188,0],[288.606689453125,164.41635131835938,0],[288.09906005859375,162.9949951171875,0],[287.7944641113281,161.57363891601562,0],[288.09906005859375,160.8629608154297,0],[288.8097229003906,160.55838012695312,0],[289.5204162597656,160.55838012695312,0],[290.76458740234375,160.96766662597656,0],[291.96148681640625,161.80874633789062,0],[292.6084899902344,162.3263397216797,0],[293.47991943359375,162.69041442871094,0],[294.79974365234375,163.70567321777344,0],[295.7134704589844,164.61940002441406,0],[298.2516174316406,166.2438201904297,0],[298.3531188964844,166.3453369140625,0],[300.78973388671875,166.44686889648438,0],[303.312255859375,165.49732971191406,0],[304.8595886230469,163.26229858398438,0],[304.4446716308594,160.15228271484375,0],[302.82025146484375,158.12176513671875,0],[301.9065246582031,156.09124755859375,0],[300.5867004394531,154.0607452392578,0],[300.18060302734375,153.14700317382812,0],[300.18060302734375,152.33480834960938,0],[300.0790710449219,152.33480834960938,0],[300.2821350097656,151.4210662841797,0],[300.78973388671875,151.218017578125,0],[301.50042724609375,151.218017578125,0],[302.4141540527344,151.4210662841797,0],[303.6324768066406,152.1317596435547,0],[304.4446716308594,152.84243774414062,0],[305.1553649902344,153.55311584472656,0],[306.3736572265625,154.3653106689453,0],[309.55889892578125,157.13027954101562,0],[313.45587158203125,157.93260192871094,0],[315.1048583984375,157.00498962402344,0],[316.32318115234375,153.95921325683594,0],[314.20086669921875,150.8263397216797,0],[312.59625244140625,148.70591735839844,0],[311.8560485839844,147.46157836914062,0],[311.55145263671875,145.43106079101562,0],[311.55145263671875,144.517333984375,0],[311.95758056640625,143.80665588378906,0],[312.769775390625,143.60360717773438,0],[313.58197021484375,143.90817260742188,0],[314.1911315917969,144.41580200195312,0],[314.29266357421875,144.41580200195312,0],[314.4956970214844,144.92343139648438,0],[315.0605163574219,146.52818298339844,0],[318.0978698730469,150.2532501220703,0],[322.8544616699219,150.5970916748047,0],[325.37603759765625,149.96670532226562,0],[325.66351318359375,147.56309509277344,0],[325.56201171875,145.7356414794922,0],[325.05438232421875,144.21275329589844,0],[324.5467529296875,142.18223571777344,0],[324.851318359375,140.2532501220703,0],[325.05438232421875,140.05020141601562,0],[325.8665771484375,140.1517333984375,0],[327.38946533203125,141.4715576171875,0],[329.6230163574219,143.60360717773438,0],[331.6535339355469,146.34478759765625,0]];
var nubsMitoIn21 = createNubs(controlsMitoIn21);

var controlsMitoIn22 = [[331.6535339355469,146.34478759765625,0],[333.78558349609375,149.0859832763672,0],[335.8160705566406,152.0302276611328,0],[336.12066650390625,153.75616455078125,0],[336.12066650390625,155.279052734375,0],[335.9781188964844,156.27064514160156,0],[335.613037109375,157.00498962402344,0],[335.0038757324219,158.22328186035156,0],[334.39471435546875,158.12176513671875,0],[332.6687927246094,157.91871643066406,0],[331.04437255859375,157.00498962402344,0],[329.2169189453125,155.88819885253906,0],[326.4757385253906,155.279052734375,0],[322.82080078125,157.6141357421875,0],[322.7192687988281,157.6141357421875,0],[321.8055419921875,161.1675262451172,0],[322.31317138671875,164.2133026123047,0],[323.1253967285156,166.3453369140625,0],[323.32843017578125,167.96974182128906,0],[323.2268981933594,169.79721069335938,0],[323.2268981933594,171.42161560058594,0],[322.9223327636719,171.82772827148438,0],[322.2116394042969,172.13229370117188,0],[320.3841857910156,172.23382568359375,0],[320.28265380859375,172.33534240722656,0],[319.1658935546875,171.62466430664062,0],[317.8460388183594,170.9139862060547,0],[316.7292785644531,170.00025939941406,0],[312.6682434082031,168.3758544921875,0],[310.53619384765625,169.39111328125,0],[310.028564453125,172.63992309570312,0],[311.0438232421875,175.8887481689453,0],[312.05908203125,177.9192657470703,0],[312.05908203125,178.62994384765625,0],[311.6529846191406,179.74671936035156,0],[311.3484191894531,180.3558807373047,0],[310.7392578125,180.6604461669922,0],[309.5209655761719,180.96502685546875,0],[307.7950134277344,180.96502685546875,0],[306.67822265625,180.6604461669922,0],[305.7644958496094,179.84825134277344,0],[302.9683837890625,176.78712463378906,0],[300.5041198730469,176.27134704589844,0],[297.6960144042969,176.84442138671875,0],[294.2574768066406,179.02215576171875,0],[293.5124816894531,182.1168212890625,0],[297.13482666015625,185.22909545898438,0],[298.65771484375,186.6504669189453,0],[298.65771484375,187.25961303710938,0],[298.2516174316406,187.76724243164062,0],[297.84552001953125,188.0718231201172,0],[297.2363586425781,187.9702911376953,0],[296.7287292480469,187.76724243164062,0],[296.11956787109375,186.853515625,0],[295.10430908203125,186.0413055419922,0],[293.07379150390625,184.41690063476562,0],[290.2310791015625,184.21385192871094,0],[288.40362548828125,184.21385192871094,0],[285.8330993652344,185.2114715576172,0],[284.22845458984375,187.2745819091797,0],[284.34259033203125,190.91453552246094,0],[284.2410583496094,192.0313262939453,0],[283.9364929199219,192.5389404296875,0],[283.32733154296875,192.64047241210938,0],[282.31207275390625,192.64047241210938,0],[280.5861511230469,191.82826232910156,0],[278.2510681152344,190.60995483398438,0],[276.1190185546875,188.68096923828125,0],[276.1190185546875,188.68096923828125,0],[275.30682373046875,187.46266174316406,0]];
var nubsMitoIn22 = createNubs(controlsMitoIn22);

var controlsMitoBottom = [[273.6848449707031,190.0278778076172,0],[272.7711181640625,188.50498962402344,0],[271.2525329589844,186.06837463378906,0],[271.24822998046875,186.06837463378906,0],[270.5375671386719,184.13938903808594,0],[270.0299377441406,182.6165008544922,0],[269.725341796875,180.99209594726562,0],[269.5223083496094,178.45394897460938,0],[270.1314392089844,176.72801208496094,0],[271.55279541015625,176.2203826904297,0],[273.27874755859375,176.32191467285156,0],[274.3955383300781,177.2356414794922,0],[275.91839599609375,178.0478515625,0],[277.64434814453125,178.75852966308594,0],[278.3550109863281,179.2661590576172,0],[278.65960693359375,177.64175415039062,0],[278.0504455566406,176.32191467285156,0],[276.5275573730469,175.20513916015625,0],[275.7153625488281,173.4792022705078,0],[275.61383056640625,171.4486846923828,0],[275.4107666015625,169.62123107910156,0],[276.0199279785156,168.40292358398438,0],[277.7458801269531,167.4891815185547,0],[280.0809631347656,167.2861328125,0],[282.4160461425781,168.19985961914062,0],[284.4465637207031,169.92579650878906,0],[286.1724853515625,171.5502166748047,0],[287.7969055175781,172.05784606933594,0],[289.1167297363281,171.75326538085938,0],[290.03045654296875,170.5349578857422,0],[289.8274230957031,169.21511840820312,0],[288.6091003417969,167.59071350097656,0],[286.4770812988281,164.84951782226562,0],[285.36029052734375,163.52969360351562,0],[284.4465637207031,161.39764404296875,0],[284.8526611328125,159.7732391357422,0],[286.57861328125,158.3518829345703,0],[287.8984375,157.03204345703125,0],[290.03045654296875,156.72747802734375,0],[291.75640869140625,156.72747802734375,0],[292.9747009277344,157.94578552246094,0],[294.2945556640625,159.26560974121094,0],[295.81744384765625,161.09307861328125,0],[297.13726806640625,162.20985412597656,0],[298.3555603027344,163.52969360351562,0],[300.2845458984375,163.63121032714844,0],[301.6044006347656,162.9205322265625,0],[301.50286865234375,160.48391723632812,0],[301.0967712402344,158.45339965820312,0],[299.77691650390625,156.82899475097656,0],[297.8479309082031,155.0015411376953,0],[296.629638671875,153.9862823486328,0],[295.7159118652344,152.0572967529297,0],[295.81744384765625,149.11305236816406,0],[297.3403015136719,147.6916961669922,0],[299.6754150390625,146.87948608398438,0],[302.51812744140625,147.08253479003906,0],[304.54864501953125,147.6916961669922,0],[305.86846923828125,149.0115203857422,0],[307.0867614746094,151.0420379638672,0],[308.4066162109375,152.66644287109375,0],[310.031005859375,154.29086303710938,0],[311.7569580078125,155.20458984375,0],[313.27984619140625,154.69696044921875,0],[313.4828796386719,153.47865295410156,0],[312.3661193847656,151.34661865234375,0],[310.74169921875,149.11305236816406,0],[309.421875,147.793212890625,0],[308.50811767578125,145.5596466064453,0],[308.6096496582031,143.83372497558594,0],[309.0157470703125,142.00625610351562,0],[310.74169921875,140.48336791992188,0],[313.58441162109375,140.0772705078125,0],[315.91949462890625,141.49862670898438,0],[317.3408508300781,143.4276123046875,0],[317.7469482421875,145.35659790039062,0],[319.0668029785156,147.08253479003906,0],[320.99578857421875,147.9962615966797,0],[322.9247741699219,148.6054229736328,0],[323.63543701171875,147.28558349609375,0],[323.63543701171875,145.76271057128906,0],[322.9247741699219,144.34133911132812,0],[321.7064514160156,142.412353515625,0],[321.1988220214844,139.2650604248047,0],[322.4171447753906,137.031494140625,0],[324.9552917480469,136.42234802246094,0],[328.40716552734375,138.35133361816406,0],[331.1483459472656,141.39710998535156,0],[333.9910583496094,143.83372497558594,0]];
var nubscontrolsMitoBottom = createNubs(controlsMitoBottom);

var boundary1Mito2 = createBezierS1([nubsMitoIn21, nubscontrolsMitoBottom]);
var boundary1Mito2Map = MAP(boundary1Mito2)(domain2);
DRAW(COLOR(mattCoralRed)(boundary1Mito2Map));

var controlsCurveLateral = [[273.6848449707031,190.0278778076172,0],[273.6848449707031,190.0278778076172,-8],[273.6848449707031,190.0278778076172,-10]];
var bCurveLateral = BEZIER(S1)(controlsCurveLateral);
var bMapCurveLateral = MAP(BEZIER(S0)(controlsCurveLateral))(domain1);

var controlsCurveLateral2 = [[333.9910583496094,143.83372497558594,0],[333.9910583496094,143.83372497558594,-8],[333.9910583496094,143.83372497558594,-10]];
var bCurveLateral2 = BEZIER(S1)(controlsCurveLateral2);
var bMapCurveLateral2 = MAP(BEZIER(S0)(controlsCurveLateral2))(domain1);

var CurveCentral = [[333.9910583496094,143.83372497558594,-10],[330.0475769042969,147.69461059570312,-10],[328.626220703125,151.55258178710938,-10],[323.245361328125,153.07546997070312,-10],[318.8797607421875,158.15174865722656,-10],[312.1790771484375,162.31430053710938,-10],[309.4378662109375,165.56312561035156,-10],[302.22955322265625,170.33482360839844,-10],[302.0265197753906,170.33482360839844,-10],[293.8029479980469,176.2233123779297,-10],[285.47784423828125,179.87823486328125,-10],[278.9801940917969,186.57891845703125,-1],[273.6848449707031,190.0278778076172,-10]];
var CurveCentralReverse = [[273.6848449707031,190.0278778076172,-10], [278.9801940917969,186.57891845703125,-10],[285.47784423828125,179.87823486328125,-10],[293.8029479980469,176.2233123779297,-10],[302.0265197753906,170.33482360839844,-10],[302.22955322265625,170.33482360839844,-10],[309.4378662109375,165.56312561035156,-10],[312.1790771484375,162.31430053710938,-10],[318.8797607421875,158.15174865722656,-10],[323.245361328125,153.07546997070312,-10],[328.626220703125,151.55258178710938,-10],[330.0475769042969,147.69461059570312,-10],[333.9910583496094,143.83372497558594,-10]];
var nubsCurveCentral = createNubs(CurveCentral);
var nubsCurveCentralReverse = createNubs(CurveCentralReverse);

var mapLateralSx = MAP(COONS_PATCH([nubscontrolsMitoBottom,nubsCurveCentralReverse,bCurveLateral,bCurveLateral2]))(domain2);
DRAW(COLOR(mattCoralRed)(mapLateralSx));

var controlsMitoBottom2 = [[333.9910583496094,143.83372497558594,0],[336.42767333984375,147.793212890625,0],[338.15362548828125,150.8389892578125,0],[339.2703857421875,153.78323364257812,0],[338.9658203125,155.61068725585938,0],[338.3566589355469,158.25035095214844,0],[336.6307373046875,160.7884979248047,0],[335.10784912109375,161.49917602539062,0],[332.36663818359375,161.49917602539062,0],[329.8285217285156,159.7732391357422,0],[327.7980041503906,158.3518829345703,0],[326.4781799316406,158.04730224609375,0],[324.9552917480469,159.26560974121094,0],[324.65069580078125,161.39764404296875,0],[325.36138916015625,163.83425903320312,0],[326.68121337890625,165.66172790527344,0],[326.9858093261719,167.99681091308594,0],[326.5796813964844,170.02732849121094,0],[326.4781799316406,172.4639434814453,0],[324.34613037109375,174.39292907714844,0],[323.02630615234375,175.0020751953125,0],[320.1835632324219,175.40818786621094,0],[317.95001220703125,174.697509765625,0],[316.5286560058594,172.8700408935547,0],[314.90423583984375,171.24563598632812,0],[312.9752502441406,170.23037719726562,0],[312.0615234375,170.94105529785156,0],[312.1630554199219,172.8700408935547,0],[313.6859436035156,175.0020751953125,0],[314.90423583984375,177.13412475585938,0],[315.411865234375,178.55548095703125,0],[314.7012023925781,181.1951446533203,0],[312.9752502441406,182.81954956054688,0],[311.6554260253906,183.5302276611328,0],[309.6249084472656,183.83480834960938,0],[306.9852600097656,183.73329162597656,0],[304.7516784667969,182.71803283691406,0],[303.53338623046875,181.1951446533203,0],[302.3150634765625,179.57073974609375,0],[300.0815124511719,178.65699768066406,0],[298.15252685546875,178.96157836914062,0],[296.9342041015625,180.2814178466797,0],[297.0357360839844,182.4134521484375,0],[299.269287109375,183.83480834960938,0],[301.50286865234375,185.35769653320312,0],[303.53338623046875,186.16990661621094,0],[303.83795166015625,187.69277954101562,0],[302.7211608886719,188.9110870361328,0],[301.0967712402344,190.3324432373047,0],[298.8631896972656,190.84007263183594,0],[296.629638671875,190.63702392578125,0],[294.09149169921875,189.8248291015625,0],[291.9594421386719,188.09889221191406,0],[290.3350524902344,186.88058471679688,0],[288.5075988769531,186.779052734375,0],[287.187744140625,187.38821411132812,0],[286.68011474609375,189.0126190185547,0],[287.7969055175781,190.9416046142578,0],[287.69537353515625,193.07363891601562,0],[287.0862121582031,195.10415649414062,0],[285.5633544921875,196.22093200683594,0],[283.02520751953125,196.42398071289062,0],[279.3702697753906,194.90110778808594,0],[277.33978271484375,193.1751708984375,0],[273.6848449707031,190.0278778076172,0]];
var nubscontrolsMitoBottom2 = createNubs(controlsMitoBottom2);

var boundary2Mito2 = createBezierS1([nubsMitoIn22, nubscontrolsMitoBottom2]);
var boundary2Mito2Map = MAP(boundary2Mito2)(domain2);
DRAW(COLOR(mattCoralRed)(boundary2Mito2Map));

var mapLateralDx = MAP(COONS_PATCH([nubscontrolsMitoBottom2,nubsCurveCentral,bCurveLateral2,bCurveLateral,]))(domain2);
DRAW(COLOR(mattCoralRed)(mapLateralDx));

var p1 = createControls([[320.8990478515625-5,127.97230529785156,0],[329.17254638671875,134.98680114746094,0],[335.82733154296875,141.82142639160156,0],[344.6404113769531+5,150.09494018554688,0]], -50)
var p2 = createControls([[313.8845520019531-5,132.1090545654297,0],[320.5393371582031,138.58396911621094,0],[333.66900634765625,151.5338134765625,0],[343.38140869140625+5,160.886474609375,0]], -50)
var p3 = createControls([[303.6325988769531-5,137.50482177734375,0],[307.5894775390625,142.3610076904297,0],[329.8919982910156,164.483642578125,0],[335.4676208496094+5,170.4189910888672,0]], -50)
var p4 = createControls([[289.6036071777344-5,146.4977569580078,0],[293.2007751464844,150.27479553222656,0],[320.5393371582031,179.23207092285156,0],[322.87750244140625+5,181.390380859375,0]], -60)
var p5 = createControls([[277.73291015625-5,156.38999938964844,0],[284.3876953125,163.94407653808594,0],[305.97076416015625,184.8076934814453,0],[310.6470947265625+5,189.66387939453125,0]], -50)
var p6 = createControls([[270.35870361328125-5,166.82180786132812,0],[278.0926513671875,176.89390563964844,0],[291.04248046875,190.56317138671875,0],[296.9778137207031+5,198.29710388183594,0]], -50)
var p7 = createControls([[265.1427917480469-5,177.97305297851562+7,0],[271.7975769042969,187.32571411132812+7,0],[275.934326171875,191.8221893310547+7,0],[284.9272766113281+5,200.45541381835938+7,0]], -50)
var curveExMitochondrion2 = createCurveSurface([337.446044921875,135.16665649414062+2,0],[270.53857421875,189+7,0], [p1, p2, p3, p4, p5, p6 ,p7]);
DRAW(COLOR(mattBurgundy)(MAP(curveExMitochondrion2)(domain3)));

var p8 = createControls([[321.0788879394531-5,131.56947326660156,0],[328.453125,136.60552978515625,0],[334.7481689453125,141.2818603515625,0],[341.5827941894531+5,147.21719360351562,0]], -15)
var p9 = createControls([[313.52484130859375-5,134.4472198486328,0],[319.999755859375,139.6631317138672,0],[332.23016357421875,150.99423217773438,0],[340.1439514160156+5,158.36843872070312,0]], -15)
var p10 = createControls([[304.5318908691406-5,139.48326110839844,0],[309.9276428222656,145.7783203125,0],[327.9135437011719,163.22463989257812,0],[332.9495849609375+5,168.44053649902344,0]], -15)
var p11 = createControls([[291.2223205566406-5,148.29635620117188,0],[295.3591003417969,152.97268676757812,0],[317.3018798828125,175.81475830078125,0],[320.3594665527344+5,178.69248962402344,0]], -15)
var p12 = createControls([[282.589111328125-5,156.21014404296875,0],[288.16473388671875,165.2030792236328,0],[303.27288818359375,181.390380859375,0],[308.66864013671875+5,187.50558471679688,0]], -15)
var p13 = createControls([[273.95587158203125-5,165.74266052246094,0],[280.0710754394531,178.33277893066406,0],[288.3446044921875,187.86529541015625,0],[295.1792297363281+5,195.0596466064453,0]], -15)
var p14 = createControls([[268.3802490234375-5,179.05221557617188+7,0],[275.7544860839844,187.14585876464844+7,0],[277.5530700683594,189.84375+7,0],[284.9272766113281+5,197.57766723632812+7,0]], -15)
var curveInMitochondrion2 = createCurveSurface([333.66900634765625,137.50482177734375+1.5,0],[273.2364501953125,188+7,0], [p8, p9, p10, p11, p12, p13, p14]);
createBezierS2([curveExMitochondrion2, curveInMitochondrion2], mattBurgundy);